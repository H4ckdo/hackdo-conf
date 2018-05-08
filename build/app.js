'use strict';

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var express = require('express');
var path = require('path');

var _require = require('child_process'),
    exec = _require.exec;

var _ref = process.env.NODE_ENV === "production" ? require('../config/env/production.js') : require('../config/env/development.js'),
    PORT = _ref.PORT,
    HOST = _ref.HOST,
    FIXTURES = _ref.FIXTURES;

var setDependencies = require('../config/globals.js');

var _require2 = require('../utils/index.js'),
    installFixtures = _require2.installFixtures;

/**
 * @function bootstrap
 * @return {type} {bootstrap the connection and routes}
 */


var bootstrap = function () {
  var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
    var routes, middlewares, app, middlewaresResult, routesLoades;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            require('../config/logger.js');
            routes = require('../config/routes.js');
            middlewares = require('../config/middlewares/index.js');
            app = express();
            _context.next = 6;
            return middlewares(app);

          case 6:
            middlewaresResult = _context.sent;

            if (!middlewaresResult.ok) {
              _context.next = 18;
              break;
            }

            app.use(express.static('./client/public'));
            app.engine('html', require('ejs').renderFile);
            app.set('view engine', 'html');
            app.set('views', path.resolve(__dirname, '../views'));
            _context.next = 14;
            return routes(app);

          case 14:
            routesLoades = _context.sent;
            //define routes
            //debugger;
            if (routesLoades.ok) {
              app.listen(PORT, function () {
                return console.log("App listen on: ", HOST + ':' + PORT);
              }); //lift the server
            } else {
              errorStarting(routesLoades.error); //log the error
            }
            _context.next = 19;
            break;

          case 18:
            errorStarting(middlewaresResult.error); //log the error

          case 19:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function bootstrap() {
    return _ref2.apply(this, arguments);
  };
}();

var errorStarting = function errorStarting(error) {
  console.log('Unable to bootstrap the app ', error);
};

setDependencies().then(bootstrap).catch(errorStarting);

//# sourceMappingURL=app.js.map