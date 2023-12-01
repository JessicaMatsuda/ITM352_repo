let express = require('express');
let app = express();

app.use(express.urlencoded({extended: true}));

let cookieParser = require('cookie-parser');
app.use(cookieParser());

let session = require('express-session');
app.use(session({secret: "MySecretKey", resave: true, saveUninitialized: true}));

app.get('/set_cookie', (req, res) => {
    res.cookie('username', 'Jessica', {maxAge: 10000});
    res.send('Cookie has been set with your name.');
})

app.get('/use_cookie', (req, res) => {
    let username = request.cookies.username;
    //send text back to blank DOM
    res.send(`Welcome to the Use Cookie page, ${username}.`);
})

// its the session id that came from the session and the session was done on the server
app.get('/use_session', (req, res) => {
    res.send(`Welcome, your session ID is ${req.session.id}`); 
})

// THIS IS FROM LAB 14 COPY IT OVER LATER and we added stuff so i added it
app.get("login", function (request, response) {
    let username = request.cookies.username;
    if (!username) {
        
    }

})


    res.cookie('username', `${username_entered}`);
    const userSession = request.session;
    //If there is no last login...
    if (!userSession.lastLogin) {
        userSession.lastLogin = "First visit!"
    } else {
        userSession.lastLogin = new Date().toLocaleString();
    }

    //overwrite with current data and time after first visit
    response_msg = `${username_entered} is logged in. Last login: ${userSession.lastLogin}`;


