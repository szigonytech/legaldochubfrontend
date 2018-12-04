import { createStore, compose, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import rootReducer from './reducer';
import thunk from 'redux-thunk';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'react-router-redux';

export const history = createBrowserHistory();

const initialState = {};
let middleware = [
  thunk,
  routerMiddleware(history)
];

middleware.push(createLogger());

const composedEnhancers = compose(
  applyMiddleware(...middleware)
);

export const store = createStore(
  rootReducer,
  initialState,
  composedEnhancers
);
