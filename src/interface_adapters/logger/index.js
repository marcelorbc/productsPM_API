'use strict';

const winston = require('winston');
const date = require('../date-time-format')
const stackTrace = require('stack-trace')

class AppLogger {
    
    constructor(logger, context){
        this.context = context;
        this.logger = logger;
    }

    getLogger(){
        return this.logger;
    } 
    log(message, object) {
        this.logger.log({message, data: {...object}, time:date.getNowFormatted()});
    }
    warn(message, object) {
        this.logger.warn({message, data: {...object}, time:date.getNowFormatted()});
    }
    error(message, object) {
        const stack = stackTrace.parse(object);
        this.logger.error({message, data: {message: object.message, ...object},  time:date.getNowFormatted(), stack});
    } 
    debug(message, object) {
        this.logger.debug({message, data: {...object}, time:date.getNowFormatted()});
    }
    info(message, object) {
        this.logger.info({message, data: {...object}, time:date.getNowFormatted()});
    } 
}

module.exports =  (context) => {
    this.logger = this.logger || winston.createLogger({
        level: 'debug',
        format: winston.format.json(),
        transports: [
            new winston.transports.Console({
                level: 'debug'
            }),
            new winston.transports.File({
                filename: './combined.log',
                level: 'debug'
            })
        ]
    });
    return new AppLogger(this.logger, context);
}