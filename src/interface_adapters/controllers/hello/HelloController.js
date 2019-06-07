'use strict';

const SayHello = require('../../../application_business_rules/use_cases/SayHello');
const parseInput = require('./parseInput');
const logRequest = require('../helpers/logRequest');
const logResponse = require('../helpers/logResponse');

module.exports = {

  async sayHelloWorld(context) {
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
    return context.response;
  },

  async sayHelloPerson(context) {
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
    return context.response;
  },
};