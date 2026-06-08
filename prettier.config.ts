import type { Config } from "prettier";

export default {
    printWidth: 88,
    plugins: ["prettier-plugin-organize-imports", "prettier-plugin-astro"],
    overrides: [{ files: "*.astro", options: { parser: "astro" } }],
    trailingComma: "all",
    tabWidth: 4,
} satisfies Config;
