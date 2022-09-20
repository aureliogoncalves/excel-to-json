const { Parser } = require('json2csv');

const data = [
  {
    "data-pagamento": "20/09/2022 12:46:57",
    "4-digitos-cartão": "7721",
    "bandeira": "MASTER"
  },
  {
    "data-pagamento": "19/09/2022 14:57:42",
    "4-digitos-cartão": "0022",
    "bandeira": "VISA"
  },
  {
    "data-pagamento": "15/09/2022 23:58:15",
    "4-digitos-cartão": "8257",
    "bandeira": "MASTER"
  },
  {
    "data-pagamento": "15/09/2022 20:53:36",
    "4-digitos-cartão": "6013",
    "bandeira": "DISCOVERY"
  },
  {
    "data-pagamento": "15/09/2022 18:48:52",
    "4-digitos-cartão": "8257",
    "bandeira": "MASTER"
  },
  {
    "data-pagamento": "15/09/2022 16:51:42",
    "4-digitos-cartão": "9876",
    "bandeira": "VISA"
  },
  {
    "data-pagamento": "15/09/2022 15:58:36",
    "4-digitos-cartão": "5764",
    "bandeira": "MASTER"
  },
  {
    "data-pagamento": "15/09/2022 14:27:24",
    "4-digitos-cartão": "9876",
    "bandeira": "VISA"
  },
  {
    "data-pagamento": "15/09/2022 11:10:48",
    "4-digitos-cartão": "8257",
    "bandeira": "MASTER"
  },
  {
    "data-pagamento": "14/09/2022 11:38:22",
    "4-digitos-cartão": "6774",
    "bandeira": "VISA"
  },
  {
    "data-pagamento": "14/09/2022 00:36:36",
    "4-digitos-cartão": "1379",
    "bandeira": "MASTER"
  },
  {
    "data-pagamento": "13/09/2022 19:37:45",
    "4-digitos-cartão": "1958",
    "bandeira": "VISA"
  },
  {
    "data-pagamento": "13/09/2022 19:36:29",
    "4-digitos-cartão": "1958",
    "bandeira": "VISA"
  },
  {
    "data-pagamento": "12/09/2022 14:31:43",
    "4-digitos-cartão": "0974",
    "bandeira": "VISA"
  },
  {
    "data-pagamento": "12/09/2022 13:31:46",
    "4-digitos-cartão": "8030",
    "bandeira": "VISA"
  },
  {
    "data-pagamento": "12/09/2022 13:13:39",
    "4-digitos-cartão": "8030",
    "bandeira": "VISA"
  },
  {
    "data-pagamento": "12/09/2022 13:11:45",
    "4-digitos-cartão": "8030",
    "bandeira": "VISA"
  },
  {
    "data-pagamento": "08/09/2022 15:03:46",
    "4-digitos-cartão": "3665",
    "bandeira": "VISA"
  },
  {
    "data-pagamento": "31/08/2022 16:59:22",
    "4-digitos-cartão": "1611",
    "bandeira": "MASTER"
  },
  {
    "data-pagamento": "31/07/2022 11:17:25",
    "4-digitos-cartão": "6251",
    "bandeira": "VISA"
  }
]

const fields = [
  {
    label: 'Data de pagamento',
    value: 'data-pagamento'
  },
  {
    label: 'Dígitos do cartão',
    value: '4-digitos-cartão'
  },
  {
    label: 'Bandeira',
    value: 'bandeira'
  }
];

const json2csvParser = new Parser({ fields });
const csv = json2csvParser.parse(data);

console.log(csv);