import { times } from 'lodash';
import { exec } from 'shelljs';
import generateCsvPath from './csv-report/generateCsvPath';
import parseLighthouseReport from './parsers/parseLighthouseReport';
import generateCsvReport from './csv-report/generateCsvReport';
import { LighthouseMeanOptions } from './typings';

const lighthouseMean = (options: LighthouseMeanOptions) => {
  const { url, quantity = 1 } = options;
  const csvPath = generateCsvPath(options);

  const reports = [];

  times(quantity, () => {
    const lighthouseValue = exec(`lighthouse ${url} --output json`);
    const report = parseLighthouseReport(lighthouseValue.stdout);

    reports.push(report);
  });

  generateCsvReport(reports, csvPath);
};

export default lighthouseMean;
