import React from "react";
import { useState } from "react";
import { useHistory } from "react-router";
import auth from "../../auth";
import './LoginPage.css';
import Footer from '../../components/Footer';


function LoginPage() {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const history = useHistory();
  function Login() {
    auth.login({ Email: Email, password: Password }, () => {
      history.push("/");
    });
  }
  return (
    <div>
      <div className="gridLoginForm">
        <div className="loginHeader">
          <h1>Login</h1>
        
        {/*<form>*/}
          <div className="loginRow">
            <div className="colLeft">
              <label>Username:</label>
            </div>
            <div className="colRight">
              <input 
                type="email"
                placeholder="email" 
                onChange={(e) => setEmail(e.target.value)} 
              />
            </div>
          </div>

          <div className="loginRow">
            <div className="colLeft">
              <label>Password:</label>
            </div>
            <div className="colRight">
              <input 
                type="password" 
                placeholder="password"               
                onChange={(e) => setPassword(e.target.value)} 
              />
            </div>
          </div> 
          
          <button className="btnLogin" onClick={() => Login()}>Login</button>
        {/*</form>*/}
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default LoginPage;
