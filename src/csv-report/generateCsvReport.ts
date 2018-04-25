import { writeFile } from 'fs';
import { Parser } from 'json2csv';
import buildAveragesRow from './buildAveragesRow';
import { CSV_FIELDS } from '../constants';
import { LighthouseParsedReport } from '../typings';

function generateCsvReport(reports: LighthouseParsedReport[], csvPath) {
  const parser = new Parser({
    fields: CSV_FIELDS,
  });

  const rows = <any[]>[
    ...reports,
    {}, // Empty row
    buildAveragesRow(reports),
  ];

  const csvText = parser.parse(rows);

  writeFile(csvPath, csvText, (error) => {
    if (error) {
      throw error;
    }
  });
}

export default generateCsvReport;
