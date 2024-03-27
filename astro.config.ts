import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
    markdown: {
        shikiConfig: {
            theme: "dark-plus",
            wrap: true,
        },
    },
    integrations: [mdx(), react(), tailwind()],
});
