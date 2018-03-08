const ReactDOM = require('react-dom');
const React = require('react');
const { Provider } = require('react-redux');
const AppRouter = require('./components/AppRouter.js');
const { generateStore } = require('./stores/index.js');
const store = generateStore(window.__preloadedState__);

ReactDOM.hydrate(
  <Provider store={ store }>
    <AppRouter store={store}/>
  </Provider>,
  document.getElementById('app')
)

delete window.__preloadedState__;