const logger = require('morgan');
const compression = require('compression');

let middlewares = [
  () => logger('combined'),//logger middleware
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
