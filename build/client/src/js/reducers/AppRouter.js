'use strict';

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @function AppRouter
 * @param  {type} state   {description}
 * @param  {type} options {description}
 * @return {type} {description}
 */
module.exports = function (state) {
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _action$payload = action.payload,
      payload = _action$payload === undefined ? {} : _action$payload,
      _action$type = action.type,
      type = _action$type === undefined ? '' : _action$type;

  if (type === 'SET_PAGE') {
    return (0, _extends3.default)({}, state, { payload: payload, reduxEvent: true });
  }
  return (0, _extends3.default)({}, state, { reduxEvent: true });
};