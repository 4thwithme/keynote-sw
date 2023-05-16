import { defineCollection, z as zod } from "astro:content";
import { SITE } from "../consts";

const docs = defineCollection({
  schema: zod.object({
    title: zod.string().default(SITE.title),
    description: zod.string().default(SITE.description),
    lang: zod.literal("en-us").default(SITE.defaultLanguage),
    dir: zod.union([zod.literal("ltr"), zod.literal("rtl")]).default("ltr"),
    image: zod.object({ src: zod.string(), alt: zod.string() }).optional(),
    ogLocale: zod.string().optional(),
  }),
});

export const collections = { docs };
