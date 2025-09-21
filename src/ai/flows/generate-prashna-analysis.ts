
'use server';
/**
 * @fileOverview Generates a Prashna Kundali (Horary Astrology) analysis.
 *
 * - generatePrashnaAnalysis - Generates an analysis based on the time a question is asked.
 * - PrashnaAnalysisInput - Input type for the flow.
 * - PrashnaAnalysisOutput - Output type for the flow.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const PrashnaAnalysisInputSchema = z.object({
  questionTime: z.string().describe("The exact date and time the user accessed the page, in ISO format."),
});
export type PrashnaAnalysisInput = z.infer<typeof PrashnaAnalysisInputSchema>;

const PrashnaAnalysisOutputSchema = z.object({
  analysis: z.string().describe("An insightful analysis in literary Kannada about the user's likely unspoken question or current life situation (e.g., career, relationship, health). The tone should be wise, insightful, and slightly mystical, as if discerning the user's mind."),
});
export type PrashnaAnalysisOutput = z.infer<typeof PrashnaAnalysisOutputSchema>;

export async function generatePrashnaAnalysis(input: PrashnaAnalysisInput): Promise<PrashnaAnalysisOutput> {
  return generatePrashnaAnalysisFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generatePrashnaAnalysisPrompt',
  input: { schema: PrashnaAnalysisInputSchema },
  output: { schema: PrashnaAnalysisOutputSchema },
  prompt: `You are an expert in Prashna Kundali (Horary Astrology), a branch of Vedic astrology that answers questions based on the exact time they are asked. You are fluent in literary Kannada.

A user has just visited the astrology section of a spiritual app. Your task is to analyze the chart for this precise moment and discern the nature of their unspoken question or the primary concern that brought them here.

**Time of Query:** {{{questionTime}}}

**Instructions:**
1.  Based on the planetary positions at this exact moment, determine the most likely area of life the user is concerned about. This could be related to career (10th house), relationships (7th house), finance (2nd and 11th houses), health (6th house), spirituality (9th and 12th houses), or family (4th house).
2.  Formulate an insightful, compassionate, and slightly mystical analysis in literary Kannada.
3.  Do not state that you are looking at a chart. Frame it as a direct insight. For example, instead of "The Moon in the 7th house suggests...", say something like "ನಿಮ್ಮ ಮನಸ್ಸು ಪ್ರಸ್ತುತ ಸಂಬಂಧಗಳ ಬಗ್ಗೆ ಆಳವಾಗಿ ಚಿಂತಿಸುತ್ತಿರುವಂತೆ ತೋರುತ್ತದೆ..." (Your mind seems to be deeply contemplating relationships at this moment...).
4.  The analysis should be 2-3 sentences long, creating a moment of surprise and connection for the user. It should feel personal and profound.

Generate the analysis now.
`,
});

const generatePrashnaAnalysisFlow = ai.defineFlow(
  {
    name: 'generatePrashnaAnalysisFlow',
    inputSchema: PrashnaAnalysisInputSchema,
    outputSchema: PrashnaAnalysisOutputSchema,
  },
  async (input) => {
    const { output } = await prompt(input);
    if (!output) {
      throw new Error("Failed to generate Prashna analysis.");
    }
    return output;
  }
);
