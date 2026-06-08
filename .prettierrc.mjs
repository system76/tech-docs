export default {
  printWidth: 88,
  plugins: ["prettier-plugin-organize-imports", "prettier-plugin-astro"],
  overrides: [{ files: "*.astro", options: { parser: "astro" } }],
};
