// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import { generateSidebar } from './scripts/summary-to-sidebar.ts';

import rehypeAstroRelativeMarkdownLinks from 'astro-rehype-relative-markdown-links';

// https://astro.build/config
export default defineConfig({
    integrations: [
        starlight({
            title: 'System76 Technical Documentation',
            social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
            sidebar: generateSidebar(new URL('./src/SUMMARY.md', import.meta.url).pathname)
        }),
    ],
    site: 'http://localhost:4321',
    image: {
        service: {
            entrypoint: './src/avifImageService.mjs',
        },
        layout: "constrained",
        responsiveStyles: true
    },
    markdown: {
        rehypePlugins: [[rehypeAstroRelativeMarkdownLinks, { collectionBase: false }]],
      },
});
