const React = require('react');
const { Router, Route, Switch, StaticRouter } = require('react-router');
const createHistory = require('history').createBrowserHistory;
const InjectChildComponent = require('./Inject.js');
const { connect } = require('react-redux');

@connect(store => {
  let AppRouter = store.AppRouter;
  return { ...AppRouter }
})
class AppRouter extends React.Component {
  constructor(props) {
    super(props);
  }

  isClient() {
    return typeof window !== 'undefined';
  }

  serverRouter(url, Routes) {
    return (
      <StaticRouter context={{}} location={url}>
        <Switch>
          <Routes />
        </Switch>
      </StaticRouter>
    )
  }

  shouldComponentUpdate(nextProps, nextState) {
    let { reduxEvent = false } = nextProps;
    if(reduxEvent) return false;
    return true;
  }
  
  updateState(payload, action) {
    this.props.dispatch({ type: 'SET_PAGE', payload });
  }

  clientRouter(store = {}, Routes) {
    const history = createHistory();
    history.listen(this.updateState.bind(this))
    return (
      <Router history={history}>
        <Switch>
          <Routes />
        </Switch>
      </Router>
    )
  }

  render() {
    let { store, url, context = null, Routes } = this.props;
    if (this.isClient()) return this.clientRouter(store, Routes);
    return this.serverRouter(url, Routes);
  }
}

module.exports = InjectChildComponent(AppRouter, ['./Routes.js']);