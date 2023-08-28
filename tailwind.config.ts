import type { Config } from "tailwindcss";

export default {
    plugins: [require("@tailwindcss/typography")],
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}"],
    theme: {
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
        fontFamily: {
            sans: ["Lato"],
        },
    },
    corePlugins: {
        preflight: true,
    },
} satisfies Config;
