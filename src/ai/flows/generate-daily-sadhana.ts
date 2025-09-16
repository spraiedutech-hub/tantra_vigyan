'use server';
/**
 * @fileOverview Generates a unique, daily spiritual practice (Sadhana).
 *
 * - generateDailySadhana - A function that generates a complete Sadhana session.
 * - DailySadhanaOutput - The return type for the generateDailySadhana function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const DailySadhanaOutputSchema = z.object({
  intention: z.string().describe("The day's unique intention (Sankalpa) in Kannada."),
  mantra: z.string().describe("A relevant mantra for the day in Kannada."),
  breathingExercise: z.string().describe("A simple breathing exercise (Pranayama) description in Kannada."),
  meditationFocus: z.string().describe("A short meditation focus or visualization instruction in Kannada."),
});
export type DailySadhanaOutput = z.infer<typeof DailySadhanaOutputSchema>;

export async function generateDailySadhana(): Promise<DailySadhanaOutput> {
  return generateDailySadhanaFlow();
}

const prompt = ai.definePrompt({
  name: 'generateDailySadhanaPrompt',
  output: {schema: DailySadhanaOutputSchema},
  prompt: `You are a wise and compassionate Tantra guru, fluent in literary Kannada.
  
Your task is to generate a unique, complete, and inspiring daily spiritual practice (Nitya Sadhana). The practice should be suitable for someone on a spiritual path.
  
Generate a new, fresh Sadhana consisting of the following four parts, all in literary Kannada:
1.  **Sankalpa (Intention):** A positive and meaningful intention for the day.
2.  **Mantra:** A suitable mantra for the day's intention.
3.  **Pranayama (Breathing Exercise):** A simple, clear instruction for a breathing technique.
4.  **Dhyana (Meditation Focus):** A brief, calming visualization or focus point for meditation.

Ensure the generated content is unique for each request. Do not repeat previous suggestions. The language should be profound yet accessible.
`,
});

const generateDailySadhanaFlow = ai.defineFlow(
  {
    name: 'generateDailySadhanaFlow',
    outputSchema: DailySadhanaOutputSchema,
  },
  async () => {
    const {output} = await prompt();
    return output!;
  }
);
