import React, { createContext, useState, useEffect } from "react";
import { auth } from '../firebase/Config';

export const AuthContext = createContext();

const AuthContextProvider = (props) =>{
  const [currentUser, setCurrentUser] = useState(null)

  useEffect(() => {
    auth.onAuthStateChanged(setCurrentUser)
    console.log('auth hook run')
  }, [])

  async function login(email, password) {
   await auth.signInWithEmailAndPassword(email, password)
   .catch((e)=> console.log('login failed', e))
  };

  async function signup(email, password) {
    await auth.createUserWithEmailAndPassword(email, password)
    .catch((e)=> console.log('singnup failed', e))
  }

  const logout = () => {
  auth.signOut()
  };

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        login,
        logout,
        signup
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider