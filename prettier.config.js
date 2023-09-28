/** @type {import('prettier').Config} */

module.exports = {
    tabWidth: 4,
    bracketSameLine: true,
    overrides: [
        {
            files: ["*.yml", "*.yaml"],
            options: {
                tabWidth: 2,
            },
        },
        {
            files: ["*.astro"],
            options: {
                parser: "astro",
            },
        },
    ],
    plugins: ["prettier-plugin-astro", "prettier-plugin-tailwindcss"],
};
