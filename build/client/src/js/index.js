'use strict';

var ReactDOM = require('react-dom');
var React = require('react');

var _require = require('react-redux'),
    Provider = _require.Provider;

var AppRouter = require('./components/AppRouter.js');

var _require2 = require('./stores/index.js'),
    generateStore = _require2.generateStore;

var store = generateStore(window.__preloadedState__);

ReactDOM.hydrate(React.createElement(
  Provider,
  { store: store },
  React.createElement(AppRouter, { store: store })
), document.getElementById('app'));

delete window.__preloadedState__;