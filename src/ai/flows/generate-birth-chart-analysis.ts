
'use server';
/**
 * @fileOverview Generates a Vedic astrology birth chart (Kundali) analysis.
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
  ascendant: z.string().describe('The calculated Ascendant (Lagna) sign in Kannada.'),
  planetaryPositions: z.array(z.object({
    planet: z.string().describe('The name of the planet in Kannada (e.g., ಸೂರ್ಯ).'),
    sign: z.string().describe('The zodiac sign the planet is in, in Kannada (e.g., ಮೇಷ).'),
    house: z.number().describe('The house number the planet is in.'),
  })).describe('A list of planetary positions.'),
  analysis: z.string().describe('A detailed, personalized analysis of the birth chart in literary Kannada, explaining the key planetary positions and their potential effects.'),
});
export type BirthChartAnalysisOutput = z.infer<typeof BirthChartAnalysisOutputSchema>;

export async function generateBirthChartAnalysis(input: BirthChartAnalysisInput): Promise<BirthChartAnalysisOutput> {
  return generateBirthChartAnalysisFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateBirthChartAnalysisPrompt',
  input: { schema: BirthChartAnalysisInputSchema },
  output: { schema: BirthChartAnalysisOutputSchema },
  prompt: `You are an expert Vedic astrologer (Jyotishi) fluent in literary Kannada.
Your task is to generate a basic birth chart (Kundali) analysis based on the user's birth details.

**User's Birth Details:**
- Date of Birth: {{{dateOfBirth}}}
- Time of Birth: {{{timeOfBirth}}}
- Place of Birth: {{{placeOfBirth}}}

**Instructions:**
1.  **Calculate Ascendant (Lagna):** Based on the provided details, determine the rising sign.
2.  **Determine Planetary Positions:** Calculate the sign and house for all major planets (Sun, Moon, Mars, Mercury, Jupiter, Venus, Saturn, Rahu, Ketu).
3.  **Provide Analysis:** Write a brief but insightful analysis in literary Kannada. Focus on the most important aspects like the Ascendant lord, the Moon's position, and any significant yogas or doshas. The tone should be wise, encouraging, and easy for a beginner to understand. Do not make definitive predictions; instead, speak of tendencies and potentials.

Generate the full analysis now.
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
