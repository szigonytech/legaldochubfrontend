import { formValidation, isEmpty } from '../../../app/common/methods';
import REGISTRATION_VALIDATE_SCHEMA from '../utils/validateSchema';
import { helperText } from '../utils/variables';
import { Registration } from '../../../app/client/api';
import { history } from '../../../store';
import { login } from '../../../routes';

export const REGISTER_ONCHANGE = 'REGISTER_ONCHANGE';
export const REGISTER_ONOUTERCHANGE = 'REGISTER_ONOUTERCHANGE';

export const handleChange = (name: string, value: any) => {
  return { type: REGISTER_ONCHANGE, payload: { name: name, value: value } };
};

export const onOuterChange = (name: string, value: any) => {
  return { type: REGISTER_ONOUTERCHANGE, payload: { name: name, value: value } };
};

export const onChange = (name: string, value: any) => {
    return async(dispatch: any, getState: any) => {
      dispatch(handleChange( name, value ));  
      let form = {...getState().register_distributor.form};
      if (form.password  !==  form.confirmPassword) {
          form.confirmPassword = '';
      }
      dispatch(onOuterChange('errors', formValidation(REGISTRATION_VALIDATE_SCHEMA, form, helperText)));  
    };
};

export const onRegister = () => {
  return async (dispatch: any, getState: any) => {
  try {    
      let { form, errors }: any = getState().register_distributor;
      if (isEmpty(errors)) {
        await Registration(form);
        history.push(login);
      }
    } catch (err) { 
      console.log( err );
  }
  };
};

export const onBackToLogin = () => {
  return async (dispatch: any, getState: any) => {
    history.push(login);
  };
};
