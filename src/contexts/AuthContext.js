import React, { createContext, useState, useEffect } from "react";
import { auth } from "../firebase/Config";

export const AuthContext = createContext();

const AuthContextProvider = props => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged(currentUser => {
      if (currentUser) {
        setCurrentUser(currentUser);
      } else {
        setCurrentUser(null);
      }
    });
  }, []);

  const login = (email, password) => {
    auth
      .signInWithEmailAndPassword(email, password)
      .catch(e => console.log("login failed", e));
  };

  const signup = (name, email, password) => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(cred => {
        cred.user.updateProfile({
          displayName: name
        });
      })
      .catch(e => console.log("singnup failed", e));
  };

  const logout = () => {
    auth.signOut();
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
};

export default AuthContextProvider;
