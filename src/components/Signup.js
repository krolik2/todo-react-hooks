import React, { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { Redirect } from 'react-router-dom';

const Signup = () => {
  const { signup, currentUser } = useContext(AuthContext);
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSignUp = e => {
    e.preventDefault()
    signup(email, password)
  }

  return currentUser ? <Redirect to='/'/> :(
    <>
      <h2>Sign up</h2>
      <form onSubmit={handleSignUp}>
        <input type="text" value={email} autoComplete='username' placeholder="email" onChange={(e)=>setEmail(e.target.value)}/>
        <input type="password" autoComplete='current-password' value={password} placeholder="password" onChange={(e)=>setPassword(e.target.value)}/>
        <input type="submit" value="Sign up" />
      </form>
    </>
  );
};

export default Signup;