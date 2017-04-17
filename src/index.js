import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { configureStore } from './store/configureStore';
import browserHistory from './history';
import App from './containers/App';
import './styles/main.scss';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={App}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
