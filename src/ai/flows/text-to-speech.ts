
'use server';
/**
 * @fileOverview A text-to-speech (TTS) AI agent.
 *
 * - generateAudio - A function that converts text to speech.
 */
import { ai } from '@/ai/genkit';
import { z } from 'genkit';
import wav from 'wav';
import { googleAI } from '@genkit-ai/googleai';

const GenerateAudioOutputSchema = z.object({
  media: z.string().describe('The generated audio as a data URI.'),
});

async function toWav(
  pcmData: Buffer,
  channels = 1,
  rate = 24000,
  sampleWidth = 2
): Promise<string> {
  return new Promise((resolve, reject) => {
    const writer = new wav.Writer({
      channels,
      sampleRate: rate,
      bitDepth: sampleWidth * 8,
    });

    const bufs: any[] = [];
    writer.on('error', reject);
    writer.on('data', function (d) {
      bufs.push(d);
    });
    writer.on('end', function () {
      resolve(Buffer.concat(bufs).toString('base64'));
    });

    writer.write(pcmData);
    writer.end();
  });
}

const generateAudioFlow = ai.defineFlow(
  {
    name: 'generateAudioFlow',
    inputSchema: z.string(),
    outputSchema: GenerateAudioOutputSchema,
  },
  async (query) => {
    let retries = 3;
    let lastError: any;

    while (retries > 0) {
      try {
        const { media } = await ai.generate({
          model: googleAI.model('gemini-2.5-flash-preview-tts'),
          config: {
            responseModalities: ['AUDIO'],
            speechConfig: {
              voiceConfig: {
                prebuiltVoiceConfig: { voiceName: 'Algenib' },
              },
            },
          },
          prompt: query,
        });

        if (!media?.url) {
          throw new Error('No media returned from the TTS model.');
        }

        const audioBuffer = Buffer.from(
          media.url.substring(media.url.indexOf(',') + 1),
          'base64'
        );
        const wavData = await toWav(audioBuffer);

        return {
          media: 'data:audio/wav;base64,' + wavData,
        };
      } catch (e: any) {
        lastError = e;
        if (e.message && e.message.includes('503')) {
          console.log('TTS model is overloaded, retrying...');
          retries--;
          if (retries > 0) {
            await new Promise(resolve => setTimeout(resolve, 1000)); // Wait 1 second before retrying
          }
        } else {
          // For other errors, don't retry
          throw e;
        }
      }
    }
    // If all retries fail, throw the last error
    throw lastError;
  }
);

export async function generateAudio(text: string) {
  return generateAudioFlow(text);
}
