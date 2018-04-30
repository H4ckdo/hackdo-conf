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

var _reactAliceCarousel = require('react-alice-carousel');

var _reactAliceCarousel2 = _interopRequireDefault(_reactAliceCarousel);

var _gallery_ = require('../../images/gallery_1.jpg');

var _gallery_2 = _interopRequireDefault(_gallery_);

var _gallery_3 = require('../../images/gallery_2.jpg');

var _gallery_4 = _interopRequireDefault(_gallery_3);

var _gallery_5 = require('../../images/gallery_3.jpg');

var _gallery_6 = _interopRequireDefault(_gallery_5);

var _gallery_7 = require('../../images/gallery_4.jpg');

var _gallery_8 = _interopRequireDefault(_gallery_7);

var _gallery_9 = require('../../images/gallery_5.jpg');

var _gallery_10 = _interopRequireDefault(_gallery_9);

var _gallery_11 = require('../../images/gallery_6.jpg');

var _gallery_12 = _interopRequireDefault(_gallery_11);

var _gallery_13 = require('../../images/gallery_7.jpg');

var _gallery_14 = _interopRequireDefault(_gallery_13);

var _gallery_15 = require('../../images/gallery_8.jpg');

var _gallery_16 = _interopRequireDefault(_gallery_15);

var _gallery_17 = require('../../images/gallery_9.jpg');

var _gallery_18 = _interopRequireDefault(_gallery_17);

var _gallery_19 = require('../../images/gallery_10.jpg');

var _gallery_20 = _interopRequireDefault(_gallery_19);

var _gallery_21 = require('../../images/gallery_11.jpg');

var _gallery_22 = _interopRequireDefault(_gallery_21);

var _gallery_23 = require('../../images/gallery_12.jpg');

var _gallery_24 = _interopRequireDefault(_gallery_23);

var _gallery_25 = require('../../images/gallery_13.jpg');

var _gallery_26 = _interopRequireDefault(_gallery_25);

var _gallery_27 = require('../../images/gallery_14.jpg');

var _gallery_28 = _interopRequireDefault(_gallery_27);

var _gallery_29 = require('../../images/gallery_15.jpg');

var _gallery_30 = _interopRequireDefault(_gallery_29);

var _gallery_31 = require('../../images/gallery_16.jpg');

var _gallery_32 = _interopRequireDefault(_gallery_31);

var _gallery_33 = require('../../images/gallery_17.jpg');

var _gallery_34 = _interopRequireDefault(_gallery_33);

var _gallery_35 = require('../../images/gallery_18.jpg');

var _gallery_36 = _interopRequireDefault(_gallery_35);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var React = require('react');
var InjectChildComponent = require('./Inject.js');

var _require = require('react-router-dom'),
    Link = _require.Link;

var Gallery = function (_React$Component) {
  (0, _inherits3.default)(Gallery, _React$Component);

  function Gallery() {
    (0, _classCallCheck3.default)(this, Gallery);
    return (0, _possibleConstructorReturn3.default)(this, (Gallery.__proto__ || (0, _getPrototypeOf2.default)(Gallery)).call(this));
  }

  (0, _createClass3.default)(Gallery, [{
    key: 'render',
    value: function render() {
      var responsive = {
        320: {
          items: 1
        }
      };

      return React.createElement(
        _reactAliceCarousel2.default,
        {
          responsive: responsive,
          autoPlay: false,
          duration: 1000
        },
        React.createElement('img', { src: '' + _gallery_2.default }),
        React.createElement('img', { src: '' + _gallery_4.default }),
        React.createElement('img', { src: '' + _gallery_6.default }),
        React.createElement('img', { src: '' + _gallery_8.default }),
        React.createElement('img', { src: '' + _gallery_10.default }),
        React.createElement('img', { src: '' + _gallery_12.default }),
        React.createElement('img', { src: '' + _gallery_14.default }),
        React.createElement('img', { src: '' + _gallery_16.default }),
        React.createElement('img', { src: '' + _gallery_18.default }),
        React.createElement('img', { src: '' + _gallery_20.default }),
        React.createElement('img', { src: '' + _gallery_22.default }),
        React.createElement('img', { src: '' + _gallery_24.default }),
        React.createElement('img', { src: '' + _gallery_26.default }),
        React.createElement('img', { src: '' + _gallery_28.default }),
        React.createElement('img', { src: '' + _gallery_30.default }),
        React.createElement('img', { src: '' + _gallery_32.default }),
        React.createElement('img', { src: '' + _gallery_34.default }),
        React.createElement('img', { src: '' + _gallery_36.default })
      );
    }
  }]);
  return Gallery;
}(React.Component);

module.exports = InjectChildComponent(Gallery, []);