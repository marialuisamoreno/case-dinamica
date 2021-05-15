import { saveAs } from 'file-saver';

export const downloadCsv = (str, fileName, data) => {
    for (var i = 0; i < data.length; i++) {
        var line = '';
        for (var index in data[i]) {
            if (line !== '') line += '|'
            if (data[i][index] !== null && typeof(data[i][index]) !== 'undefined') {
              line += data[i][index];
            }
            else {
              line += '';
            }
        }
        str += line + '\r\n';
    }
    const blob = new Blob(["\ufeff", str], { type: 'text/csv;charset=utf-8;' });
    saveAs(blob, fileName);
}