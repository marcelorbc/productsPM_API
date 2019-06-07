'use strict';
this._instance;

module.exports = class SayHello {
  constructor(context) {
    this.context = context;
    this.logger = context.logger;
  }
  
  async execute() {
    const world = this.context.parsedData.name || 'world';
    return `Hello ${world}!`;
  }
};