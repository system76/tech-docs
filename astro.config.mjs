// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import rehypeAstroRelativeMarkdownLinks from 'astro-rehype-relative-markdown-links';

// https://astro.build/config
export default defineConfig({
    integrations: [
        starlight({
            title: 'My Docs',
            social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
            sidebar: [
                {
                    label: 'Docs',
                    items: [{ autogenerate: { directory: 'docs' } }],
                },
            ],
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
