
'use server';
/**
 * @fileOverview Generates continuous, in-depth text about Tantra and Mantra.
 *
 * - generateKnowledgeText - A function that generates a new block of text on the subject.
 * - KnowledgeTextInput - The input type for the generateKnowledgeText function.
 * - KnowledgeTextOutput - The return type for the generateKnowledgeText function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const KnowledgeTextInputSchema = z.object({
  topic: z.string().describe('The topic to generate text about, which should be Tantra and Mantra.'),
  previousText: z.string().optional().describe('The last few sentences of the previously generated text to ensure continuity.'),
});
export type KnowledgeTextInput = z.infer<typeof KnowledgeTextInputSchema>;

const KnowledgeTextOutputSchema = z.object({
  text: z.string().describe('A new, detailed paragraph about the topic in Kannada.'),
});
export type KnowledgeTextOutput = z.infer<typeof KnowledgeTextOutputSchema>;

export async function generateKnowledgeText(input: KnowledgeTextInput): Promise<KnowledgeTextOutput> {
  return generateKnowledgeTextFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateKnowledgeTextPrompt',
  input: {schema: KnowledgeTextInputSchema},
  output: {schema: KnowledgeTextOutputSchema},
  prompt: `You are a profound scholar of ancient Indian spiritual traditions, fluent in literary Kannada. Your task is to generate a continuous, in-depth explanation of Tantra and Mantra.

The explanation should flow naturally, as if from a single, vast text. Each response should be a new, detailed paragraph that builds upon the previous one. The language should be rich, respectful, and authoritative, suitable for a spiritual seeker.

Topic: {{{topic}}}

{{#if previousText}}
This is the end of the previous paragraph. Continue from here, ensuring a seamless transition:
"{{{previousText}}}"
{{else}}
Start with an introduction to the vast and profound world of Tantra.
{{/if}}

Generate the next paragraph in Kannada. Do not repeat content. Do not add titles or headings.
`,
});

const generateKnowledgeTextFlow = ai.defineFlow(
  {
    name: 'generateKnowledgeTextFlow',
    inputSchema: KnowledgeTextInputSchema,
    outputSchema: KnowledgeTextOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
