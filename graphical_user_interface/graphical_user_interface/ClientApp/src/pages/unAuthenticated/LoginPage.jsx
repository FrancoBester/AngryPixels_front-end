import React from "react";
import { useState } from "react";
import { useHistory } from "react-router";
import auth from "../../auth";

function LoginPage() {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const history = useHistory();
  function Login() {
    auth.login({ Email: Email, password: Password }, () => {
      history.push("/home");
    });
  }
  return (
    <div>
      <label>Username</label>
      <input type="email" onChange={(e) => setEmail(e.target.value)} />
      <label>Password</label>
      <input type="password" onChange={(e) => setPassword(e.target.value)} />
      <button onClick={() => Login()}>Login</button>
    </div>
  );
}

export default LoginPage;
