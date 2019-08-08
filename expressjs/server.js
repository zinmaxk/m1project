// Sets up dotenv as soon as our application starts
require('dotenv').config();

const express = require('express')
const logger = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const flash = require('connect-flash');

const app = express();
const router = express.Router();

app.use(cookieParser());
app.use(express.static('public'));
app.set('view engine', 'ejs')

const environment = process.env.NODE_ENV; // development
const stage = require('./config')[environment];

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(session({secret: 'ksnl_secret_key', saveUninitialized: true, resave: true}));
app.use(flash());

if (environment !== 'production') {
    app.use(logger('dev'));
}

//The 404 Route (ALWAYS Keep this as the last route)
// app.use(function(req, res, next) {
//     // return res.status(404).send({ message: 'Route'+req.url+' Not found.' });
// });

const routes = require('./routes/index.js');
app.use('/', routes(router));

// Route not found (404)
app.use(function(req, res, next) {
    const page = {
        pageTitle: 'Error!',
        breadCrumbTitle: "Page not found"
    };
    return res.status(404).render('404error', {page: page});
});

app.use(function(req, res, next) {
    const page = {
        pageTitle: 'Error 500!',
        breadCrumbTitle: "Oops... Something went wrong"
    };
    return res.status(500).render('500error', {page: page});
});

app.listen(`${stage.port}`, () => {
    console.log(`Server now listening at http://localhost:${stage.port}`);
});

module.exports = app;

/* app.listen(3000, function() {
    console.log('Example app listening on port 3000!')
}) */