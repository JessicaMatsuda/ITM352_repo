const fs = require('fs');


let filename = __dirname+'/user_data.json';

//read contents of file synchronously
let data = fs.readFileSync(filename, 'utf-8');

//parse data into js object because above code returns the data as a string, but we want JSON formatting
let user_reg_data = JSON.parse(data);

console.log(user_reg_data);

