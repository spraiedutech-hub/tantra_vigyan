'use server';
/**
 * @fileOverview Generates an article on a given topic related to Tantra.
 *
 * - generateArticle - A function that generates an article.
 * - ArticleInput - The input type for the generateArticle function.
 * - ArticleOutput - The return type for the generateArticle function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ArticleInputSchema = z.object({
  topic: z.string().describe('The topic for the article.'),
});
export type ArticleInput = z.infer<typeof ArticleInputSchema>;

const ArticleOutputSchema = z.object({
  title: z.string().describe('A suitable title for the article in Kannada.'),
  content: z.string().describe('The full content of the article in literary Kannada, formatted for readability.'),
});
export type ArticleOutput = z.infer<typeof ArticleOutputSchema>;

export async function generateArticle(input: ArticleInput): Promise<ArticleOutput> {
  return generateArticleFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateArticlePrompt',
  input: {schema: ArticleInputSchema},
  output: {schema: ArticleOutputSchema},
  prompt: `You are a profound scholar of ancient Indian spiritual traditions, fluent in literary Kannada. Your task is to write a short, insightful, and engaging article on the provided topic.

The article should be well-structured, easy to understand for a spiritual seeker, and written in a respectful and authoritative tone.

Topic: {{{topic}}}

Generate a suitable title and the article content in Kannada.
`,
});

const generateArticleFlow = ai.defineFlow(
  {
    name: 'generateArticleFlow',
    inputSchema: ArticleInputSchema,
    outputSchema: ArticleOutputSchema,
  },
  async (input) => {
    const {output} = await prompt(input);
    return output!;
  }
);
