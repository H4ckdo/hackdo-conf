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

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _dec, _class;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var React = require('react');

var _require = require('react-router'),
    Router = _require.Router,
    Route = _require.Route,
    Switch = _require.Switch,
    StaticRouter = _require.StaticRouter;

var createHistory = require('history').createBrowserHistory;
var InjectChildComponent = require('./Inject.js');

var _require2 = require('react-redux'),
    connect = _require2.connect;

var AppRouter = (_dec = connect(function (store) {
  var AppRouter = store.AppRouter;
  return (0, _extends3.default)({}, AppRouter);
}), _dec(_class = function (_React$Component) {
  (0, _inherits3.default)(AppRouter, _React$Component);

  function AppRouter(props) {
    (0, _classCallCheck3.default)(this, AppRouter);
    return (0, _possibleConstructorReturn3.default)(this, (AppRouter.__proto__ || (0, _getPrototypeOf2.default)(AppRouter)).call(this, props));
  }

  (0, _createClass3.default)(AppRouter, [{
    key: 'isClient',
    value: function isClient() {
      return typeof window !== 'undefined';
    }
  }, {
    key: 'serverRouter',
    value: function serverRouter(url, Routes) {
      return React.createElement(
        StaticRouter,
        { context: {}, location: url },
        React.createElement(
          Switch,
          null,
          React.createElement(Routes, null)
        )
      );
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      var _nextProps$reduxEvent = nextProps.reduxEvent,
          reduxEvent = _nextProps$reduxEvent === undefined ? false : _nextProps$reduxEvent;

      if (reduxEvent) return false;
      return true;
    }
  }, {
    key: 'updateState',
    value: function updateState(payload, action) {
      this.props.dispatch({ type: 'SET_PAGE', payload: payload });
    }
  }, {
    key: 'clientRouter',
    value: function clientRouter() {
      var store = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var Routes = arguments[1];

      var history = createHistory();
      history.listen(this.updateState.bind(this));
      return React.createElement(
        Router,
        { history: history },
        React.createElement(
          Switch,
          null,
          React.createElement(Routes, null)
        )
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          store = _props.store,
          url = _props.url,
          _props$context = _props.context,
          context = _props$context === undefined ? null : _props$context,
          Routes = _props.Routes;

      if (this.isClient()) return this.clientRouter(store, Routes);
      return this.serverRouter(url, Routes);
    }
  }]);
  return AppRouter;
}(React.Component)) || _class);


module.exports = InjectChildComponent(AppRouter, ['./Routes.js']);