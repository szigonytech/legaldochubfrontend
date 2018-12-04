import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import login_distributor from './modules/Login/container/reducer';
import layout_distributor from './modules/Layouts/container/reducer';
import register_distributor from './modules/Register/container/reducer';
import app from './reducers/app';
import dochub from './reducers/dochub';

const rootReducer = combineReducers({
    app,
    dochub,
    login_distributor,
    layout_distributor,
    register_distributor,
    routing: routerReducer
});

export default rootReducer;