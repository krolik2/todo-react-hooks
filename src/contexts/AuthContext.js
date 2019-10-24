import React, { createContext, useState, useEffect } from "react";
import { auth } from "../firebase/Config";

export const AuthContext = createContext();

const AuthContextProvider = props => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loginErrorMessage, setLoginErrorMessage] = useState(null);
  const [signupErrorMessage, setSignupErrorMessage] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged(currentUser => {
      if (currentUser) {
        setCurrentUser(currentUser);
        removeErorMsg();
      } else {
        setCurrentUser(null);
      }
    });
  }, []);

  const login = (email, password) => {
    auth
      .signInWithEmailAndPassword(email, password)
      .catch(e => setLoginErrorMessage(e.message));
  };

  const signup = (name, email, password) => {
    auth.createUserWithEmailAndPassword(email, password).then(cred => {
      cred.user
        .updateProfile({
          displayName: name
        })
    }).catch(e => setSignupErrorMessage(e.message))
  };

  const logout = () => {
    auth.signOut().then(() => setCurrentUser(null));
  };

  const removeErorMsg = () => {
    return (setLoginErrorMessage(null), setSignupErrorMessage(null));
  };

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        login,
        logout,
        signup,
        loginErrorMessage,
        signupErrorMessage,
        removeErorMsg
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
