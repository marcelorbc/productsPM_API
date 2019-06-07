'use strict';

const HelloController = require('../../interface_adapters/controllers/hello/HelloController');
const builRoute = require('./helpers/buildRoute');

module.exports = {
  name: 'hello',
  version: '1.0.0',
  register: async (server) => {
    server.route(
      [
        builRoute('GET', '/hello', HelloController.sayHelloWorld, 'Return Hello World', ['Hello', 'World']),
        builRoute('GET', '/hello', HelloController.sayHelloPerson, 'Return Hello Tperson', ['Hello', 'World'])
      ])
  }
};