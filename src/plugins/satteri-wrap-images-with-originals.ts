import { z } from "astro/zod";
import type { Image, Link } from "mdast";
import { fileURLToPath } from "node:url";
import { posix } from "path";
import type { MdastPluginDefinition, MdastVisitorContext } from "satteri";
import { defineMdastPlugin } from "satteri";

const OptionsSchema = z.object({
    base: z.string().optional(),
    collection: z.string().optional(),
});

type Options = z.infer<typeof OptionsSchema>;

function wrapImagesWithOriginals(opts?: Options): MdastPluginDefinition {
    const { base, collection = "docs" } = OptionsSchema.parse(opts ?? {});
    const contentDir = `src/content/${collection}/`;
    // base is the Astro site base path (e.g. 'tech-docs'), used to prefix /originals/ URLs
    const originalsBase = base ? `/${base}/originals` : "/originals";

    return defineMdastPlugin({
        name: "wrap-images-with-originals",
        image(node: Image, ctx: MdastVisitorContext) {
            if (
                !node.url ||
                node.url.startsWith("/") ||
                node.url.includes("://") ||
                node.url.toLowerCase().endsWith(".svg")
            ) {
                return;
            }
            if (!ctx.fileURL) return;

            const filePath = fileURLToPath(ctx.fileURL);
            const markerIdx = filePath.indexOf(contentDir);
            if (markerIdx === -1) return;
            const relDir = posix.dirname(
                filePath.slice(markerIdx + contentDir.length).replace(/\\/g, "/"),
            );

            const resolved = posix.join(relDir, node.url);
            const link: Link = {
                type: "link",
                url: `${originalsBase}/${resolved}`,
                title: null,
                children: [],
            };
            ctx.wrapNode(node, link);
        },
    });
}

export default wrapImagesWithOriginals;
