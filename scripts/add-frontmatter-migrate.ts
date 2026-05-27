import { readFileSync, writeFileSync, globSync } from 'node:fs';
import { remark } from 'remark';
import { dump } from 'js-yaml';
import type { Root, Heading, PhrasingContent } from 'mdast';

function parseMarkdown(source: string): Root {
    return remark().parse(source) as Root;
}

function findFirstH1(tree: Root): Heading | null {
    for (const node of tree.children) {
        if (node.type === 'heading' && node.depth === 1) return node;
    }
    return null;
}

function extractText(nodes: PhrasingContent[]): string {
    return nodes.map(n => {
        if ('value' in n) return n.value;
        if ('children' in n) return extractText(n.children as PhrasingContent[]);
        return '';
    }).join('');
}

function extractHeadingText(node: Heading): string {
    return extractText(node.children as PhrasingContent[]);
}

function removeHeading(source: string, node: Heading): string {
    const start = node.position!.start.offset!;
    const end   = node.position!.end.offset!;
    const before = source.slice(0, start);
    const after  = source.slice(end).replace(/^\n/, '');
    return (before + after).trimStart();
}

function buildFrontmatter(title: string): string {
    const yaml = dump({ title }, { lineWidth: -1 }).trimEnd();
    return `---\n${yaml}\n---\n\n`;
}

function migrateSource(source: string): string | null {
    const tree = parseMarkdown(source);
    const h1   = findFirstH1(tree);
    if (!h1) return null;
    const title = extractHeadingText(h1);
    const body  = removeHeading(source, h1);
    return buildFrontmatter(title) + body;
}

function processFile(filePath: string): void {
    const source   = readFileSync(filePath, 'utf-8');
    const migrated = migrateSource(source);
    if (!migrated) throw new Error('no H1 heading found');
    writeFileSync(filePath, migrated, 'utf-8');
}

// CLI
const files = process.argv.slice(2).flatMap(arg => globSync(arg));
if (files.length === 0) {
    console.error('Usage: node scripts/add-frontmatter-title.ts <file...>');
    process.exit(1);
}

let failed = false;
for (const file of files) {
    try {
        processFile(file);
        console.log(`✓ ${file}`);
    } catch (err) {
        console.error(`✗ ${file}: ${(err as Error).message}`);
        failed = true;
    }
}
if (failed) process.exit(1);
