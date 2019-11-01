import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { Redirect } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Login = () => {
  const {
    login,
    loginErrorMessage,
    setLoginErrorMessage,
    currentUser
  } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = e => {
    e.preventDefault();
    login(email, password);
  };

  useEffect(() => {
    setLoginErrorMessage(null);
  }, [setLoginErrorMessage]);

  return currentUser ? (
    <Redirect to="/" />
  ) : (
    <>
      <h2>Sign in</h2>
      <form onSubmit={handleSignIn}>
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
          <div className="input__error">{loginErrorMessage}</div>
        </div>
        <input type="submit" value="Login" />
      </form>
      <p className="notification-bar">
        Don't have an account, yet? <NavLink to="signup">Sign up</NavLink>
      </p>
    </>
  );
};

export default Login;
