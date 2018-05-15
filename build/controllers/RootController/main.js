'use strict';

var _server = require('react-dom/server');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var environment = process.env.NODE_ENV || 'development';
var publicServerKey = "BPlXiFG6NINNh-j7Tqhcgd2xMXYDM9_r1Wuuhbe4KB3TrCwaXQjXsdnCD_iOlh6tGF8Hyz86TMtzNxL2DJpA-Mc";
/**
 * @function main
 * @param  {type} req {description}
 * @param  {type} res {description}
 * @return {type} Serve the App component
 */
var main = function main(req, res) {
  res.render('index', { environment: environment, publicServerKey: publicServerKey });
};

module.exports = main;
//# sourceMappingURL=main.js.map