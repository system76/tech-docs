import { defineRouteMiddleware } from "@astrojs/starlight/route-data";

const ORGANIZATION = {
    "@type": "Organization",
    name: "System76",
    url: "https://system76.com",
};

// Adds schema.org TechArticle structured data (JSON-LD) to every docs page.
export const onRequest = defineRouteMiddleware((context) => {
    const { starlightRoute } = context.locals;

    // The 404 page and the landing pages (home has an empty id, plus archive) aren't articles.
    if (["404", "", "archive"].includes(starlightRoute.id)) {
        return;
    }

    // Starlight already puts the canonical URL in the head. Reuse it so the URL carries the right
    // host and the /tech-docs base on every environment. Without a canonical (no `site` set), skip.
    const canonical = starlightRoute.head.find(
        (tag) => tag.tag === "link" && tag.attrs?.rel === "canonical",
    )?.attrs?.href;

    if (typeof canonical !== "string") {
        return;
    }

    const { title, description } = starlightRoute.entry.data;
    const { lastUpdated } = starlightRoute;

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "TechArticle",
        headline: title,
        description,
        url: canonical,
        mainEntityOfPage: { "@type": "WebPage", "@id": canonical },
        // Taken from git history when available. There is no publish date to use.
        dateModified: lastUpdated?.toISOString(),
        inLanguage: starlightRoute.lang,
        author: ORGANIZATION,
        publisher: ORGANIZATION,
    };

    starlightRoute.head.push({
        tag: "script",
        attrs: { type: "application/ld+json" },
        // Drop empty fields, and escape "<" so page text can't close the script tag.
        content: JSON.stringify(
            Object.fromEntries(Object.entries(jsonLd).filter(([, value]) => value)),
        ).replace(/</g, "\\u003c"),
    });
});
