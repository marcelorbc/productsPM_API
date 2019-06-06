'use strict';

const local = require('./config.local');
const prd = require('./config.prod');

module.exports = (env = process.env.enviroment || 'local') => {
    return env == 'local' ? local : prd;  
}