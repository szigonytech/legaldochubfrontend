import { formValidation, isEmpty } from '../../../app/common/methods';
import { helperText } from  '../utils/variables';
import LOGIN_VALIDATE_SCHEMA from '../utils/validateSchema';
import { loginVerification } from '../../../app/client/api';
import { history } from '../../../store';
import { register, home } from '../../../routes';
import * as Cookies from '../../../app/utils/cookie';

export const LOGIN_ONCHANGE = 'LOGIN_ONCHANGE';
export const LOGIN_ONOUTERCHANGE = 'LOGIN_ONOUTERCHANGE';

export const handleChange = (name: string, value: any) => {
  return { type: LOGIN_ONCHANGE, payload: { name: name, value: value } };
};

export const onOuterChange = (name: string, value: any) => {
  return { type: LOGIN_ONOUTERCHANGE, payload: { name: name, value: value } };
};

export const onChange = (name: string, value: any) => {
  return async(dispatch: any, getState: any) => {
    dispatch(handleChange( name, value ));  
    let form = {...getState().login_distributor.form};
    dispatch(onOuterChange('errors', formValidation(LOGIN_VALIDATE_SCHEMA, form, helperText)));  
  };
};

export const onLogin = ( event: any ) => {
  return async (dispatch: any, getState: any) => {
    try {
      event.preventDefault();
      let { form, errors }: any = getState().login_distributor;
      if (isEmpty(errors)) {
        let { data }: any = await loginVerification(form);
        Cookies.set('AUTHENTICAT_TOKEN', data.token);
        history.push( home );
      }
  } catch (err) { 
    console.log( err );
}
  };
};

export const createAnAccount = () => {
  return async(dispatch: any, getState: any) => {
    history.push( register );
  };
};