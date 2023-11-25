let filename = __dirname+'/user_data.json';

//uses require function to import contents of json file named filename from current directory above
let user_reg_data = require(filename);

console.log(user_reg_data['kazman'].password);
console.log(user_reg_data['kazman'].email);