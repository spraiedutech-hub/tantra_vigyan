'use server';
/**
 * @fileOverview Generates a unique SVG string for a given Yantra or Mandala.
 *
 * - generateYantraSvg - A function that generates an SVG graphic.
 * - YantraSvgInput - The input type for the generateYantraSvg function.
 * - YantraSvgOutput - The return type for the generateYantraSvg function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const YantraSvgInputSchema = z.object({
  name: z.string().describe('The name of the Yantra or Mandala.'),
  description: z.string().describe('The description of the Yantra or Mandala.'),
});
export type YantraSvgInput = z.infer<typeof YantraSvgInputSchema>;

const YantraSvgOutputSchema = z.object({
  svgString: z.string().describe('A string containing the complete SVG code for the yantra. The SVG should be 100x100, have a transparent background, use "currentColor" for strokes, and have no inline styles.'),
});
export type YantraSvgOutput = z.infer<typeof YantraSvgOutputSchema>;

export async function generateYantraSvg(input: YantraSvgInput): Promise<YantraSvgOutput> {
  return generateYantraSvgFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateYantraSvgPrompt',
  input: {schema: YantraSvgInputSchema},
  output: {schema: YantraSvgOutputSchema},
  prompt: `You are an expert SVG artist specializing in sacred geometry. Your task is to generate a complete SVG string for a Yantra or Mandala based on its name and description.

**IMPORTANT RULES:**
1.  **Complete SVG:** The output MUST be a valid, complete SVG string starting with \`<svg ...>\` and ending with \`</svg>\`.
2.  **ViewBox:** The SVG MUST have a \`viewBox="0 0 100 100"\`.
3.  **Styling:**
    *   Use SVG attributes like \`stroke\`, \`fill\`, \`stroke-width\`.
    *   Set the stroke color to \`"currentColor"\` so it inherits the parent color.
    *   Set the fill to \`"none"\`.
    *   Do NOT use inline CSS (\`style="..."\`).
    *   Do NOT include \`<style>\` blocks.
4.  **Content:** Create an intricate, beautiful, and symmetrical design that reflects the provided description. Use a combination of shapes like circles, polygons, and paths. The design should be complex and visually appealing.

**Yantra Name:** {{{name}}}
**Description:** {{{description}}}

Generate the SVG code now.
`,
});

const generateYantraSvgFlow = ai.defineFlow(
  {
    name: 'generateYantraSvgFlow',
    inputSchema: YantraSvgInputSchema,
    outputSchema: YantraSvgOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
