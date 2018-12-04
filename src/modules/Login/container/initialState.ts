import { Login } from '../../../model';

export const initialState: Login = {
  form: {
    email: '',
    password: ''
  },
  errors: {
    email: '',
    password: ''
  },
  isValid: true,
  isPassword: false
};
