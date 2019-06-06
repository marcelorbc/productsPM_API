'use strict';

const Hapi = require('@hapi/hapi');
const Package = require('../../../package');
const goodWinston = require('hapi-good-winston');
const logger = require('../../interface_adapters/logger');
const config = require('../../../config');

const createServer = async () => {
  // Create a server with a host and port
  const server = Hapi.server({
    port: config().server.port
  });

  // Register vendors plugins
  await server.register([
    require('blipp'),
    require('@hapi/inert'),
    require('@hapi/vision'),
    {
      plugin: require('hapi-swagger'),
      options: {
        info: {
          title: 'Test API Documentation',
          version: Package.version,
        },
      }
    },
    {
      plugin: require('@hapi/good'),
      options: {
        ops: {
          interval: 1000 * 60
        },
        reporters: {
          winston: [goodWinston.goodWinston(logger().getLogger())],
          myConsoleReporter: [{
              module: '@hapi/good-squeeze',
              name: 'Squeeze',
              args: [{
                ops: '*',
                log: '*',
                error: '*',
                response: '*'
              }]
            },
            {
              module: '@hapi/good-console'
            },
            'stdout'
          ]
        }
      },
    },
  ]);

  // Register custom plugins
  await server.register([
    require('./oauth'),
    require('./hello'),
    require('./private'),
    require('./users'),
  ]);

  return server;
};

module.exports = createServer;