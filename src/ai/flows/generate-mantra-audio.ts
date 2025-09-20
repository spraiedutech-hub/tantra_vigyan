
'use server';
/**
 * @fileOverview Converts any given text into a downloadable audio file.
 *
 * - generateMantraAudio - Converts text to an audio data URI.
 */

import {ai} from '@/ai/genkit';
import {googleAI} from '@genkit-ai/googleai';
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

const GenerateMantraAudioInputSchema = z.object({
  text: z.string(),
  voice: z.enum(['male', 'female']),
});
export type GenerateMantraAudioInput = z.infer<typeof GenerateMantraAudioInputSchema>;


const generateMantraAudioFlow = ai.defineFlow(
  {
    name: 'generateMantraAudioFlow',
    inputSchema: GenerateMantraAudioInputSchema,
    outputSchema: z.object({
      audioDataUri: z.string(),
    }),
  },
  async ({ text, voice }) => {
    // Male: Algenib (calm), Female: Leda (calm)
    const voiceName = voice === 'male' ? 'Algenib' : 'Leda';

    const { media } = await ai.generate({
      model: googleAI.model('gemini-2.5-flash-preview-tts'),
      config: {
        responseModalities: ['AUDIO'],
        speechConfig: {
            voiceConfig: {
                prebuiltVoiceConfig: { voiceName: voiceName },
            },
        },
      },
      prompt: text,
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

export async function generateMantraAudio(input: GenerateMantraAudioInput): Promise<{ audioDataUri: string }> {
    return generateMantraAudioFlow(input);
}
