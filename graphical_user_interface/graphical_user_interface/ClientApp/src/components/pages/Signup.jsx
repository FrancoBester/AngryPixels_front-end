import React from 'react';
import { useState } from "react";
import { useHistory } from "react-router";
import auth from "../../signupAuth";
import Footer from '../Footer';

function Signup() {
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");
  const history = useHistory();

  function Register() {
      auth.signup({ 
                    firstname: FirstName, 
                    lastname: LastName, 
                    email: Email, 
                    password: Password, 
                    confirmpassword: ConfirmPassword 
                  }, () => {
        history.push("/home");
      });
}
  return (
    <div>
      <label>First Name</label>
      <input type="text" onChange={(e) => setFirstName(e.target.value)} />
      <label>Last Name</label>
      <input type="text" onChange={(e) => setLastName(e.target.value)} />
      <label>Email</label>
      <input type="email" onChange={(e) => setEmail(e.target.value)} />
      <label>Password</label>
      <input type="password" onChange={(e) => setPassword(e.target.value)} />
      <label>ConfirmPassword</label>
      <input type="password" onChange={(e) => setConfirmPassword(e.target.value)} />
      <button onClick={() => Register()}>SignUp</button>
    </div>


  );
}

export default Signup;
