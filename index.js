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



const result = excelToJson({
  sourceFile: 'Qrcodes_.xlsx',
  columnToKey: {
    A: 'qrcode',
  }
});

fs.appendFile(`./Qrcodes_.txt`, `${JSON.stringify(result, null, 2)} `, "UTF-8", function (err) {
  if (err) throw err;

})