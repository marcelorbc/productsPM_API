const logger = require('../../logger');
const uuid = require('../../../helpers/uuid')
const jwt = require('../../security/JwtAccessTokenManager')
const date = require('../../date-time-format')
const logRequest = require('../../../interface_adapters/controllers/helpers/logRequest');
const logResponse = require('../../../interface_adapters/controllers/helpers/logResponse');
const buildRequestContext = require('./buildRequestContext');


module.exports = async (method, path, fn, description, tags ) => {
    return {
        method,
        path,
        handler: async (request) => {
            const context = await buildRequestContext(request);
            try {
                logRequest(context);
                context.logger.debug("Init Say Hello World");
                const result = await fn(context);
                logResponse(context);
            } catch (err) {
                context.logger.debug("Error on hello");
                return { code: 0, message: err.message };
            }
        },
        options: { description, tags, },
    }
};