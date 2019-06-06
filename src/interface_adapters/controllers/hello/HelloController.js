'use strict';

const SayHello = require('../../../application_business_rules/use_cases/SayHello');
const parseInput = require('./parseInput');
const logRequest = require('../helpers/logRequest');
const logResponse = require('../helpers/logResponse');
const logger = require('../../logger');
const buildRequestContext = require('../helpers/buildRequestContext')

module.exports = {

  sayHelloWorld() {
    const sayHello = SayHello(logger());
    return sayHello.text(input);
  },

  async sayHelloPerson(request, h) {
    const parsedData = await parseInput(request);
    const context = {
      ...(await buildRequestContext(request)),
      parsedData
    }
    await logRequest(context);
    const useCase = new SayHello(context);
    
    try{
      context.response = {
        code: 0,
        data: await useCase.execute()
      };
    }catch(err){
      const error = {
        code: err.number || 9999,
        message: err.message, 
        err: err
      };
      context.response = error;
    }
    await logResponse(context);

    return context.response;
  },
};