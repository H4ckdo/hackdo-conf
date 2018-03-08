'use strict';

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @function PopUps
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


  if (type === 'OPEN') {
    //console.log("ENTRA OPEN")
    return (0, _extends3.default)({}, state, { open: true, close: false });
  }
  if (type === 'CLOSE') {
    //console.log("CLOSE")
    return (0, _extends3.default)({}, state, { close: true, open: false });
  }
  if (type === 'CLOSE_ALL') {
    var list = state.list.map(function (item) {
      return (0, _assign2.default)({}, item, { close: true });
    });
    return (0, _extends3.default)({}, state, { list: list });
  }
  /*
  if (type === 'ADD_POPUP') {
    return { ...state, data: messageUpdate }
  }
  */
  return (0, _extends3.default)({}, state);
};