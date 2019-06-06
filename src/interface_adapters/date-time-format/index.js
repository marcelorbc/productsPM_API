let date = require('date-and-time');

module.exports = {
    getNowFormatted : () => {
        let now = new Date();
        return  date.format(now, 'YYYY/MM/DD HH:mm:ss.SSS'); 
    }
}