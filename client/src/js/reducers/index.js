const { combineReducers } = require('redux');
const Users = require('./Users.js');
const PopUps = require('./PopUps.js');
const AppRouter = require('./AppRouter.js');

module.exports = combineReducers({
  Users,
  PopUps,
  AppRouter
})

