module.exports = async ({req : {url: {host, href}, body, headers}, logger}) => {
    logger.debug('Request Received', { host, href, headers, body });
}