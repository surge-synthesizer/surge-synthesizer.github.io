import type { Config } from "tailwindcss";

export default {
    plugins: [require("@tailwindcss/typography")],
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        fontFamily: {
            sans: ["Lato"],
        },
        extend: {
            colors: {
                background: "var(--background)",
                backgroundCard: "var(--backgroundCard)",
                backgroundBlue: "var(--backgroundBlue)",
                accentOrange: "var(--accentOrange)",
                accentBlue: "var(--accentBlue)",
                accent1A: "var(--accent1A)",
                accent1B: "var(--accent1B)",
                accent2A: "var(--accent2A)",
                accent2B: "var(--accent2B)",
            },
        },
    },
} satisfies Config;
