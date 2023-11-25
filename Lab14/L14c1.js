const fs = require('fs');


let filename = __dirname+'/user_data.json';

//scoping - available for entire program including app.post
let user_reg_data;

//If the file name exists synchronously, read data and parse data
if(fs.existsSync(filename)){
    //read contents of file synchronously
    let data = fs.readFileSync(filename, 'utf-8');

    //parse data into js object because above code returns the data as a string, but we want JSON formatting
    user_reg_data = JSON.parse(data);

    //create a stats object off of that file
    let user_stats = fs.statSync(filename);

    //stats size = size of the object
    let stats_size = user_stats.size;

    console.log(`The file name ${filename} has ${stats_size} characters.`);
} else {
console.log(`The file name ${filename} does not exist.`);
}

let express = require('express');
let app = express();


app.use(express.urlencoded({ extended: true }));

app.get("/login", function (request, response) {
    // Give a simple login form
    str = `
<body>
<form action="" method="POST">
<input type="text" name="username" size="40" placeholder="enter username" ><br />
<input type="password" name="password" size="40" placeholder="enter password"><br />
<input type="submit" value="Submit" id="submit">
</form>
</body>
    `;
    response.send(str);
 });

app.post("/login", function (request, response) {
    // Process login form POST and redirect to logged in page if ok, back to login page if not

    // Retrieve the user's entered information
    let username_entered = request.body['username'];
    let password_entered = request.body['password'];

    let response_msg = "";
    let errors = false;

    // Check if the username exists in user_reg_data, such as dport username exists
    if (typeof user_reg_data[username_entered] != 'undefined') {
        // Check if the password matches with the username
        if (password_entered == user_reg_data[username_entered].password) {
            response_msg = `${username_entered} is logged in.`;
        } else {
            response_msg = `Incorrect password.`;
            errors = true;
        }
    } else {
        response_msg = `${username_entered} does not exist.`;
        errors = true;
    }

    //if no errors, send response message
    if (!errors) {
        response.send(response_msg);
    } else {
        //reload page with error
        response.redirect(`./login?error=${response_msg}`)
    }

});

app.listen(8080, () => console.log(`listening on port 8080`));