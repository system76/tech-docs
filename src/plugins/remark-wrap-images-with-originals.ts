import { posix } from 'path';
import { z } from 'astro/zod';
import type { Plugin } from 'unified';
import type { Root, Image, Link, Parent } from 'mdast';

const OptionsSchema = z.object({
    base: z.string().optional(),
    collection: z.string().optional(),
});

type Options = z.infer<typeof OptionsSchema>;

const remarkWrapImagesWithOriginals: Plugin<[Options?], Root> = (opts) => {
    const { base, collection = 'docs' } = OptionsSchema.parse(opts ?? {});
    const contentDir = `src/content/${collection}/`;
    // base is the Astro site base path (e.g. 'tech-docs'), used to prefix /originals/ URLs
    const originalsBase = base ? `/${base}/originals` : '/originals';

    return (tree, file) => {
        const filePath = file.history[0];
        if (!filePath) return;
        const markerIdx = filePath.indexOf(contentDir);
        if (markerIdx === -1) return;
        const relDir = posix.dirname(
            filePath.slice(markerIdx + contentDir.length).replace(/\\/g, '/')
        );
        walk(tree, relDir, originalsBase);
    };
};

export default remarkWrapImagesWithOriginals;

function walk(node: Parent, relDir: string, originalsBase: string): void {
    for (let i = 0; i < node.children.length; i++) {
        const child = node.children[i];
        if (child.type === 'image') {
            const image = child as Image;
            if (image.url && !image.url.startsWith('/') && !image.url.includes('://') && !image.url.toLowerCase().endsWith('.svg')) {
                const resolved = posix.join(relDir, image.url);
                const link: Link = {
                    type: 'link',
                    url: `${originalsBase}/${resolved}`,
                    title: null,
                    children: [image],
                };
                (node.children as unknown[])[i] = link;
            }
        } else if ('children' in child) {
            walk(child as Parent, relDir, originalsBase);
        }
    }
}
