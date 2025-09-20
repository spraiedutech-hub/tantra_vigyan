
'use server';
/**
 * @fileOverview Converts Sadhana text to speech.
 *
 * - generateSadhanaAudio - Converts text to an audio data URI.
 */

import {ai} from '@/ai/genkit';
import {googleAI} from '@gen-sdk/googleai';
import {z} from 'genkit';
import wav from 'wav';

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

const generateSadhanaAudioFlow = ai.defineFlow(
  {
    name: 'generateSadhanaAudioFlow',
    inputSchema: z.string(),
    outputSchema: z.object({
      audioDataUri: z.string(),
    }),
  },
  async (text) => {
    const { media } = await ai.generate({
        model: googleAI.model('gemini-2.5-flash-preview-tts', {
            speechConfig: {
                voiceConfig: {
                    prebuiltVoiceConfig: { voiceName: 'Algenib' }, // A calm voice
                },
            },
        }),
        config: {
            responseModalities: ['AUDIO'],
        },
        prompt: { text },
    });
    if (!media) {
      throw new Error('No audio media returned from the model.');
    }
    const audioBuffer = Buffer.from(
      media.url.substring(media.url.indexOf(',') + 1),
      'base64'
    );
    const wavBase64 = await toWav(audioBuffer);
    return {
      audioDataUri: 'data:audio/wav;base64,' + wavBase64,
    };
  }
);

export async function generateSadhanaAudio(text: string): Promise<{ audioDataUri: string }> {
    return generateSadhanaAudioFlow(text);
}
