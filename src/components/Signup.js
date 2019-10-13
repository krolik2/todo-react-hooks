import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { Redirect } from 'react-router-dom';

const Signup = () => {
  const { isAuthenticated, toggleAuth } = useContext(AuthContext);

  return isAuthenticated ? <Redirect to='/'/> :(
    <>
      <h2>Sign up</h2>
      <form>
        <input type="text" placeholder="email" />
        <input type="password" placeholder="password" />
        <input type="submit" value="login" />
      </form>
      <button onClick={()=> toggleAuth()}>logmebaby</button>
    </>
  );
};

export default Signup;