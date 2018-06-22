const Logger = require("nicelogger");


Logger.init = function () {
    Logger.config(require('./logger_config.json').logger, __dirname + "/../");
}

module.exports = Logger;