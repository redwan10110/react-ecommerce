import React from 'react';
import SignIn from '../../Components/SignIn/SignIn';
import SignUp from '../../Components/SignUp/SignUp';
import './Authentication.scss'
const Authentication = () => {
    return (
        <div className='authentication-container'>
            <SignIn></SignIn>
            <SignUp></SignUp>
        </div>
    );
};

export default Authentication;