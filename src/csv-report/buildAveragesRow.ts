import { CSV_AVERAGES_ROW_FIELDS } from '../constants';
import { LighthouseParsedReport } from '../typings';

function buildAveragesRow(reports: LighthouseParsedReport[]) {
  const averagesRow = CSV_AVERAGES_ROW_FIELDS.reduce((row, fieldName) => {
    const fieldSum = reports.reduce((sum, report) => (
      sum + report[fieldName]
    ), 0);

    // When calculating the average, only account for fields with a valid value
    const validValueCount = reports.filter(r => !isNaN(r[fieldName])).length;

    return {
      ...row,
      [fieldName]: fieldSum / validValueCount,
    };
  }, {});

  return averagesRow;
}

export default buildAveragesRow;
