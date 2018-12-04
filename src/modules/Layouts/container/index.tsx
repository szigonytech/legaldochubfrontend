import * as React from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { GlobalState } from '../../../model';
import { Switch, Route } from 'react-router-dom';
import Layout from '../component';
import routes from '../../../routes';
import { Router } from 'react-router';
import { history } from '../../../store';
import UrlNotFound from '../../../components/URL_Not_Found';
import { bindActionCreators } from 'redux';
import * as layoutActions from './actions';
import * as _ from 'lodash';

class LayoutContainer extends React.Component<any, any> {
    render() {
        console.log(this.props);
        return (
            <Layout {...this.props} >
                <Router history={history}>
                    <Switch>
                        {routes.map(route =>
                            <Route key={route.path} exact path={route.path} component={route.component} />)}
                        <Route component={UrlNotFound} />
                    </Switch>
                </Router>
            </Layout>
        );
    }
}

const bindDispatch = _.memoize(dispatch => ({
    dispatch, actions: bindActionCreators<any, any>(layoutActions, dispatch)
}));

const selector: any = createSelector(
    (state: GlobalState) => state.layout_distributor,
    (state: GlobalState) => state.app,
    (state: GlobalState) => state.dochub,
    (layoutStates, app, dochub) => ({ layoutStates, app, dochub })
);

export default connect(selector, bindDispatch)(LayoutContainer);
