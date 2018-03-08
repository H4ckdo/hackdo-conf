'use strict';

var _server = require('react-dom/server');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var environment = process.env.NODE_ENV || 'development';
var store = void 0,
    AppRouter = void 0;

var importHot = function importHot() {
  delete require.cache[require.resolve('../../client/src/js/stores/index.js')];
  delete require.cache[require.resolve('../../client/src/js/components/AppRouter.js')];
  store = require('../../client/src/js/stores/index.js').generateStore();
  AppRouter = require('../../client/src/js/components/AppRouter.js');
};

if (environment === 'production') importHot(); //in production the import should once

/**
 * @function main
 * @param  {type} req {description}
 * @param  {type} res {description}
 * @return {type} Serve the App component
 */
var main = function main(req, res) {
  if (environment === 'development') importHot();
  var preloadedState = store.getState();
  res.render('index', {
    environment: environment,
    preloadedState: preloadedState,
    markup: (0, _server.renderToString)(_react2.default.createElement(
      _reactRedux.Provider,
      { store: store },
      _react2.default.createElement(AppRouter, { store: store, path: req.path, url: req.url })
    ))
  });
};

module.exports = main;
//# sourceMappingURL=main.js.map