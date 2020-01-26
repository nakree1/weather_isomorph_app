#!/usr/bin/env node

require('../config/babel');

const { PORT } = require('../config');
const http = require('http');
const createDB = require('../models').default;
const createApp = require('../server').default;
const initCron = require('../jobs').default;


function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  const bind = typeof PORT === 'string' ? 'Pipe ' + PORT : 'Port ' + PORT;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

async function start() {
  const db = await createDB();
  const app = createApp({ db });

  await initCron();

  const server = http.createServer();

  server
    .on('request', app)
    .on('error', onError)
    .listen(PORT, () => {
      console.log(`API running on port ${PORT}`);
    });
}

start();
