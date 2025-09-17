'use server';
/**
 * @fileOverview Generates simple, actionable Tantric rituals for worldly problems.
 *
 * - generateRemedyRitual - A function that generates a ritual for a given problem.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const RemedyRitualInputSchema = z.object({
  problem: z.string().describe("The user's specific worldly problem, e.g., 'financial difficulties'."),
});

const RemedyRitualOutputSchema = z.object({
  ritualName: z.string().describe("A suitable name for the ritual in Kannada, e.g., 'Lakshmi Puja Vidhana'."),
  description: z.string().describe("A brief description of the ritual's purpose in Kannada."),
  steps: z.array(z.string()).describe("A list of simple, step-by-step instructions for the ritual in Kannada. The steps should be very easy for a common person to follow."),
});
export type RemedyRitualOutput = z.infer<typeof RemedyRitualOutputSchema>;

export async function generateRemedyRitual(problem: string): Promise<RemedyRitualOutput> {
  return generateRemedyRitualFlow({ problem });
}

const prompt = ai.definePrompt({
  name: 'generateRemedyRitualPrompt',
  input: {schema: RemedyRitualInputSchema},
  output: {schema: RemedyRitualOutputSchema},
  prompt: `You are an expert in simple, home-based Tantric and Hindu rituals (pujas). Your audience is the common person, not an advanced practitioner. They are looking for "quick fixes" and practical solutions for their worldly problems.

**IMPORTANT RULES:**
1.  **Simplicity is Key:** The ritual must be extremely simple and use common household items. Avoid complex mantras, nyasa, or long meditations.
2.  **Action-Oriented:** Focus on a clear sequence of actions (e.g., lighting a lamp, offering a flower, chanting a simple name).
3.  **Language:** All output MUST be in clear, simple Kannada.
4.  **No Guarantees:** Do not make unrealistic promises. Frame the ritual as an act of faith and devotion that can create positive energy.

**User's Problem:** {{{problem}}}

Based on this problem, generate a suitable, simple ritual (puja vidhana). Give it a name, a short description, and a list of easy-to-follow steps.
`,
});

const generateRemedyRitualFlow = ai.defineFlow(
  {
    name: 'generateRemedyRitualFlow',
    inputSchema: RemedyRitualInputSchema,
    outputSchema: RemedyRitualOutputSchema,
  },
  async (input) => {
    const {output} = await prompt(input);
    return output!;
  }
);
