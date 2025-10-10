import mdx from "@astrojs/mdx";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import remarkGithub from "remark-github";

// https://astro.build/config
export default defineConfig({
    vite: { plugins: [tailwindcss()] },
    integrations: [mdx()],
    markdown: {
        remarkPlugins: [
            [remarkGithub, { repository: "https://github.com/surge-synthesizer/surge" }],
        ],
        shikiConfig: {
            themes: {
                light: "dark-plus",
                dark: "light-plus",
            },
            wrap: true,
        },
    },
});
