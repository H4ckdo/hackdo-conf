const logger = require('winston');
global.log = logger.log;
global.info = logger.info;
global.error = logger.error;
global.warn = logger.warn;