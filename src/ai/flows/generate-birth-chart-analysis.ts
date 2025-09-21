
'use server';
/**
 * @fileOverview Generates a Vedic astrology birth chart (Kundali) analysis using the Bhrigu Nandi Nadi system.
 *
 * - generateBirthChartAnalysis - Generates an analysis based on birth details.
 * - BirthChartAnalysisInput - Input type for the flow.
 * - BirthChartAnalysisOutput - Output type for the flow.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const BirthChartAnalysisInputSchema = z.object({
  dateOfBirth: z.string().describe('The user\'s date of birth (YYYY-MM-DD).'),
  timeOfBirth: z.string().describe('The user\'s time of birth (HH:MM).'),
  placeOfBirth: z.string().describe('The user\'s place of birth (city, country).'),
});
export type BirthChartAnalysisInput = z.infer<typeof BirthChartAnalysisInputSchema>;

const BirthChartAnalysisOutputSchema = z.object({
  analysis: z.string().describe('A detailed, personalized analysis of the birth chart in literary Kannada, based on Bhrigu Nandi Nadi principles.'),
});
export type BirthChartAnalysisOutput = z.infer<typeof BirthChartAnalysisOutputSchema>;

export async function generateBirthChartAnalysis(input: BirthChartAnalysisInput): Promise<BirthChartAnalysisOutput> {
  return generateBirthChartAnalysisFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateBirthChartAnalysisPrompt',
  input: { schema: BirthChartAnalysisInputSchema },
  output: { schema: BirthChartAnalysisOutputSchema },
  prompt: `You are an expert in Bhrigu Nandi Nadi, a unique and profound school of Vedic astrology. You are fluent in literary Kannada.
Your task is to provide a birth chart analysis based on the user's details, following the core principles of Bhrigu Nandi Nadi.

**User's Birth Details:**
- Date of Birth: {{{dateOfBirth}}}
- Time of Birth: {{{timeOfBirth}}}
- Place of Birth: {{{placeOfBirth}}}

**Bhrigu Nandi Nadi Instructions:**
1.  **Focus on Karakas (Significators):** Do not focus on ascendant lords or complex house systems. Your primary focus is on the planets themselves as significators.
2.  **Jupiter is the Jeeva Karaka:** Use Jupiter's position as the primary indicator of the individual (Jeeva). Analyze the planets in conjunction with, in trine to, or in specific positions from Jupiter.
3.  **Read the Planetary Story:** Analyze the combinations of key karakas to tell the story of the user's life. For example:
    -   Jupiter + Saturn (Karma Karaka): The individual's life is deeply connected to their profession and duties.
    -   Jupiter + Venus (Kalatra Karaka): The spouse and relationships will play a central role in their life path.
    -   Jupiter + Rahu: The individual may have an unconventional path, possibly involving foreign lands or technology.
4.  **Provide a Narrative Analysis:** Write a flowing, narrative-style analysis in literary Kannada. The tone should be wise, direct, and insightful, as if reading from a Nadi leaf. Speak of destiny and life's path.

Generate the full, insightful analysis now.
`,
});

const generateBirthChartAnalysisFlow = ai.defineFlow(
  {
    name: 'generateBirthChartAnalysisFlow',
    inputSchema: BirthChartAnalysisInputSchema,
    outputSchema: BirthChartAnalysisOutputSchema,
  },
  async (input) => {
    const { output } = await prompt(input);
    if (!output) {
      throw new Error("Failed to generate birth chart analysis.");
    }
    return output;
  }
);
