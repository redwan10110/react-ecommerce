import React from 'react';

import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { auth, createUserDocumentFromAuth } from '../../Utils/Firebase/Firebase';
const Login = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    console.log(user?.user?.uid);
    if(user){
        createUserDocumentFromAuth(user?.user);
    }
    return (
        <div>
            <h1>Login Please</h1>
            <button onClick={()=> signInWithGoogle()}>Login with Google</button>
        </div>
    );
};

export default Login;