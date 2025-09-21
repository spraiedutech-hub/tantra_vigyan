
export type StockToWatch = {
  name: string;
  reason: string;
};

export type HourlyPrediction = {
  time: string;
  prediction: string;
};

export type MarketIndexPrediction = {
  trend: string;
  hourly: HourlyPrediction[];
  stocksToWatch: StockToWatch[];
};

export type MarketPredictionOutput = {
  date: string;
  nifty: MarketIndexPrediction;
  banknifty: MarketIndexPrediction;
};
