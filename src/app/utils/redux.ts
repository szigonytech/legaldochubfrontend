import * as _ from 'lodash';
import * as actions from 'src/reducers';
import { bindActionCreators } from 'redux';
export const bindDispatch = _.memoize(dispatch => ({ dispatch, actions: bindActionCreators(actions, dispatch) }));