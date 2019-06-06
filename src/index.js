'use strict';

// Create a server with a host and port
const sequelize = require('./frameworks_drivers/database/sequelize');
const createServer = require('./frameworks_drivers/webserver/server');
const logger = require('./interface_adapters/logger');

// Start the server
const start = async () => {

  try { //teste bueno

    await sequelize.sync();
    logger().info('Connection to DB has been established successfully.');

  } catch (err) {
    logger().error('Unable to connect to the database:', err);
  }

  try {
    const server = await createServer();
    await server.start();
 
    logger().info('Server running at:', server.info);
  } catch (err) {
    logger().error("Failed to start server", err);
    process.exit(1);
  }
};

start();