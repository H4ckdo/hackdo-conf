'use strict';

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var React = require('react');
var path = require('path');

module.exports = function InjectChildComponent(WrappedComponent) {
  var components = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var superProps = arguments[2];

  return function (_React$Component) {
    (0, _inherits3.default)(_class, _React$Component);

    function _class(props) {
      (0, _classCallCheck3.default)(this, _class);
      return (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).call(this, props));
    }

    (0, _createClass3.default)(_class, [{
      key: 'importHot',
      value: function importHot() {
        return components.map(function (component) {
          //if (cache === false) 
          delete require.cache[require.resolve('' + component)];
          return require('' + component);
        });
      }
    }, {
      key: 'mapToProps',
      value: function mapToProps(list) {
        var result = {};
        var copy = components.slice();
        for (var i = 0; i < copy.length; i++) {
          var key = path.basename(copy[i]).replace(/.js|.jsx/g, '');
          result[key] = list[i];
        }
        return result;
      }
    }, {
      key: 'render',
      value: function render() {
        var props = this.mapToProps(this.importHot());
        return React.createElement(WrappedComponent, (0, _extends3.default)({}, props, superProps, this.props));
      }
    }]);
    return _class;
  }(React.Component);
};