import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { Redirect } from "react-router-dom";

const Signup = () => {
  const {
    signup,
    currentUser,
    setSignupErrorMessage,
    signupErrorMessage
  } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleSignUp = e => {
    e.preventDefault();
    signup(name, email, password);
  };

  useEffect(() => {
    setSignupErrorMessage(null);
  }, [setSignupErrorMessage]);

  return currentUser ? (
    <Redirect to="/" />
  ) : (
    <>
      <h2>Sign up</h2>
      <form onSubmit={handleSignUp}>
        <div className="input__container">
          <input
            required
            className="input"
            type="text"
            value={name}
            placeholder="name"
            onChange={e => setName(e.target.value)}
          />
        </div>
        <div className="input__container">
          <input
            required
            className="input"
            type="text"
            value={email}
            autoComplete="username"
            placeholder="email"
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div className="input__container">
          <input
            required
            className="input"
            type="password"
            autoComplete="current-password"
            value={password}
            placeholder="password"
            onChange={e => setPassword(e.target.value)}
          />
          <div className="input__error">{signupErrorMessage}</div>
        </div>
        <input type="submit" value="Sign up" />
      </form>
    </>
  );
};

export default Signup;
