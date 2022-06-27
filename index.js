let csvToJson = require('convert-csv-to-json');
const fs = require('fs');
const excelToJson = require('convert-excel-to-json');

// let json = csvToJson.getJsonFromCsv("indicador.csv");
// for(let i=0; i<json.length;i++){
//     console.log(json[i]);
// }
// let n = 'ImportacaoEASY2022VisaoEscola'
// let fileInputName = `${n}.csv`
// let fileOutputName = `${n}.json`
// csvToJson.fieldDelimiter('').generateJsonFileFromCsv(fileInputName,fileOutputName);

const fileName = "Numero de alunos"

const result = excelToJson({
  sourceFile: `/excel/${fileName}.xlsx`,
  columnToKey: {
    A: 'qrcode',
  }
});

fs.appendFile(`/json/${fileName}.txt`, `${JSON.stringify(result, null, 2)} `, "UTF-8", function (err) {
  if (err) throw err;
})