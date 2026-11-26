import sharpService from "astro/assets/services/sharp";
import sharp from "sharp";

sharp.concurrency(1);

// Width of the Starlight content column: keep in sync with --sl-content-width in
// src/assets/css/variables.css. Images can never be displayed wider than this.
const CONTENT_WIDTH_REM = 47;
const CONTENT_WIDTH_PX = CONTENT_WIDTH_REM * 16;

export default {
    ...sharpService,

    // Let SVGs skip validation entirely — sharp can't process them
    validateOptions(options, config) {
        if (options.src?.format !== "svg") {
            options.format = "avif";

            // Astro's "constrained" layout generates
            //   sizes="(min-width: <image width>px) <image width>px, 100vw"
            // which tells the browser the image may fill the whole viewport. Here it
            // never does (the content column is capped), so browsers pick huge
            // srcset candidates: the 3840w file on a 1440px laptop at 2x, or the 2048w
            // file on a 1080p monitor at 1x. Use the real maximum display width instead.
            // Images narrower than the column keep Astro's value, which is already correct.
            if (
                options["data-astro-image"] === "constrained" &&
                options.width > CONTENT_WIDTH_PX
            ) {
                options.sizes = `(min-width: ${CONTENT_WIDTH_REM}rem) ${CONTENT_WIDTH_REM}rem, 100vw`;
            }
        }
        return sharpService.validateOptions(options, config);
    },
};
