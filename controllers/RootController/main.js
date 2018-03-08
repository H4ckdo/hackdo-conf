import { renderToString, renderToStaticMarkup } from 'react-dom/server';
import React from 'react';
import { Provider } from 'react-redux';
let environment = process.env.NODE_ENV || 'development';
let store, AppRouter;

const importHot = () => {
  delete require.cache[require.resolve('stores/index.js')];
  delete require.cache[require.resolve('components/AppRouter.js')];
  store = require('stores/index.js').generateStore();
  AppRouter = require('components/AppRouter.js');
}

if (environment === 'production') importHot();//in production the import should once

/**
 * @function main
 * @param  {type} req {description}
 * @param  {type} res {description}
 * @return {type} Serve the App component
 */
const main = (req, res) => {
  if (environment === 'development') importHot();
  let preloadedState = store.getState();
  res.render('index', {
    environment,
    preloadedState,
    markup: renderToString(
      <Provider store={store}>
        <AppRouter store={store} path={req.path} url={req.url} />
      </Provider>
    )
  })
}

module.exports = main;
