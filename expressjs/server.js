// Sets up dotenv as soon as our application starts
require('dotenv').config();

const express = require('express')
const logger = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

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

if (environment !== 'production') {
    app.use(logger('dev'));
}

const routes = require('./routes/index.js');
app.use('/', routes(router));

app.listen(`${stage.port}`, () => {
    console.log(`Server now listening at localhost:${stage.port}`);
});

module.exports = app;

/* app.listen(3000, function() {
    console.log('Example app listening on port 3000!')
}) */