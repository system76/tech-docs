import { readFileSync, writeFileSync, readdirSync, rmSync } from 'fs';
import { parseArgs } from 'util';
import { join, extname } from 'path';
import { dump as yamlDump } from 'js-yaml';
import { remark } from 'remark';
import remarkFrontmatter from 'remark-frontmatter';
import type { Root, Heading, PhrasingContent } from 'mdast';

// ─── Pure helpers (internal) ──────────────────────────────────────────────────

/** Recursively extract plain text from phrasing-content nodes. */
function nodeText(nodes: PhrasingContent[]): string {
  return nodes
    .map((n) => {
      if (n.type === 'text' || n.type === 'inlineCode') return n.value;
      if ('children' in n) return nodeText(n.children as PhrasingContent[]);
      return '';
    })
    .join('');
}

/**
 * Find and remove the first H1 heading from `tree` (mutates in place).
 * Returns the heading's plain-text content, or `null` if no H1 exists.
 */
function extractH1(tree: Root): string | null {
  const idx = tree.children.findIndex(
    (n): n is Heading => n.type === 'heading' && (n as Heading).depth === 1
  );
  if (idx === -1) return null;
  const title = nodeText((tree.children[idx] as Heading).children);
  tree.children.splice(idx, 1);
  return title;
}

/**
 * Insert or update a `yaml` frontmatter node at position 0 of `tree`.
 *
 * - If a `yaml` node already exists, its `title:` line is replaced while all
 *   other fields are preserved — making repeated runs idempotent.
 * - Otherwise a fresh `yaml` node is prepended.
 */
function upsertTitleFrontmatter(tree: Root, title: string): void {
  const titleLine = yamlDump({ title }).trim();

  if (tree.children[0]?.type === 'yaml') {
    const node = tree.children[0] as { type: 'yaml'; value: string };
    const rest = node.value
      .split('\n')
      .filter((line) => !/^title\s*:/.test(line))
      .join('\n')
      .trim();
    node.value = rest ? `${titleLine}\n${rest}` : titleLine;
  } else {
    // remark-frontmatter recognises `{ type: 'yaml' }` during stringify
    tree.children.unshift({ type: 'yaml', value: titleLine } as never);
  }
}

// ─── Core transformer ─────────────────────────────────────────────────────────

// Frozen once on first use; reused across all files.
const processor = remark().use(remarkFrontmatter);

/**
 * Transform raw Markdown into MDX-ready content.
 *
 * Promotes the first H1 heading to a `title:` frontmatter field, preserving
 * any pre-existing frontmatter. remark-frontmatter handles the `---` delimiters
 * so there is no manual string assembly.
 *
 * Pure `string → { output, title }` — testable without any I/O.
 */
export function transformContent(content: string): {
  output: string;
  title: string | null;
} {
  const tree = processor.parse(content) as Root;
  const title = extractH1(tree);

  if (title !== null) {
    upsertTitleFrontmatter(tree, title);
  }

  return { output: processor.stringify(tree), title };
}

// ─── I/O layer ────────────────────────────────────────────────────────────────

/** Recursively collect all `.md` file paths beneath `dir`. */
function findMdFiles(dir: string): string[] {
  const results: string[] = [];
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...findMdFiles(full));
    } else if (entry.isFile() && extname(entry.name) === '.md') {
      results.push(full);
    }
  }
  return results;
}

/** Read `mdPath`, transform it, and write the result as a sibling `.mdx` file. */
function processFile(mdPath: string, { deleteOriginal = false } = {}): void {
  const raw = readFileSync(mdPath, 'utf8');
  const { output, title } = transformContent(raw);

  if (title === null) {
    console.warn(`WARN: no H1 found in ${mdPath}`);
  }

  const mdxPath = mdPath.replace(/\.md$/, '.mdx');
  writeFileSync(mdxPath, output, 'utf8');

  if (deleteOriginal) {
    rmSync(mdPath);
    console.log(`✓ ${mdPath} → ${mdxPath} (deleted original)`);
  } else {
    console.log(`✓ ${mdPath} → ${mdxPath}`);
  }
}

// ─── Entry point ──────────────────────────────────────────────────────────────

function main(args: string[] = process.argv.slice(2)): void {
  const { values, positionals } = parseArgs({
    args,
    options: { delete: { type: 'boolean', short: 'd', default: false } },
    allowPositionals: true,
  });

  const [inputDir] = positionals;
  if (!inputDir) {
    console.error('Usage: pnpm convert [-d|--delete] <directory>');
    process.exit(1);
  }
  for (const mdPath of findMdFiles(inputDir)) {
    processFile(mdPath, { deleteOriginal: values.delete });
  }
}

// ESM-safe guard: only run when executed directly, not when imported for tests
if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}
