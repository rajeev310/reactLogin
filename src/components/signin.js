import React, {useContext} from 'react';
import { AccountContext } from "../contexts/accountContext";
import { EmailOutlined, LockOutlined, CheckOutlined } from '@material-ui/icons';

const SignIn = () => {
    const { setLoggedIn, loggedIn } = useContext(AccountContext);
    const getLoginClass = loggedIn === 'active' ? 'logged-in' : '';
    return (
        <div class="card">
            <div class="signin-header">
                <h2 class="logo">Ocula</h2>
                <h1 class="title">Log In to Ocula</h1>
            </div>
            <form>
            <div class="input-container">
                <label for="email">E-mail</label>
                <input type="email" id="email"/>
                <EmailOutlined className="input-icon"/>                     
            </div>
            <div class="input-container">
                <label for="password">Password</label>
                <input type="password" id="password"/>
                <LockOutlined className="input-icon"/>
            </div>
            <div class="button-container">
                <button className={getLoginClass} type="button" onClick={() => setLoggedIn('active')}>
                    {loggedIn === 'inactive' && <span>SIGN IN</span>}
                    {loggedIn === 'active' && <CheckOutlined className="logged-in-icon" />}
                </button>
            </div>
            <div class="footer"><a href="#">Forgot your password?</a></div>
            </form>
        </div>
    );
};

export default SignIn;