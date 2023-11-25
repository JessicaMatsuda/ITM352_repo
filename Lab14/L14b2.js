const fs = require('fs');


let filename = __dirname+'/user_data.json';

//If the file name exists synchronously, read data and parse data
if(fs.existsSync(filename)){
    //read contents of file synchronously
    let data = fs.readFileSync(filename, 'utf-8');

    //parse data into js object because above code returns the data as a string, but we want JSON formatting
    let user_reg_data = JSON.parse(data);

    //create a stats object off of that file
    let user_stats = fs.statSync(filename);

    //stats size = size of the object
    let stats_size = user_stats.size;

    console.log(`The file name ${filename} has ${stats_size} characters.`);
} else {
console.log(`The file name ${filename} does not exist.`);
}