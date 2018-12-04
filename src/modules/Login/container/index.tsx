import * as React from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { GlobalState } from '../../../model';
import { bindActionCreators } from 'redux';
import * as loginActions from './actions';
import * as _ from 'lodash';
import Login from '../component';

class LoginContainer extends React.Component {
  render() {
    let { actions, loginStates }: any = this.props;
    
    return (
      <Login
        onLogin={actions.onLogin}
        form={loginStates.form}
        onChange={actions.onChange}
        errors={loginStates.errors}
        onCreateAnAccount={actions.createAnAccount}
        onOuterChange={actions.onOuterChange} 
        isPassword={loginStates.isPassword}
      />
    );
  }
}

const bindDispatch = _.memoize(dispatch => ({
  dispatch,
  actions: bindActionCreators<any, any>(loginActions, dispatch)
}));

const selector: any = createSelector(
  (state: GlobalState) => state.login_distributor,
  loginStates => ({ loginStates })
);

export default connect(
  selector,
  bindDispatch
)(LoginContainer);
