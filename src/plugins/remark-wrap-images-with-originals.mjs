import { posix } from 'path';

const CONTENT_DOCS = 'src/content/docs/';

export default function remarkWrapImagesWithOriginals() {
    return (tree, file) => {
        const filePath = file.history[0];
        if (!filePath) return;
        const markerIdx = filePath.indexOf(CONTENT_DOCS);
        if (markerIdx === -1) return;
        const relDir = posix.dirname(
            filePath.slice(markerIdx + CONTENT_DOCS.length).replace(/\\/g, '/')
        );
        walk(tree, relDir);
    };
}

function walk(node, relDir) {
    if (!node.children) return;
    for (let i = 0; i < node.children.length; i++) {
        const child = node.children[i];
        if (child.type === 'image' && child.url && !child.url.startsWith('/') && !child.url.includes('://')) {
            const resolved = posix.join(relDir, child.url);
            node.children[i] = {
                type: 'link',
                url: `/originals/${resolved}`,
                title: null,
                children: [child],
            };
        } else {
            walk(child, relDir);
        }
    }
}
