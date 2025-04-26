import { defineCollection, z } from 'astro:content'
import {glob} from 'astro/loaders'

const blog = defineCollection({
    loader: glob({pattern: '**/*.md', base: './src/data/blog'}),
    schema: z.object({
        title: z.string(),
        date: z.coerce.date(),
        tags: z.array(z.string().nonempty()).optional()
    }).strict()
})

export const collections = {blog}