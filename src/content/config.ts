import { defineCollection, z } from "astro:content";

const manual_xt = defineCollection({
    type: "content",
    schema: z.object({
        title: z.string(),
        order: z.number(),
    }),
});

const changelogs = defineCollection({
    type: "content",
    schema: z.object({
        title: z.string(),
        order: z.number(),
        version: z.string(),
        date: z.date().optional(),
    }),
});

const pages = defineCollection({
    type: "content",
    schema: z.object({
        "title": z.string(),
        "margin-top": z.string().optional(),
        "margin-bottom": z.string().optional(),
        "margin-left": z.string().optional(),
        "margin-right": z.string().optional(),
    }),
});

const skins = defineCollection({
    type: "content",
    schema: z.object({
        order: z.number(),
        name: z.string(),
        thumbnail: z.string(),
        download: z.string(),
        author: z.string(),
        url: z.string().optional(),
        description: z.string().optional(),
    }),
});

export const collections = {
    manual_xt: manual_xt,
    changelogs: changelogs,
    old_changelogs: changelogs,
    pages: pages,
    skins: skins,
};
