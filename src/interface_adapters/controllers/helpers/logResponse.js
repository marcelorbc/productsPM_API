const date = require('../../date-time-format')

module.exports = async ({
    correlationId,
    sessionId,
    user,
    createdAt,
    req: {
        url: {
            host,
            href
        },
        body,
        headers
    },
    response,
    logger
}) => {
    logger.debug('Response Sent', {
        createdAt,
        finishedAt: date.getNowFormatted(),
        correlationId,
        sessionId,
        user,
        host,
        href,
        body,
        headers,
        response
    })
}