import React, { Fragment, useContext } from 'react';
import { AccountContext } from "../contexts/accountContext";
import { EmailOutlined, LockOutlined, PersonOutlined } from '@material-ui/icons';

const SignUp = () => {
    const { switchToSignin } = useContext(AccountContext);
    return (
        <Fragment>
            <div onClick={switchToSignin} class="close"></div>
            <div class="signin-header">
                <h2 class="logo">Ocula</h2>
                <h1 class="title">Sign Up For Free, Now.</h1>
            </div>
            <form>
                <div class="input-container">
                    <label for="username">Username</label>
                    <input type="text" id="username"/>  
                    <PersonOutlined className="input-icon reverse"/>                    
                </div>
                <div class="input-container">
                    <label for="email">E-mail</label>
                    <input type="email" id="email"/>
                    <EmailOutlined className="input-icon reverse"/>                     
                </div>
                <div class="input-container">
                     <label for="password">Password</label>
                     <input type="password" id="password"/> 
                     <LockOutlined className="input-icon reverse"/>                     
                </div>
                <div class="button-container">
                    <button onClick="switchToSignin"><span>SIGN IN</span></button>
                </div>
                <div class="footer"><a href="#">Forgot your password?</a></div>
            </form>
         </Fragment> 
    );
};

export default SignUp;