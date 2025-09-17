'use server';
/**
 * @fileOverview Provides personalized guidance for spiritual practitioners.
 *
 * - getPersonalizedGuidance - A function that generates advice based on a user's problem.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PersonalizedGuidanceInputSchema = z.object({
  problem: z.string().describe("The user's specific problem or obstacle in their spiritual practice."),
});

const PersonalizedGuidanceOutputSchema = z.object({
  guidance: z.string().describe("Compassionate and actionable advice in literary Kannada."),
});

export async function getPersonalizedGuidance(problem: string): Promise<{ guidance: string }> {
  return getPersonalizedGuidanceFlow({ problem });
}

const prompt = ai.definePrompt({
  name: 'personalizedGuidancePrompt',
  input: {schema: PersonalizedGuidanceInputSchema},
  output: {schema: PersonalizedGuidanceOutputSchema},
  prompt: `You are a wise, compassionate, and experienced Tantra guru, fluent in literary Kannada. A spiritual seeker has come to you with a problem. Your task is to provide them with understanding, encouragement, and actionable advice based on the principles of Tantra.

The user's problem: "{{{problem}}}"

Your response should be:
- Empathetic and understanding of their struggle.
- Written in clear, profound, and encouraging literary Kannada.
- Actionable, offering 1-2 simple, practical steps they can take (e.g., a specific mindset, a simple breathing technique, a focus for meditation).
- Rooted in spiritual wisdom, reminding them of their inner strength and the nature of the spiritual path.
- Do not sound like a generic AI. Speak from a place of wisdom and deep experience.
`,
});

const getPersonalizedGuidanceFlow = ai.defineFlow(
  {
    name: 'getPersonalizedGuidanceFlow',
    inputSchema: PersonalizedGuidanceInputSchema,
    outputSchema: PersonalizedGuidanceOutputSchema,
  },
  async (input) => {
    const {output} = await prompt(input);
    return output!;
  }
);
