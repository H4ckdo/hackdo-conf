const express = require('express');
const path = require('path');
const { exec } = require('child_process');
const { PORT, HOST, FIXTURES } = process.env.NODE_ENV === "production" ? require('config/env/production.js') : require('config/env/development.js');
const setDependencies = require('config/globals.js');
const { installFixtures } = require('utils/index.js');

/**
 * @function bootstrap
 * @return {type} {bootstrap the connection and routes}
 */
const bootstrap = async () => {
  require('config/logger.js');
  const routes = require('config/routes.js');
  const middlewares = require('config/middlewares/index.js');
  let app = express();
  let middlewaresResult = await middlewares(app);
  if(middlewaresResult.ok) {
    app.use(express.static('./client/public'));
    app.engine('html', require('ejs').renderFile);
    app.set('view engine', 'html');
    app.set('views', path.resolve(__dirname, '../views'));
      let routesLoades = await routes(app);//define routes
      //debugger;
      if (routesLoades.ok) {
          app.listen(PORT, () => console.log("App listen on: ", `${HOST}:${PORT}`))//lift the server
      } else {
        errorStarting(routesLoades.error);//log the error
      }
  } else {
    errorStarting(middlewaresResult.error);//log the error
  }
}

const errorStarting = (error) => {
  console.log('Unable to bootstrap the app ', error);
}

setDependencies()
  .then(bootstrap)
  .catch(errorStarting)
