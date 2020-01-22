#!/usr/bin/env node

const http = require('http');
const createDB = require('../models').default;
const createApp = require('../server').default;


const port = process.env.PORT || 3000;

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

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

  const server = http.createServer();

  server
    .on('request', app)
    .on('error', onError)
    .listen(port, () => {
      console.log(`API running on port ${port}`);
    });
}

start();
