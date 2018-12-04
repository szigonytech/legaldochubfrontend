import * as actionType from './actions';
import { initialState } from './initialState';

type Action = { type: String; payload: any };

export default function rootReducer(state: any = initialState, action: Action) {
  switch (action.type) {
    case actionType.LOGIN_ONCHANGE:
      return {
        ...state,
        form: { ...state.form, [action.payload.name]: action.payload.value }
      };
    case actionType.LOGIN_ONOUTERCHANGE:
      return { ...state, [action.payload.name]: action.payload.value };
    default:
      return state;
  }
}
