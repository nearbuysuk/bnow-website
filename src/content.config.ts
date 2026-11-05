import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const legals = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/legals' }),
  schema: z.object({
    title: z.string(),
    shortTitle: z.string(),
    summary: z.string(),
    effectiveDate: z.string(),
    lastUpdated: z.string(),
    order: z.number(),
    audience: z.enum(['All Users', 'Consumers & Retailers', 'Retail Partners']),
  }),
});

export const collections = { legals };

