const express = require('express');
const morgan = require('morgan');
const logger = require('./src/logger');
const app = express();

app.use(morgan('combined'));
app.locals.title = 'Simple API';

app.post('/ping', (req, res) => {
  res.send('pong');
});

const server = app.listen(process.env.port || 5000, () => {
  logger.info(`${app.locals.title} listening on port ${server.address().port}`);
});

process.on('SIGTERM', () => {
  logger.info('Received SIGTERM. Exiting application');
});

process.on('uncaughtException', (error) => {
  logger.error('Something bad happened:', error);
  throw error;
});
