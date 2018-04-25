import { LighthouseParsedReport } from '../typings';

function parseLighthouseReport(lighthouseJsonString: string) : LighthouseParsedReport {
  const lighthouseParsedJson = JSON.parse(lighthouseJsonString);

  const {
    userAgent,
    generatedTime,
    url: reportUrl,
    score,
    timing,
    audits,
  } = lighthouseParsedJson;

  const report = <LighthouseParsedReport>{
    'User Agent': userAgent,
    'Generated Time': generatedTime,
    Score: score,
    'Timing Total': timing.total,
    URL: reportUrl,
    'First Meaningful Paint': audits['first-meaningful-paint'].rawValue,
    'Speed Index Metric': audits['speed-index-metric'].rawValue,
    'Estimated Input Latency': audits['estimated-input-latency'].rawValue,
    'Time to First Byte': audits['time-to-first-byte'].rawValue,
    'First Interactive': audits['first-interactive'].rawValue,
    'Consistently Interactive': audits['consistently-interactive'].rawValue,
    'Network Requests': audits['network-requests'].rawValue,
    'Total Byte Weight': audits['total-byte-weight'].rawValue,
  };

  return report;
}

export default parseLighthouseReport;
