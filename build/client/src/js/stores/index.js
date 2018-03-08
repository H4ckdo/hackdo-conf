'use strict';

var _require = require('redux'),
    createStore = _require.createStore;

var reducers = require('../reducers');
var Users = require('./Users.js');
var PopUps = require('./PopUps.js');
var AppRouter = require('./AppRouter.js');
var initialState = { Users: Users, PopUps: PopUps, AppRouter: AppRouter };

exports.generateStore = function () {
  var preloadState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;

  var devtool = typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
  var store = void 0;
  if (devtool) {
    store = createStore(reducers, preloadState, devtool);
  } else {
    store = createStore(reducers, preloadState);
  }
  return store;
};