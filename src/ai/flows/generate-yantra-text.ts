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
  previousYantras: z.array(z.string()).optional().describe('A list of yantras that have already been discussed to ensure variety.'),
});
export type YantraTextInput = z.infer<typeof YantraTextInputSchema>;

const YantraTextOutputSchema = z.object({
  name: z.string().describe('The name of the Yantra or Mandala, for example, "Sri Yantra".'),
  description: z.string().describe('A new, detailed paragraph about a specific Yantra or Mandala in Kannada.'),
  variant: z.enum(['sri', 'star', 'lotus', 'cosmos']).describe('The visual variant of the yantra to display.'),
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

Each response MUST introduce and describe a different Yantra or Mandala. The language should be rich, respectful, and authoritative.

Topic: {{{topic}}}

{{#if previousYantras}}
IMPORTANT: The following yantras have already been discussed: {{#each previousYantras}}{{{this}}}{{#unless @last}}, {{/unless}}{{/each}}. You MUST introduce a new, completely different Yantra or Mandala that is NOT on this list. Do not repeat.
{{else}}
Start with an introduction to a significant Yantra, for example, the "Sri Yantra".
{{/if}}

Based on the Yantra you are describing, you MUST select the most appropriate visual variant from the available options: 'sri', 'star', 'lotus', 'cosmos'.
- If you describe the Sri Yantra, set the variant to 'sri'.
- For a six-pointed star yantra (like a Shatkona), use 'star'.
- For a floral mandala (like a Padma Mandala), use 'lotus'.
- For abstract cosmic diagrams or other complex patterns, use 'cosmos'.
Your selection must be accurate.

Generate the next entry in Kannada. Provide the name of the yantra/mandala, a detailed description of its symbolism, structure, and spiritual significance, and the corresponding variant. Do not add titles or headings.
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
