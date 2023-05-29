require('dotenv').config();
const express = require('express');
// const session = require('express-session');
const path = require('path');
methodOverride = require('method-override');
const bodyParser = require('body-parser');
const session = require('express-session');
const app = express();



// const getmac = require('getmac');
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));

app.use(express.static('public'));
app.use('/staticImages', express.static('public/images/website'));
app.use('/companyImages', express.static('public/images/company'));


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// app.use(session( 
// {
//     secret: process.env.SESSION_SECRET,
//     resave: false, 
//     saveUninitialized: true,
//     cookie: { maxAge: 1000*60*60*168 }
// }));

// app.use((req,res,next)=>
// {
//     req.session.companyId = String(1);
//     req.session.userId = String(1);
//     req.session.status = 'online' ;
//     req.session.isAuthenticated = true;
//     req.session.role = "admin";
//     next();
// })

// pages logic bellow
// const con = require("./core/pool"); // required to connect to db

// CALLING ROUTES FROM CONTROLLERS
const index = require("./controllers/routes/index");
// const accounting = require("./controllers/routes/accounting");
// const employee = require("./controllers/routes/employee");
// const settings = require("./controllers/routes/settings");
// const attendance = require("./controllers/routes/attendance");
// const login = require("./controllers/routes/login");

// USING ROUTES
app.use('/', index);
// app.use('/accounting', accounting);
// app.use('/employee', employee);
// app.use('/settings', settings);
// app.use('/attendance', attendance);
// app.use('/login', login);


app.use((req, res, next) => {
    // res.render("pages/pageNotFound");
    // res.redirect('/login/index');
    res.send({status:"Page not found"});
    
});

var clc = require("cli-color");
const port = process.env.PORT;
const app_name = clc.bgGreenBright.black(process.env.APP_NAME)

app.listen(port, function () {
    // console.log(`Server is running on port ${port}...`); 
    const text = `${app_name} server is running on port `;
    const portText = `${port}...`;
    console.log(text+clc.bgGreenBright.black(portText)+" ");
});


module.exports = app;