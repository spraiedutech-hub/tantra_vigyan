
'use server';
/**
 * @fileOverview Generates a daily share market astrological prediction.
 *
 * - generateMarketPrediction - Generates an analysis for Nifty and Bank Nifty.
 * - MarketPredictionOutput - The return type for the flow.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const StockToWatchSchema = z.object({
  name: z.string().describe('The name of the stock to watch.'),
  reason: z.string().describe('A brief astrological reason why this stock is important today.'),
});

const HourlyPredictionSchema = z.object({
  time: z.string().describe('The time range for the prediction (e.g., "9:15 AM - 10:30 AM").'),
  prediction: z.string().describe('The astrological prediction for this time range.'),
});

const MarketIndexPredictionSchema = z.object({
  trend: z.string().describe('The overall trend for the day for this index.'),
  hourly: z.array(HourlyPredictionSchema).describe('An array of predictions for different time slots of the trading day.'),
  stocksToWatch: z.array(StockToWatchSchema).describe('A list of 2-3 important stocks to watch under this index for the day.'),
});

const MarketPredictionOutputSchema = z.object({
  date: z.string().describe('The date for which the prediction is made (YYYY-MM-DD).'),
  nifty: MarketIndexPredictionSchema,
  banknifty: MarketIndexPredictionSchema,
});
export type MarketPredictionOutput = z.infer<typeof MarketPredictionOutputSchema>;

export async function generateMarketPrediction(date: string): Promise<MarketPredictionOutput> {
  return generateMarketPredictionFlow(date);
}

const prompt = ai.definePrompt({
  name: 'generateMarketPredictionPrompt',
  input: { schema: z.string() },
  output: { schema: MarketPredictionOutputSchema },
  prompt: `You are an expert financial astrologer specializing in the Indian stock market. Your task is to provide a detailed astrological prediction for the Nifty 50 and Bank Nifty indices for a specific date.

**Date for Prediction:** {{{_input}}}

**Instructions:**
1.  **Analyze Planetary Positions:** Based on the planetary positions for the given date, determine the overall trend for the day (e.g., volatile, bullish, bearish, mixed).
2.  **Hourly Breakdown:** Provide a detailed hourly analysis for the standard Indian market trading hours (9:15 AM to 3:30 PM). Break it down into 4 logical time slots.
3.  **Stocks to Watch:** For both Nifty and Bank Nifty, identify 2 key stocks that will be astrologically significant for the day. Provide a brief astrological reason for each.
4.  **Language:** All output must be in clear, simple Kannada.
5.  **Format:** Adhere strictly to the JSON output schema. The date in the output must match the input date.

Generate the complete analysis now.
`,
});

const generateMarketPredictionFlow = ai.defineFlow(
  {
    name: 'generateMarketPredictionFlow',
    inputSchema: z.string(),
    outputSchema: MarketPredictionOutputSchema,
  },
  async (date) => {
    const { output } = await prompt(date);
    if (!output) {
      throw new Error("Failed to generate market prediction.");
    }
    return output;
  }
);
