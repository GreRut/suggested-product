// 1. Import utilities from `astro:content`
import { defineCollection, z } from 'astro:content';
import { glob, file } from 'astro/loaders';

const products = defineCollection({
    loader: glob ({pattern: "**/*.json", base: "./src/data/products"}),
    schema: z.object({
    name: z.string(),
    maja: z.string()
    })
});

// 4. Export a single `collections` object to register your collection(s)
export const collections = { products };