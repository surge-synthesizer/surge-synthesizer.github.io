import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

// Disable auto linking for headings until we can solve ID clobbering..
// import remarkToc from "remark-toc";
// import { rehypeHeadingIds } from "@astrojs/markdown-remark";
// import rehypeSlug from "rehype-slug";
// import rehypeAutolinkHeadings from "rehype-autolink-headings";

// https://astro.build/config
export default defineConfig({
    markdown: {
        // remarkPlugins: [remarkToc],
        rehypePlugins: [
            // rehypeHeadingIds,
            // [rehypeSlug, { prefix: Math.random() }],
            // [
            //     rehypeAutolinkHeadings,
            //     {
            //         behavior: "wrap",
            //         properties: {
            //             className: `no-underline`,
            //         },
            //     },
            // ],
        ],
        shikiConfig: {
            theme: "css-variables",
            wrap: true,
        },
    },
    integrations: [mdx(), react(), tailwind({ applyBaseStyles: false })],
});
