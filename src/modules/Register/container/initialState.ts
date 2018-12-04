import { Register } from '../../../model';

export const initialState: Register = {
  form: {
        firstname: '',
        lastname: '',
        confirmPassword: '',
        contactNo: '',
        password: '',
        email: ''
  },
  errors: {
      firstname: '',
      lastname: '',
      confirmPassword: '',
      password: '',
      email: ''
  },
  isValid: true,
  isPassword: false,
  isConfirmPassword: false
};
