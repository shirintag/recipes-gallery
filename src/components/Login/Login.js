import React, { useState } from "react";

import "./login.css";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="login-container">
      <h1 className="login-title f-title-login">Log in</h1>

      <form onSubmit={props.handleSubmit}>
        <input
          className="login-input"
          autoFocus
          value={email}
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="login-input"
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <input className="login-button" type="submit" value="login" />
      </form>
    </div>
  );
};

export default Login;
