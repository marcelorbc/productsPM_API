'use strict';

const HelloController = require('../../interface_adapters/controllers/hello/HelloController');
const logger = require('../../interface_adapters/logger');

module.exports = {
  name: 'hello',
  version: '1.0.0',
  register: async (server) => {
    server.route([
      {
        method: 'GET',
        path: '/hello',
        handler: () =>{
          logger.debug("Bueno 2");
          return HelloController.sayHelloWorld();
        },
        options: {
          description: 'Return "Hello world!"',
          tags: ['api'],
        },
      },
      {
        method: 'GET',
        path: '/hello/{name}',
        handler: HelloController.sayHelloPerson,
        options: {
          description: 'Return "Hello {name}!"',
          tags: ['api'],
        },
      }
    ]);
  }
};