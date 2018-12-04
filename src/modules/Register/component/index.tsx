import * as React from 'react';
import { Visible } from '../../../app/assets/icons';
import '../style.scss';

class Register extends React.Component<any> {
  render() {
    let { onChange, 
               form, 
               onRegister, 
               errors, 
               onBackToLogin, 
               isPassword, 
               isConfirmPassword, 
               onOuterChange }: any = this.props;
    return (
         <div className="container-register">
          <div className="card-register">
                    <div className="flex">
                         <div className="col-6 inputContainer-register">
                                   <input  
                                        type="text" 
                                        onChange={(e) => onChange('firstname', e.target.value)}
                                        placeholder={'enter'} 
                                        value={form.firstname}
                                        disabled={false}
                                   />
                                   <label className="required-register">FirstName</label>
                                   <span className="helperText-tools">{errors.firstname}</span>
                              </div>
                              <div className="col-6 inputContainer-register">
                                   <input  
                                        type="text" 
                                        onChange={(e) => onChange('lastname', e.target.value)}
                                        placeholder={'enter'} 
                                        value={form.lastname}
                                        disabled={false}
                                   />
                                   <label className="required-register">LastName</label>
                                   <span className="helperText-tools">{errors.lastname}</span>
                              </div>
                    </div>
                    <div className="inputContainer-register">
                                   <input  
                                        type="text" 
                                        onChange={(e) => onChange('email', e.target.value)}
                                        placeholder={'enter'} 
                                        value={form.email}
                                        disabled={false}
                                   />
                                   <label className="required-register">Email Id</label>
                                   <span className="helperText-tools">{errors.email}</span>
                              </div>

                              <div className="inputContainer-register">
                                   <input  
                                        type="number" 
                                        onChange={(e) => onChange('contactNo', e.target.value)}
                                        placeholder={'enter'} 
                                        value={form.contactNo}
                                        disabled={false}
                                   />
                                   <label className="">Contact No</label>
                              </div>

                              <div className="inputContainer-register">
                                   <input  
                                        type={isPassword ? 'text' : 'password'}
                                        onChange={(e) => onChange('password', e.target.value)}
                                        placeholder={'enter'} 
                                        value={form.password}
                                        disabled={false}
                                   />
                                   <label className="required-register">Password</label>
                                   <span className="helperText-tools">{errors.password}</span>
                                   <span 
                                        className="eye-login" 
                                        onClick={() => onOuterChange('isPassword', !isPassword)}
                                   > 
                                        <Visible />
                                   </span>
                              </div>
                    <div className="inputContainer-register">
                                   <input  
                                        type={isConfirmPassword ? 'text' : 'password'}
                                        onChange={(e) => onChange('confirmPassword', e.target.value)}
                                        placeholder={'enter'} 
                                        value={form.confirmPassword}
                                        disabled={false}
                                   />
                                   <label className="required-register">Confirm Password</label>
                                   <span className="helperText-tools">{errors.confirmPassword}</span>
                                   <span 
                                             className="eye-login" 
                                             onClick={() => onOuterChange('isConfirmPassword', !isConfirmPassword)}
                                   > 
                                        <Visible />
                                   </span>
                              </div>
                    <div className="button-register">
                         <input type="button" value="Register"  onClick={() => onRegister()} />
                    </div>
                    <div className="back-register" ><span onClick={() => onBackToLogin()}>BACK TO LOGIN</span></div>
          </div>
          
      </div>
    );
  }
}

export default Register;
