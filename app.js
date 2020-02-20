const express = require('express');
const app = express();
const path = require('path');
const hbs = require('express-handlebars')
const bodyParser = require('body-parser');
const cors = require('cors');

const methodOverride = require('method-override');
const logger = require("./server/server_logger");

function init() {
    logger.init();
    startExpress();
}

function startExpress() {
    logger.log("Starting Express..");
    app.set('trust proxy', '127.0.0.1');

    // using bodyParser to parse JSON bodies into JS objects
    app.use(bodyParser.json());

    app.use(bodyParser.urlencoded({ // to support URL-encoded bodies
         extended: true
    }));
    // enabling CORS for all requests
    var corsOptions = {
         origin: '*',
         optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204 
    }
    app.use(cors(corsOptions));

    app.use(function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.header("Access-Control-Allow-Headers", "metrics-api-key");
        next();
    });
    // View Engine
    app.set('view engine', 'hbs')

    app.engine('hbs', hbs({
        extname: 'hbs',
        defaultView: 'main',
        layoutsDir: __dirname + '/views/layouts/',
	helpers: require(__dirname+'/config/handlebars-helpers')
    }));

    // methodOverride
    app.use(methodOverride('_method'));

    app.use("/libraries", express.static(__dirname + '/node_modules'));
    app.use("/static", express.static(__dirname + '/public'));
    app.use("/.well-known", express.static(__dirname + '/.well-known'));

    app.use(require('./routes'));

    app.listen(3000, function () {
        console.log('Listening on port 3000...')
    })

    logger.log("Started Express.");
}

init();
