const { createStore } = require('redux');
const reducers = require('../reducers');
const Users = require('./Users.js');
const PopUps = require('./PopUps.js');
const AppRouter = require('./AppRouter.js');
const initialState = { Users, PopUps, AppRouter }

exports.generateStore = function(preloadState = initialState) {
  let devtool = typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  let store;
  if(devtool) {
    store = createStore(reducers, preloadState, devtool);
  } else {
    store = createStore(reducers, preloadState);
  }
  return store;
}

