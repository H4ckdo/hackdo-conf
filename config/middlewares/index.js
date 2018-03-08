const bodyParser = require('body-parser');
const uploadFiles = require('./uploadFiles.js');
const expressSanitized = require('express-sanitized');
const mongoSanitize = require('express-mongo-sanitize');
const graphql = require('./graphql/index.js');
const logger = require('morgan');
const compression = require('compression');

let middlewares = [
  () => logger('combined'),//logger middleware
  () => bodyParser.json(),
  () => bodyParser.urlencoded({ extended: true }),
  () => expressSanitized(),
  () => mongoSanitize(),
  uploadFiles,
  graphql,
  () => compression(),
]

/**
 * @function attachMiddleware
 * @param  {type} middlewares {description}
 * @param  {type} app         {description}
 * @return {type} {description}
 */
const attachMiddleware = (middlewares, app) =>  {
  for(middleware of middlewares) {
    let result = middleware();
    let { payload = null, path = null } = result;
    if (payload && path)  {
      app.use(path, payload);
    } else if (result) {
      app.use(result);
    }
  }
}

module.exports = (app) => surePromise(
  prometify(
    attachMiddleware.bind(attachMiddleware, middlewares, app)
  )
)
