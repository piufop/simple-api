const winston = require('winston');

const info = (message) => {
  winston.info(message);
};

const error = (message) => {
  winston.error(message);
};

module.exports = {
  info,
  error
};