import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware} from 'react-router-redux';
import { browserHistory } from 'react-router';
import rootReducer from '../reducers';
import thunk from 'redux-thunk';

const finalCreateStore = compose(
  applyMiddleware(
    thunk,
    routerMiddleware(browserHistory),
  )
)(createStore);

module.exports = function configureStore(initialState) {
  return finalCreateStore(rootReducer, initialState);
};
