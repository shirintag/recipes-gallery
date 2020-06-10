import React from "react";
import "./login.css";

const Login = (props) => {
  return (
    <form className="login-form" onSubmit={props.login}>
      <input
        className="login-input"
        id="email"
        type="text"
        name="email"
        placeholder="Email"
      />
      <input
        className="login-input"
        id="password"
        type="password"
        name="password"
        placeholder="Password"
      />
      <input className="login-button" type="submit" value="login" />
    </form>
  );
};

export default Login;
