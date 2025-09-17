'use server';
/**
 * @fileOverview Generates an image for an article.
 *
 * - generateArticleImage - Generates an image based on a topic.
 */

import {ai} from '@/ai/genkit';
import {googleAI} from '@genkit-ai/googleai';
import {z} from 'genkit';

export async function generateArticleImage(topic: string): Promise<string> {
  return generateArticleImageFlow(topic);
}

const generateArticleImageFlow = ai.defineFlow(
  {
    name: 'generateArticleImageFlow',
    inputSchema: z.string(),
    outputSchema: z.string(),
  },
  async (topic) => {
    const prompt = `Create a visually stunning, high-quality, artistic image that symbolizes the concept of "${topic}" from the perspective of Tantra and ancient Indian spirituality. The image should be rich in symbolism, using elements like sacred geometry, lotus flowers, chakras, divine light, or cosmic energy. It should evoke a sense of peace, power, and mysticism. The style should be elegant and profound.`;
    
    const { media } = await ai.generate({
      model: googleAI.model('imagen-4.0-fast-generate-001'),
      prompt,
    });

    if (!media || !media.url) {
      throw new Error('Failed to generate image.');
    }
    
    return media.url;
  }
);
