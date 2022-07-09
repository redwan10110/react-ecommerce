import React, { createContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { createUserDocumentFromAuth, onAuthStateListener } from '../Utils/Firebase/Firebase';


export const UserContext = createContext({
    currentUser:null,
    setCurrentUser: ()=> null
});



export const UserProvider = ({children}) =>{
    const [currentUser, setCurrentUser] = useState(null);
    const value = {currentUser, setCurrentUser}; 


    useEffect(()=> {
        const unSubscribe = onAuthStateListener((user)=>{
            if(user){
                createUserDocumentFromAuth(user)
            }
            setCurrentUser(user);
            console.log(user);
        });

        return unSubscribe;

    },[])
    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

