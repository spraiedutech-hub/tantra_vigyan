'use server';
/**
 * @fileOverview Generates continuous, in-depth text about Yantras and Mandalas, and a matching SVG.
 *
 * - generateYantraText - A function that generates a new block of text and an SVG on the subject.
 * - YantraTextInput - The input type for the generateYantraText function.
 * - YantraTextOutput - The return type for the generateYantraText function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';
import { generateYantraSvg } from './generate-yantra-svg';

const YantraTextInputSchema = z.object({
  topic: z.string().describe('The topic to generate text about, which should be Yantras and Mandalas.'),
  previousYantras: z.array(z.string()).optional().describe('A list of yantras that have already been discussed to ensure variety.'),
});
export type YantraTextInput = z.infer<typeof YantraTextInputSchema>;

const YantraTextOutputSchema = z.object({
  name: z.string().describe('The name of the Yantra or Mandala, for example, "Sri Yantra".'),
  description: z.string().describe('A new, detailed paragraph about a specific Yantra or Mandala in Kannada.'),
  svgString: z.string().describe('A string containing the complete SVG code for the yantra.'),
});
export type YantraTextOutput = z.infer<typeof YantraTextOutputSchema>;

export async function generateYantraText(input: YantraTextInput): Promise<YantraTextOutput> {
  return generateYantraTextFlow(input);
}

const descriptionPrompt = ai.definePrompt({
  name: 'generateYantraDescriptionPrompt',
  input: {schema: YantraTextInputSchema},
  output: {schema: z.object({
    name: z.string().describe('The name of the Yantra or Mandala, for example, "Sri Yantra".'),
    description: z.string().describe('A new, detailed paragraph about a specific Yantra or Mandala in Kannada.'),
  })},
  prompt: `You are a profound scholar of ancient Indian sacred geometry, fluent in literary Kannada. Your task is to generate a continuous, in-depth index and explanation of various Yantras and Mandalas.

Each response MUST introduce and describe a different Yantra or Mandala. The language should be rich, respectful, and authoritative.

Topic: {{{topic}}}

{{#if previousYantras}}
IMPORTANT: The following yantras have already been discussed: {{#each previousYantras}}{{{this}}}{{#unless @last}}, {{/unless}}{{/each}}. You MUST introduce a new, completely different Yantra or Mandala that is NOT on this list. Do not repeat.
{{else}}
Start with an introduction to a significant Yantra, for example, the "Sri Yantra".
{{/if}}

Generate the next entry in Kannada. Provide the name of the yantra/mandala and a detailed description of its symbolism, structure, and spiritual significance. Do not add titles or headings.
`,
});

const generateYantraTextFlow = ai.defineFlow(
  {
    name: 'generateYantraTextFlow',
    inputSchema: YantraTextInputSchema,
    outputSchema: YantraTextOutputSchema,
  },
  async input => {
    // 1. Generate the description of a new yantra
    const { output: descriptionOutput } = await descriptionPrompt(input);
    if (!descriptionOutput) {
        throw new Error("Failed to generate yantra description.");
    }
    
    const { name, description } = descriptionOutput;

    // 2. Generate a unique SVG for that yantra
    const svgOutput = await generateYantraSvg({ name, description });

    // 3. Combine and return
    return {
        name,
        description,
        svgString: svgOutput.svgString,
    };
  }
);
