'use strict';

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @function Users
 * @param  {type} state   {description}
 * @param  {type} options {description}
 * @return {type} {description}
 */
module.exports = function (state) {
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var payload = action.payload,
      type = action.type;

  if (type === 'ADD_MESSAGE') {
    var messageUpdate = state.data.map(function (item) {
      return (0, _assign2.default)({}, item);
    });
    messageUpdate.push({ name: payload });
    return (0, _extends3.default)({}, state, { data: messageUpdate });
  }
  return (0, _extends3.default)({}, state);
};