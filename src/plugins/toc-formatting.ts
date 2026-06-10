import { defineRouteMiddleware } from "@astrojs/starlight/route-data";

export const onRequest = defineRouteMiddleware((context) => {
    const { starlightRoute } = context.locals;

    if (starlightRoute.toc) {
        // On pages with a ToC...

        // Strip trailing colon from anything that has it
        for (const tocItem of starlightRoute.toc?.items) {
            if (tocItem.text.endsWith(":")) {
                tocItem.text = tocItem.text.slice(0, -1);
            }
        }
    }
});
