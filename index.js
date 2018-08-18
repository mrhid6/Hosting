const express = require('express');
const app = express();
const exphbs = require('express-handlebars');
const path = require('path');
const bodyParser = require('body-parser');

const methodOverride = require('method-override');
const logger = require("./server/server_logger");

function init() {
    logger.init();
    startExpress();
}

function startExpress() {
    logger.log("Starting Express..");


    // View Engine
    app.set('views', path.join(__dirname + '/views'));
    app.engine('handlebars', exphbs({
        defaultLayout: 'main',
        layoutsDir: path.join(__dirname + '/views/layouts')
    }));
    app.set('view engine', 'handlebars');

    // body-parser
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));

    // methodOverride
    app.use(methodOverride('_method'));

    app.use("/libraries", express.static(__dirname + '/node_modules'));
    app.use("/client", express.static(__dirname + '/client'));
    app.use("/.well-known", express.static(__dirname + '/.well-known'));

    app.use(require('./controllers'));

    app.listen(3000, function () {
        console.log('Listening on port 3000...')
    })

    logger.log("Started Express.");
}

init();