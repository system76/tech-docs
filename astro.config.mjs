// @ts-check
import { unified } from "@astrojs/markdown-remark";
import starlight from "@astrojs/starlight";
import { defineConfig } from "astro/config";

import rehypeAstroRelativeMarkdownLinks from "astro-rehype-relative-markdown-links";
import { viteStaticCopy } from "vite-plugin-static-copy";

import remarkWrapImagesWithOriginals from "./src/plugins/remark-wrap-images-with-originals.ts";
import { generateSidebar } from "./src/plugins/summary-to-sidebar.ts";

const base = "tech-docs";

const site = import.meta.env.PROD
    ? `https://system76.com/${base}`
    : `http://localhost:4321/${base}`;

// https://astro.build/config
export default defineConfig({
    integrations: [
        starlight({
            title: "System76 Technical Documentation",
            logo: {
                light: "./src/assets/img/system76_logo-light.svg",
                dark: "./src/assets/img/system76_logo-dark.svg",
                replacesTitle: true,
            },
            lastUpdated: true,
            social: [
                {
                    icon: "x.com",
                    label: "Twitter",
                    href: "https://x.com/system76",
                },
                {
                    icon: "linkedin",
                    label: "LinkedIn",
                    href: "https://www.linkedin.com/company/system76",
                },
                {
                    icon: "reddit",
                    label: "reddit",
                    href: "https://www.reddit.com/r/System76/",
                },
                {
                    icon: "github",
                    label: "GitHub",
                    href: "https://github.com/system76",
                },
            ],
            sidebar: generateSidebar(
                new URL("./src/SUMMARY.md", import.meta.url).pathname,
            ),
            tableOfContents: false, // Turned on per-page.
            favicon: "/favicon.png",
            customCss: [
                "./src/assets/css/variables.css",
                "./src/assets/css/img-background.css",
                "./src/assets/css/toc-width-fix.css",
            ],
            locales: {
                root: {
                    label: "English",
                    lang: "en",
                },
            },
            routeMiddleware: "./src/plugins/toc-formatting-middleware.ts",
        }),
    ],
    base,
    site,
    image: {
        service: {
            entrypoint: "./src/avifImageService.mjs",
        },
        layout: "constrained",
        responsiveStyles: true,
    },
    markdown: {
        processor: unified({
            remarkPlugins: [[remarkWrapImagesWithOriginals, { base }]],
            rehypePlugins: [
                [rehypeAstroRelativeMarkdownLinks, { base, collectionBase: false }],
            ],
        }),
    },
    vite: {
        plugins: [
            viteStaticCopy({
                targets: [
                    {
                        src: "src/content/docs/**/*.{jpg,jpeg,png,gif,webp,tiff,avif}",
                        dest: "originals",
                        rename: { stripBase: 3 },
                    },
                ],
            }),
        ],
    },
});
