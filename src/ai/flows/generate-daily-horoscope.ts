
'use server';
/**
 * @fileOverview Generates a daily horoscope based on the user's ascendant (Lagna) using Bhrigu Nandi Nadi principles.
 *
 * - generateDailyHoroscope - Generates a forecast based on the user's Lagna.
 * - DailyHoroscopeInput - Input type for the flow.
 * - DailyHoroscopeOutput - Output type for the flow.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const DailyHoroscopeInputSchema = z.object({
  lagna: z.string().describe('The user\'s ascendant sign (Lagna) in Kannada, e.g., "ಮೇಷ ಲಗ್ನ".'),
});
export type DailyHoroscopeInput = z.infer<typeof DailyHoroscopeInputSchema>;

const DailyHoroscopeOutputSchema = z.object({
  forecast: z.string().describe('A personalized daily forecast in literary Kannada, focusing on key life areas like career, relationships, and health, based on BNN principles.'),
});
export type DailyHoroscopeOutput = z.infer<typeof DailyHoroscopeOutputSchema>;

export async function generateDailyHoroscope(input: DailyHoroscopeInput): Promise<DailyHoroscopeOutput> {
  return generateDailyHoroscopeFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateDailyHoroscopePrompt',
  input: { schema: DailyHoroscopeInputSchema },
  output: { schema: DailyHoroscopeOutputSchema },
  prompt: `You are an expert in Bhrigu Nandi Nadi astrology, fluent in literary Kannada.
Your task is to provide a brief, insightful daily horoscope for a user based on their ascendant (Lagna) and today's planetary transits (especially the Moon's transit).

**User's Ascendant (Lagna):** {{{lagna}}}
**Today's Date:** {{currentDate}}

**Bhrigu Nandi Nadi Instructions:**
1.  **Focus on Transits:** Your primary focus should be on the impact of today's key planetary transits, particularly the Moon, relative to the user's Lagna.
2.  **Use Karakas (Significators):** Interpret the transits through the lens of planetary karakas. For example, if the Moon is transiting a favorable position from the Lagna and aspecting Venus (Kalatra Karaka), it might be a good day for relationships. If it's connecting with Saturn (Karma Karaka), the focus might be on professional matters.
3.  **Provide Actionable Insights:** Give a concise, meaningful forecast (2-3 sentences) covering the most significant area for the day (e.g., career, relationships, health, or spiritual pursuits). The tone should be wise and predictive.
4.  **Language:** The entire forecast must be in literary Kannada.

Generate a specific and insightful daily forecast for the user.
`,
});

const generateDailyHoroscopeFlow = ai.defineFlow(
  {
    name: 'generateDailyHoroscopeFlow',
    inputSchema: DailyHoroscopeInputSchema,
    outputSchema: DailyHoroscopeOutputSchema,
  },
  async (input) => {
    // Pass the current date to the prompt context
    const { output } = await prompt({
        ...input,
        currentDate: new Date().toLocaleDateString('en-CA'), // YYYY-MM-DD
    });

    if (!output) {
      throw new Error("Failed to generate daily horoscope.");
    }
    return output;
  }
);
