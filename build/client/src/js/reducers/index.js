'use strict';

var _require = require('redux'),
    combineReducers = _require.combineReducers;

var Users = require('./Users.js');
var PopUps = require('./PopUps.js');
var AppRouter = require('./AppRouter.js');

module.exports = combineReducers({
  Users: Users,
  PopUps: PopUps,
  AppRouter: AppRouter
});