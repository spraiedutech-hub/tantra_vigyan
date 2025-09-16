'use server';
/**
 * @fileOverview Generates continuous, in-depth text about ancient Tantra literature.
 *
 * - generateLiteratureText - A function that generates a new block of text on the subject.
 * - LiteratureTextInput - The input type for the generateLiteratureText function.
 * - LiteratureTextOutput - The return type for the generateLiteratureText function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const LiteratureTextInputSchema = z.object({
  topic: z.string().describe('The topic to generate text about, which should be ancient Tantra texts.'),
  previousText: z.string().optional().describe('The last text discussed to ensure variety and continuity.'),
});
export type LiteratureTextInput = z.infer<typeof LiteratureTextInputSchema>;

const LiteratureTextOutputSchema = z.object({
  text: z.string().describe('A new, detailed paragraph about a specific ancient Tantra text in Kannada.'),
});
export type LiteratureTextOutput = z.infer<typeof LiteratureTextOutputSchema>;

export async function generateLiteratureText(input: LiteratureTextInput): Promise<LiteratureTextOutput> {
  return generateLiteratureTextFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateLiteratureTextPrompt',
  input: {schema: LiteratureTextInputSchema},
  output: {schema: LiteratureTextOutputSchema},
  prompt: `You are a profound scholar of ancient Indian spiritual traditions, fluent in literary Kannada. Your task is to generate a continuous, in-depth index and explanation of ancient Tantra texts.

Each response should introduce and describe a different ancient Tantra text. The language should be rich, respectful, and authoritative.

Topic: {{{topic}}}

{{#if previousText}}
The last text discussed was "{{{previousText}}}". Please introduce a new, different Tantra text.
{{else}}
Start with an introduction to a significant Tantra text, for example, the "Mahanirvana Tantra".
{{/if}}

Generate the next entry in Kannada. Provide the name of the text, its significance, and a brief overview of its contents. Do not repeat texts. Do not add titles or headings, just the description.
`,
});

const generateLiteratureTextFlow = ai.defineFlow(
  {
    name: 'generateLiteratureTextFlow',
    inputSchema: LiteratureTextInputSchema,
    outputSchema: LiteratureTextOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
