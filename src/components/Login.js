import React, { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { Redirect } from 'react-router-dom';
import { NavLink } from "react-router-dom";


const Login = () => {
  const { login, currentUser } = useContext(AuthContext);
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

 const handleSignIn = e => {
   e.preventDefault()
   login(email, password)
 }

  return currentUser ? <Redirect to='/'/> : (
    <>
      <h2>Sign in</h2>
      <form onSubmit={handleSignIn}>
        <input type="text" value={email} autoComplete='username' placeholder="email" onChange={(e)=>setEmail(e.target.value)}/>
        <input type="password" autoComplete='current-password' value={password} placeholder="password" onChange={(e)=>setPassword(e.target.value)}/>
        <input type="submit" value="Login" />
      </form>
      <p className="notification-bar">Don't have an account? <NavLink to='signup'>Sign up</NavLink></p>
    </>
  );
};

export default Login;

