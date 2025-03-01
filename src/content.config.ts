import {defineCollection, z} from 'astro:content';
import {glob} from 'astro/loaders';

const blog = defineCollection({
	loader: glob({pattern: '**/[^_]*.md', base: './src/blog'}),
	schema: z.object({
		title: z.string(),
		postDate: z.date(),
		description: z.string(),
		image: z.object({
			url: z.string(),
			alt: z.string(),
		}),
	})
});

export const collections = {blog};