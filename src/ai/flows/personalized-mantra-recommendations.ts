'use server';
/**
 * @fileOverview Personalized mantra recommendation AI agent.
 *
 * - personalizedMantraRecommendations - A function that provides personalized mantra recommendations based on user preferences.
 * - PersonalizedMantraRecommendationsInput - The input type for the personalizedMantraRecommendations function.
 * - PersonalizedMantraRecommendationsOutput - The return type for the personalizedMantraRecommendations function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PersonalizedMantraRecommendationsInputSchema = z.object({
  desiredOutcome: z
    .string()
    .describe('The user\'s desired outcome from mantra practice (e.g., stress reduction, improved focus).'),
  timeCommitment: z
    .string()
    .describe('The amount of time the user is willing to commit to mantra practice daily (e.g., 5 minutes, 30 minutes).'),
  experienceLevel: z
    .string()
    .describe('The user\'s experience level with mantra practice (e.g., beginner, intermediate, advanced).'),
});
export type PersonalizedMantraRecommendationsInput = z.infer<typeof PersonalizedMantraRecommendationsInputSchema>;

const PersonalizedMantraRecommendationsOutputSchema = z.object({
  mantraRecommendations: z.array(
    z.object({
      mantraName: z.string().describe('The name of the recommended mantra.'),
      mantraDescription: z.string().describe('A brief description of the mantra and its benefits.'),
      practiceInstructions: z.string().describe('Instructions on how to practice the mantra.'),
    })
  ).describe('A list of personalized mantra recommendations.'),
});
export type PersonalizedMantraRecommendationsOutput = z.infer<typeof PersonalizedMantraRecommendationsOutputSchema>;

export async function personalizedMantraRecommendations(input: PersonalizedMantraRecommendationsInput): Promise<PersonalizedMantraRecommendationsOutput> {
  return personalizedMantraRecommendationsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'personalizedMantraRecommendationsPrompt',
  input: {schema: PersonalizedMantraRecommendationsInputSchema},
  output: {schema: PersonalizedMantraRecommendationsOutputSchema},
  prompt: `You are a knowledgeable guide on Tantra mantras, fluent in Kannada.

  Based on the user's preferences, provide personalized mantra recommendations in Kannada. Consider their desired outcome, time commitment, and experience level. For each mantra, provide the mantra name in Kannada script, a brief description of its benefits (in Kannada), and instructions on how to practice it (in Kannada).

  Desired Outcome: {{{desiredOutcome}}}
  Time Commitment: {{{timeCommitment}}}
  Experience Level: {{{experienceLevel}}}

  Respond in Kannada.
  `,
});

const personalizedMantraRecommendationsFlow = ai.defineFlow(
  {
    name: 'personalizedMantraRecommendationsFlow',
    inputSchema: PersonalizedMantraRecommendationsInputSchema,
    outputSchema: PersonalizedMantraRecommendationsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
