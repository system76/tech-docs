import { satteri } from "@astrojs/markdown-satteri";
import starlight from "@astrojs/starlight";
import type { StarlightConfig } from "@astrojs/starlight/types";
import { defineConfig, fontProviders } from "astro/config";

import { satteriRelativeMarkdownLinks } from "@system76/satteri-relative-markdown-links";
import { viteStaticCopy } from "vite-plugin-static-copy";

import wrapImagesWithOriginals from "./src/plugins/satteri-wrap-images-with-originals.ts";
import { generateSidebar } from "./src/plugins/summary-to-sidebar.ts";

type HeadConfig = NonNullable<StarlightConfig["head"]>[number];

const base = "tech-docs";

const buildEnv = process.env.BUILD_ENV ?? "local";

const siteByBuildEnv = {
    local: `http://localhost:4321/${base}`,
    staging: `https://genesis76.com/${base}`,
    production: `https://system76.com/${base}`,
};

if (!(buildEnv in siteByBuildEnv)) {
    throw new Error(
        `Invalid BUILD_ENV "${buildEnv}", expected one of: ${Object.keys(siteByBuildEnv).join(", ")}`,
    );
}

function googleAnalyticsHead(): HeadConfig[] {
    if (buildEnv !== "production") {
        return [];
    }

    return [
        {
            tag: "script",
            attrs: {
                async: true,
                src: "https://www.googletagmanager.com/gtag/js?id=G-H37KSF3165",
            },
        },
        {
            tag: "script",
            content: `window.dataLayer = window.dataLayer || [];
            function gtag() { dataLayer.push(arguments); }
            gtag('js', new Date());
            gtag('config', 'G-H37KSF3165');`,
        },
    ];
}

const site = siteByBuildEnv[buildEnv as keyof typeof siteByBuildEnv];

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
            components: {
                Head: "./src/components/Head.astro",
            },
            head: [...googleAnalyticsHead()],
        }),
    ],
    base,
    site,
    fonts: [
        {
            provider: fontProviders.fontsource(),
            name: "Fira Sans",
            cssVariable: "--font-fira-sans",
            weights: [400, 700],
            styles: ["normal"],
            subsets: ["latin"],
        },
        {
            provider: fontProviders.fontsource(),
            name: "Roboto Slab",
            cssVariable: "--font-roboto-slab",
            weights: [400, 700],
            styles: ["normal"],
            subsets: ["latin"],
        },
        {
            provider: fontProviders.fontsource(),
            name: "Ubuntu Mono",
            cssVariable: "--font-ubuntu-mono",
            weights: [400],
            styles: ["normal"],
            subsets: ["latin"],
        },
    ],
    image: {
        service: {
            entrypoint: "./src/avifImageService.mjs",
        },
        layout: "constrained",
        responsiveStyles: true,
    },
    markdown: {
        processor: satteri({
            mdastPlugins: [
                satteriRelativeMarkdownLinks({
                    base,
                    collectionBase: false,
                }),
                wrapImagesWithOriginals({
                    base,
                }),
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
