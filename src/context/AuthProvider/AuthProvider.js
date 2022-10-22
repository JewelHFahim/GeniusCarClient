import React from 'react';
import { createContext } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'
import app from '../../firebase/firebase.config';
import { useState } from 'react';
import { useEffect } from 'react';


export const AuthContext = createContext(app)

const auth = getAuth()

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


    const providerLogin = (provider) =>{
        setLoading(true);
        return signInWithPopup(auth, provider);
    }

    const logIn = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const createUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const updateProfileDetails = (profile) =>{
        return updateProfile(auth.currentUser, profile )
    }

    const verifyEmail = () =>{
        return sendEmailVerification(auth.currentUser);
    }

    const logOut = () =>{
        setLoading(true);
        return signOut(auth);
    }

    const authInfo = {user, setLoading, verifyEmail, updateProfileDetails,  loading, providerLogin, logIn, logOut, createUser}

    useEffect( ()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser) =>{
            console.log('change state', currentUser);
            setUser(currentUser);
            setLoading(false)
        })
        return ()=>{
            unsubscribe();
        }
    },[])

    return (
        <AuthContext.Provider value= {authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;