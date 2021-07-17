import React, {useState} from 'react';
import SignIn from './signin';
import SignUp from './signup';
import { AccountContext } from "../contexts/accountContext";
import { MenuOutlined } from '@material-ui/icons';
import '../css/signin.css'

const SignInContainer = () => {
    const [active, setActive] = useState("signin");
    const [loggedIn, setLoggedIn] = useState("inactive");

    const switchToSignup = () => {
      setActive('signup');  
    }

    const switchToSignin = () => {
        setActive('signin');  
      }

    const contextValue = { switchToSignin, setLoggedIn, loggedIn };

    const getContainerClasses = active === 'signin' ? 'container' : 'container signup';
    return (
        <AccountContext.Provider value={contextValue}>
            <div class={getContainerClasses}>
                <div class="card"></div>
                {active === 'signin' && <SignIn />}
                <div class="card signup">
                    <div onClick={switchToSignup} class="toggle">
                    {active === 'signin' && <MenuOutlined class="signup-menu-icon"/>}
                    </div>
                    {active === 'signup' && <SignUp />}
                </div>
            </div>
        </AccountContext.Provider>
    );
};

export default SignInContainer;