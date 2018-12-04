import * as React from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { GlobalState } from '../../../model';
import { bindActionCreators } from 'redux';
import * as registerActions from './actions';
import * as _ from 'lodash';
import Register from '../component';

class RegisterContainer extends React.Component {
  render() {
    let { actions, registerStates }: any = this.props;
    
    return (
      <Register
        onRegister={actions.onRegister}
        form={registerStates.form}
        onChange={actions.onChange}
        errors={registerStates.errors}
        onBackToLogin={actions.onBackToLogin}
        onOuterChange={actions.onOuterChange}
        isPassword={registerStates.isPassword}
        isConfirmPassword={registerStates.isConfirmPassword}
      />
    );
  }
}

const bindDispatch = _.memoize(dispatch => ({
  dispatch,
  actions: bindActionCreators<any, any>(registerActions, dispatch)
}));

const selector: any = createSelector(
  (state: GlobalState) => state.register_distributor,
  registerStates => ({ registerStates })
);

export default connect(
  selector,
  bindDispatch
)(RegisterContainer);
