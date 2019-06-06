'use strict';
this._instance;

module.exports = class SayHello {
  constructor(context) {
    this.context = context;
    this.logger = context.logger;
  }
  
  async execute() {
    this.logger.debug("say hello to log");
    return `Hello ${this.context.parsedData.name}!`;
  }
};