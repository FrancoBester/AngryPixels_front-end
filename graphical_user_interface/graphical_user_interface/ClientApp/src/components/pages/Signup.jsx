import React from 'react';
import { useState } from "react";
import { useHistory } from "react-router";
import auth from "../../signupAuth";
import Footer from '../Footer';
import './Signup.css';


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
  <div form-wrapper>
    <div className="form-container">
      <div class="title_container">
        <h1>Register</h1>
        <form action="action_page.php">
          <div className="row">
            <div class="col-25">
              <label for="fname">First Name</label>
            </div>
            <div className="col-75">
              <input type="text" placeholder="First Name" required onChange={(e) => setFirstName(e.target.value)} />
            </div>
          </div>

        <div className="row">
          <div class="col-25">
            <label>Last Name</label>
          </div>
          <div className="col-75">
            <input type="text" placeholder="Surname" required  onChange={(e) => setLastName(e.target.value)} />
          </div>
        </div>

        <div className="row">
          <div class="col-25">    
            <label>Email</label>
          </div>
          <div className="col-75">
            <input type="email" placeholder="Email" required  onChange={(e) => setEmail(e.target.value)} />
          </div>
        </div>
          
        <div className="row">
          <div class="col-25">   
            <label>Password</label>
          </div>
          <div className="col-75">
            <input type="password" placeholder="Password" required onChange={(e) => setPassword(e.target.value)} />
          </div>
        </div>
            
        <div className="row">
          <div class="col-25">          
            <label>Confirm Password</label>
          </div>
          <div className="col-75">
            <input type="password" placeholder="Re-enter Password" required onChange={(e) => setConfirmPassword(e.target.value)} />
          </div>
        </div>
        <input className="buttonSub" type="submit" value="Register" />
        </form>
      </div>
      </div>
    </div>  
  );
}

export default Signup;
