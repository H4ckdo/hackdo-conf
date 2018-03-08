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

var _dec, _class;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var React = require('react');
var ReactDOM = require('react-dom');

var _require = require('react-redux'),
    connect = _require.connect;

var InjectChildComponent = require('./Inject.js');

var PopUp = (_dec = connect(function (store) {
  var _store$PopUps = store.PopUps,
      list = _store$PopUps.list,
      close = _store$PopUps.close,
      open = _store$PopUps.open,
      type = _store$PopUps.type;
  //console.log('store ', store);

  return { list: list, close: close, open: open };
}), _dec(_class = function (_React$Component) {
  (0, _inherits3.default)(PopUp, _React$Component);

  function PopUp(props) {
    (0, _classCallCheck3.default)(this, PopUp);
    return (0, _possibleConstructorReturn3.default)(this, (PopUp.__proto__ || (0, _getPrototypeOf2.default)(PopUp)).call(this, props));
  }

  (0, _createClass3.default)(PopUp, [{
    key: 'loadingTemplate',
    value: function loadingTemplate() {
      return React.createElement(
        'span',
        null,
        React.createElement('img', { src: '/assets/images/spin.gif' })
      );
    }
  }, {
    key: 'onOpen',
    value: function onOpen(e) {
      console.log(e, 'open');
      this.props.dispatch({ type: 'OPEN' });
      this.refs.popupMask.setState({ show: true });
      console.log("ENTRA OPEN");
    }
  }, {
    key: 'onClose',
    value: function onClose(e) {
      this.props.dispatch({ type: 'CLOSE' });
      this.refs.popupMask.setState({ show: false });
      console.log("Cierra");
    }
  }, {
    key: 'onCloseAll',
    value: function onCloseAll(e) {
      console.log("Close all");
      //this.props.dispatch('CLOSE_ALL');
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var onBrowser = typeof window !== 'undefined';
      if (onBrowser && this.refs.popup) {
        var eventClose = new Event('close');
        var eventCloseAll = new Event('closeAll');
        var eventOpen = new Event('open');
        var elem = ReactDOM.findDOMNode(this.refs.popup);
        elem.addEventListener('open', this.onOpen.bind(this));
        elem.addEventListener('close', this.onClose.bind(this));
        elem.addEventListener('closeAll', this.onCloseAll.bind(this));
        if (this.props.close) return elem.dispatchEvent(eventClose);
        if (this.props.open) return elem.dispatchEvent(eventOpen);
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      //console.log('nextProps ', nextProps);    
      var _props = this.props,
          close = _props.close,
          open = _props.open,
          dispatch = _props.dispatch;
      // if(nextProps.hasOwnProperty('close') && nextProps.close) dispatch({type: 'CLOSE'});
      //if(nextProps.hasOwnProperty('open') && nextProps.open) dispatch({type: 'OPEN'});
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          type = _props2.type,
          close = _props2.close,
          open = _props2.open,
          Mask = _props2.Mask;

      var template = this.loadingTemplate();
      return React.createElement(Mask, {
        ref: 'popupMask',
        data: React.createElement(
          'div',
          { className: 'popup-wrapper ' + type, ref: 'popup' },
          ' ',
          template,
          ' '
        )
      });
    }
  }]);
  return PopUp;
}(React.Component)) || _class);


module.exports = InjectChildComponent(PopUp, ['./Mask.js']);