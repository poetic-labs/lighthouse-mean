export interface LighthouseMeanOptions {
  url: string;
  quantity?: number;
  csvPath?: string;
}

export interface LighthouseParsedReport {
  'User Agent': string;
  'Generated Time': string;
  Score: number;
  'Timing Total': number;
  URL: string;
  'First Meaningful Paint': number;
  'Speed Index Metric': number;
  'Estimated Input Latency': number;
  'Time to First Byte': number;
  'First Interactive': number;
  'Consistently Interactive': number;
  'Network Requests': number;
  'Total Byte Weight': number;
}
