'use strict';

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
var InjectChildComponent = require('./Inject.js');

var Mask = function (_React$Component) {
  (0, _inherits3.default)(Mask, _React$Component);

  function Mask(props) {
    (0, _classCallCheck3.default)(this, Mask);
    return (0, _possibleConstructorReturn3.default)(this, (Mask.__proto__ || (0, _getPrototypeOf2.default)(Mask)).call(this, props));
  }

  (0, _createClass3.default)(Mask, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      //console.log("Close child ", this.props.data)
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          _props$data = _props.data,
          data = _props$data === undefined ? null : _props$data,
          _props$show = _props.show,
          show = _props$show === undefined ? false : _props$show;

      var shouldShow = show ? 'appear' : 'disappear';
      return React.createElement(
        'div',
        { id: 'mask-wrapper', className: shouldShow },
        React.createElement(
          'div',
          { className: 'content' },
          data
        )
      );

      {
        /*
          if(show) return (
            <div id="mask-wrapper" className={ shouldShow }>
              <div className="content">
                { data }
              </div>
            </div>
          )
          return null;
        */
      }
    }
  }]);
  return Mask;
}(React.Component);

module.exports = InjectChildComponent(Mask, []);