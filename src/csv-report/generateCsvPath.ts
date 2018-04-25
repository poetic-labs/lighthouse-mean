import { existsSync, mkdirSync } from 'fs';
import path from 'path';
import moment from 'moment';
import urlParse from 'url-parse';
import { LighthouseMeanOptions } from '../typings';

function generateCsvPath(options: LighthouseMeanOptions) {
  let csvPath = options.csvPath;

  if (!csvPath) {
    const { host } = urlParse(options.url);
    const dateTime = moment(Date.now()).format('YYYY-MM-DD_kk-mm-ss');

    csvPath = `reports/${host}-${dateTime}.csv`;

    const dirname = path.dirname(csvPath);

    // Ensure reports/ directory exists
    if (!existsSync(dirname)) {
      mkdirSync(dirname);
    }
  }

  return csvPath;
}

export default generateCsvPath;
