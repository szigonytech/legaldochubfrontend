import * as React from 'react';
import { Visible } from '../../../app/assets/icons';
import '../style.scss';

class Login extends React.Component<any> {
  render() {
    let { onChange, form, onLogin, errors, onCreateAnAccount, onOuterChange, isPassword }: any = this.props;
    return (
      <div className="container-login">
      <div className="card-login">
        <form onSubmit={(e) => onLogin(e)}>
          <div className="inputContainer-login">
            <input  
                type="text" 
                onChange={(e) => onChange('email', e.target.value)}
                placeholder={'enter'} 
                value={form.email}
                disabled={false}
            />
            <label className="required-login">Email</label>
            <span className="helperText-tools">{errors.email}</span>
          </div>
          <div className="inputContainer-login">
            <input  
                type={isPassword ? 'text' : 'password'} 
                onChange={(e) => onChange('password', e.target.value)}
                placeholder={'enter'} 
                value={form.password}
                disabled={false}
            />
            <label className="required-login">Password</label>
            <div className="eye-login" >
              <span onClick={() => onOuterChange('isPassword', !isPassword)}> 
                <Visible />
                </span>
              </div>
            <span className="helperText-tools">{errors.password}</span>
          </div>
          <div className="forgetPassword-login">Forget Password?</div>
          <div className="button-login">
            <input type="submit" value="Login"  />
          </div>
        </form>
        <div className="createAccount-login" ><span onClick={() => onCreateAnAccount()}>CREATE AN ACCOUNT</span></div>
      </div>
      </div>
    );
  }
}

export default Login;
