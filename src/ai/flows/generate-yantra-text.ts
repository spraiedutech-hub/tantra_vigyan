'use server';
/**
 * @fileOverview Generates continuous, in-depth text about Yantras and Mandalas.
 *
 * - generateYantraText - A function that generates a new block of text on the subject.
 * - YantraTextInput - The input type for the generateYantraText function.
 * - YantraTextOutput - The return type for the generateYantraText function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const YantraTextInputSchema = z.object({
  topic: z.string().describe('The topic to generate text about, which should be Yantras and Mandalas.'),
  previousText: z.string().optional().describe('The last yantra discussed to ensure variety and continuity.'),
});
export type YantraTextInput = z.infer<typeof YantraTextInputSchema>;

const YantraTextOutputSchema = z.object({
  name: z.string().describe('The name of the Yantra or Mandala, for example, "Sri Yantra".'),
  description: z.string().describe('A new, detailed paragraph about a specific Yantra or Mandala in Kannada.'),
});
export type YantraTextOutput = z.infer<typeof YantraTextOutputSchema>;

export async function generateYantraText(input: YantraTextInput): Promise<YantraTextOutput> {
  return generateYantraTextFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateYantraTextPrompt',
  input: {schema: YantraTextInputSchema},
  output: {schema: YantraTextOutputSchema},
  prompt: `You are a profound scholar of ancient Indian sacred geometry, fluent in literary Kannada. Your task is to generate a continuous, in-depth index and explanation of various Yantras and Mandalas.

Each response should introduce and describe a different Yantra or Mandala. The language should be rich, respectful, and authoritative.

Topic: {{{topic}}}

{{#if previousText}}
The last one discussed was "{{{previousText}}}". Please introduce a new, different Yantra or Mandala.
{{else}}
Start with an introduction to a significant Yantra, for example, the "Sri Yantra".
{{/if}}

Generate the next entry in Kannada. Provide the name of the yantra/mandala and a detailed description of its symbolism, structure, and spiritual significance. Do not repeat. Do not add titles or headings.
`,
});

const generateYantraTextFlow = ai.defineFlow(
  {
    name: 'generateYantraTextFlow',
    inputSchema: YantraTextInputSchema,
    outputSchema: YantraTextOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
