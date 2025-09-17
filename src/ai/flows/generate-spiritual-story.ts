'use server';
/**
 * @fileOverview Generates short, inspirational spiritual stories in Kannada.
 *
 * - generateSpiritualStory - A function that generates a story.
 * - SpiritualStoryOutput - The return type for the generateSpiritualStory function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SpiritualStoryOutputSchema = z.object({
  title: z.string().describe("A suitable title for the story in Kannada."),
  story: z.string().describe("The full story in simple, literary Kannada."),
});
export type SpiritualStoryOutput = z.infer<typeof SpiritualStoryOutputSchema>;

export async function generateSpiritualStory(): Promise<SpiritualStoryOutput> {
  return generateSpiritualStoryFlow();
}

const prompt = ai.definePrompt({
  name: 'generateSpiritualStoryPrompt',
  output: {schema: SpiritualStoryOutputSchema},
  prompt: `You are a wise storyteller, fluent in simple, literary Kannada. Your task is to write a short, inspirational spiritual story (bodha kathe) that is around 150-200 words.

The story should be simple enough for anyone to understand and should contain a clear moral or spiritual lesson relevant to concepts like inner peace, self-realization, guru's importance, or overcoming ego.

Generate a new, unique story with a suitable title. Do not repeat stories.
`,
});

const generateSpiritualStoryFlow = ai.defineFlow(
  {
    name: 'generateSpiritualStoryFlow',
    outputSchema: SpiritualStoryOutputSchema,
  },
  async () => {
    const {output} = await prompt();
    return output!;
  }
);
