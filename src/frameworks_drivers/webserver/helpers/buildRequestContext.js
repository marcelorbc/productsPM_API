const logger = require('../../logger');
const uuid = require('../../../helpers/uuid')
const jwt = require('../../security/JwtAccessTokenManager')
const date = require('../../date-time-format')


module.exports = async (req) => {
    const decoder = new jwt().decode;
    const context = {
        logger: logger(this),
        correlationId: req.headers["correlationId"] || uuid(),
        sessionId: req.headers["sessionId"],
        user: (decoder(req.headers['jwt']) || {}),
        req: req,
        createdAt: date.getNowFormatted()
    };
    return context;
}