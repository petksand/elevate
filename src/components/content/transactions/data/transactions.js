const current_datetime = new Date();
let formatted_date = current_datetime.getFullYear()
  + "-"
  + (current_datetime.getMonth() + 1) 
  + "-" 
  + current_datetime.getDate() 
  + " " 
  + current_datetime.getHours() 
  + ":" 
  + current_datetime.getMinutes() 
  + ":" 
  + current_datetime.getSeconds();

export const transactionsData = [
  {
    key: '1',
    name: 'Mos Mos',
    amount: "$" + 15,
    date: formatted_date,
    location: '88 Queens Quay West',
    tags: ['coffee', 'food'],
  },
  {
    key: '2',
    name: "TopHat",
    amount: "$" + 42,
    date: formatted_date,
    location: '151 Bloor St W Suite 200',
    tags: ['education', 'software'],
  },
  {
    key: '3',
    name: 'Revelo Bikes',
    amount: "$" + 1520,
    date: formatted_date,
    location: '42 Industrial Street',
    tags: ['bike', 'outdoor', 'sports'],
  },
];
