# https://surge-synthesizer.github.io/

**Built with [Astro](https://astro.build/) & [Tailwind CSS](https://tailwindcss.com/)**

1. Install [node.js](https://nodejs.org/en)
    - (Optional) Install [pnpm](https://pnpm.io/)
2. `npm install`/`pnpm install` to install dependencies
3. `npm run dev`/`pnpm dev` to run the development server

# Adding and editing pages

To make changes, all you need to is fork the project. Once you have done that you can create a branch on your fork make changes and then open a PR. [This](https://github.com/surge-synthesizer/surge/blob/main/doc/How%20to%20Git.md) git document for the OSS Surge-Synthesizer project outlines a suggested way of doing work and then creating PRs.

Once you have created a branch in your fork you can then just click the edit button (upper right corner) to edit a post in the `src/content/pages` folder. Because the posts are markdown documents you can just edit stuff in place in the GitHub editor.

To add a page, open the `src/content/pages` folder in your fork and click the create new file button.

A post has a frontmatter section and a body section. The frontmatter section is metadata about the post, such as which image to use and what categories it belongs to. A new post would have frontmatter that looks something like:

```
---
slug: surge-xt
title: Surge XT
summary: Surge XT is an open source hybrid synthesizer, and the synth which started the Surge Synth Team project!
order: 1
thumbnail: /screenshots/surge-xt.png
categories: [Synth]
url: https://surge-synthesizer.github.io
issue_tracker: https://github.com/surge-synthesizer/surge/issues
---
```

The title is the display name for the post, the summary is the text in the card on the main page, the thumbnail is an image for the project, and the categories are a comma-separated list of any appropriate categories (look at the other projects for categories that already exist). The order determines which position a post appears in on the main page.

The body section of a post is where you can write a description of the project in markdown. It is everything after the frontmatter section.

# Editor setup

## Official guides

-   [Astro](https://docs.astro.build/en/editor-setup/)
-   [Tailwind](https://tailwindcss.com/docs/editor-setup)

## VS Code Setup

-   [Astro](https://marketplace.visualstudio.com/items?itemName=astro-build.astro-vscode)
-   [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)
-   [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
-   [MDX](https://marketplace.visualstudio.com/items?itemName=unifiedjs.vscode-mdx)
-   [YAML](https://marketplace.visualstudio.com/items?itemName=redhat.vscode-yaml)

### Set Prettier as your default formatter

```json
{
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "[astro]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "[yaml]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "prettier.documentSelectors": ["**/*.astro"]
}
```

### Format on paste, save & type

```json
{
    "editor.formatOnPaste": true,
    "editor.formatOnSave": true,
    "editor.formatOnType": true
}
```

### Associate CSS files with tailwind

```json
{
    "files.associations": {
        "*.css": "tailwindcss"
    }
}
```
