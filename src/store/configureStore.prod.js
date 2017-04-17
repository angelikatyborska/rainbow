import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware} from 'react-router-redux';
import history  from '../history';
import rootReducer from '../reducers';
import thunk from 'redux-thunk';

const finalCreateStore = compose(
  applyMiddleware(
    thunk,
    routerMiddleware(history),
  )
)(createStore);

module.exports = function configureStore(initialState) {
  return finalCreateStore(rootReducer, initialState);
};
