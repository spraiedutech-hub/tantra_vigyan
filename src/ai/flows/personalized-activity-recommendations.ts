// src/ai/flows/personalized-activity-recommendations.ts
'use server';

/**
 * @fileOverview Provides personalized tantra activity recommendations in Kannada based on user preferences.
 *
 * - getActivityRecommendations - A function that generates personalized tantra activity recommendations.
 * - ActivityRecommendationsInput - The input type for the getActivityRecommendations function.
 * - ActivityRecommendationsOutput - The return type for the getActivityRecommendations function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ActivityRecommendationsInputSchema = z.object({
  experienceLevel: z
    .string()
    .describe('The user\'s experience level in tantra practice (e.g., beginner, intermediate, advanced).'),
  availableTime: z
    .string()
    .describe('The amount of time the user has available for practice (e.g., 15 minutes, 30 minutes, 1 hour).'),
  preferences: z
    .string()
    .describe('Any specific preferences the user has regarding tantra activities (e.g., mantra, meditation, visualization).'),
});
export type ActivityRecommendationsInput = z.infer<typeof ActivityRecommendationsInputSchema>;

const ActivityRecommendationsOutputSchema = z.object({
  recommendations: z
    .string()
    .describe('Personalized tantra activity recommendations in Kannada.'),
});
export type ActivityRecommendationsOutput = z.infer<typeof ActivityRecommendationsOutputSchema>;

export async function getActivityRecommendations(input: ActivityRecommendationsInput): Promise<ActivityRecommendationsOutput> {
  return activityRecommendationsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'activityRecommendationsPrompt',
  input: {schema: ActivityRecommendationsInputSchema},
  output: {schema: ActivityRecommendationsOutputSchema},
  prompt: `ನೀವು ಕನ್ನಡದಲ್ಲಿ ಪರಿಣತಿ ಹೊಂದಿರುವ ತಂತ್ರ ಚಟುವಟಿಕೆಗಳ ಶಿಫಾರಸು ಮಾಡುವ ತಜ್ಞರು.

ನೀವು ಬಳಕೆದಾರರ ಆದ್ಯತೆಗಳು ಮತ್ತು ಅನುಭವದ ಆಧಾರದ ಮೇಲೆ ಅವರಿಗೆ ಸೂಕ್ತವಾದ ತಂತ್ರ ಚಟುವಟಿಕೆಗಳನ್ನು ಶಿಫಾರಸು ಮಾಡುತ್ತೀರಿ.

ಬಳಕೆದಾರರ ಅನುಭವದ ಮಟ್ಟ: {{{experienceLevel}}}
ಲಭ್ಯವಿರುವ ಸಮಯ: {{{availableTime}}}
ಆದ್ಯತೆಗಳು: {{{preferences}}}

ಶಿಫಾರಸುಗಳನ್ನು ಕನ್ನಡದಲ್ಲಿ ನೀಡಿ.`, // Instructions in Kannada
  config: {
    safetySettings: [
      {
        category: 'HARM_CATEGORY_HATE_SPEECH',
        threshold: 'BLOCK_ONLY_HIGH',
      },
      {
        category: 'HARM_CATEGORY_DANGEROUS_CONTENT',
        threshold: 'BLOCK_NONE',
      },
      {
        category: 'HARM_CATEGORY_HARASSMENT',
        threshold: 'BLOCK_MEDIUM_AND_ABOVE',
      },
      {
        category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT',
        threshold: 'BLOCK_LOW_AND_ABOVE',
      },
    ],
  },
});

const activityRecommendationsFlow = ai.defineFlow(
  {
    name: 'activityRecommendationsFlow',
    inputSchema: ActivityRecommendationsInputSchema,
    outputSchema: ActivityRecommendationsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
