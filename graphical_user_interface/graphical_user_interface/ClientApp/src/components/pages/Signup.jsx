import React from "react";
import { useState } from "react";
import { useHistory } from "react-router";
import auth from "../../auth";
import Footer from "../Footer";
import "./Signup.css";

function Signup() {
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [DateOfBirth, setDateOfBirth] = useState({});
  const [PhoneNumber, setPhoneNumber] = useState("");
  const [Gender, setGender] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");
  const history = useHistory();

  function Register() {
    //Add validation here

    auth.signup(
      {
        FirstName: FirstName,
        LastName: LastName,
        Email: Email,
        Password: Password,
        DateOfBirth: DateOfBirth,
        Number: PhoneNumber,
        Gender: Gender,
      },
      // On success
      () => {
        history.push("/home");
      },
      // On fail
      (e) => {
        alert(e);
      }
    );
  }
  return (
    <div>
      <div className="form-container">
        <div className="title_container">
          <h1>Register</h1>
          <form>
            <div className="row">
              <div className="col-25">
                <label htmlFor="fname">First Name:</label>
              </div>
              <div className="col-75">
                <input
                  type="text"
                  placeholder="First Name"
                  required
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
            </div>

            <div className="row">
              <div className="col-25">
                <label>Last Name:</label>
              </div>
              <div className="col-75">
                <input
                  type="text"
                  placeholder="Surname"
                  required
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
            </div>

            <div className="row">
              <div className="col-25">
                <label>Email:</label>
              </div>
              <div className="col-75">
                <input
                  type="email"
                  placeholder="Email"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div className="row">
              <div className="col-25">
                <label>Phone Number:</label>
              </div>
              <div className="col-75">
                <input
                  type="tel"
                  placeholder="071111111"
                  pattern="^(\+27|0)[6-8][0-9]{8}$"
                  required
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </div>
            </div>

            <div className="row">
              <div className="col-25">
                <label>Date Of Birth</label>
              </div>
              <div className="col-75">
                <input
                  required
                  type="date"
                  id="dateOfBirth"
                  name="DOB"
                  value="1990-01-01"
                  min="1930-01-01"
                  max="2018-12-31"
                  onChange={(e) => setDateOfBirth(e.target.value)}
                ></input>
              </div>
            </div>

            <div className="row">
              <div className="col-25">
                <label>Gender</label>
              </div>
              <div className="col-75">
                <input
                  required
                  onChange={(e) => setGender(e.target.value)}
                  type="radio"
                  id="Male"
                  name="Gender"
                  value="Male"
                ></input>
                <label htmlFor="Male">Male</label>
                <br />
                <input
                  required
                  onChange={(e) => setGender(e.target.value)}
                  type="radio"
                  id="Female"
                  name="Gender"
                  value="Female"
                ></input>
                <label htmlFor="Female">Female</label>
                <br />
              </div>
            </div>

            <div className="row">
              <div className="col-25">
                <label>Password:</label>
              </div>
              <div className="col-75">
                <input
                  type="password"
                  placeholder="Password"
                  required
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            <div className="row">
              <div className="col-25">
                <label>Confirm Password:</label>
              </div>
              <div className="col-75">
                <input
                  type="password"
                  placeholder="Re-enter Password"
                  required
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
            </div>
            <input className="buttonSub" type="submit" value="Register" />
            <button className="btnCancel" onClick={() => history.push("/")}>
              Cancel
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
