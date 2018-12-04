import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import app from './app';
import dochub from './dochub';

export * from './app';
export * from './dochub';

const rootReducer = combineReducers({
    app,
    dochub,
    routing: routerReducer
});

export default rootReducer;