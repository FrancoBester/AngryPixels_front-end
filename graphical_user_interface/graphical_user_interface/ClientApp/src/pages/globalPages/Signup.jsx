import React from "react";
import { useState } from "react";
import { useHistory } from "react-router";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./Signup.css";
import API from "../../API";
import Footer from "../../components/Footer";
import POPUP from "../../components/popUp.js";

function Signup() {
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [DateOfBirth, setDateOfBirth] = useState(new Date());
  const [PhoneNumber, setPhoneNumber] = useState("");
  const [Gender, setGender] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");
  const [City, setCity] = useState("");
  const [Street, setStreet] = useState("");
  const [HouseNumber, setHouseNumber] = useState(0);
  const history = useHistory();
  const [CountryId, setCountryId] = useState("");

  function GeneratePopUp(message) {
    return (
      <div id="error-popup">
        <h1>
          <strong>{message}</strong> is required.
        </h1>
      </div>
    );
  }

  function Validation() {
    if (!FirstName) {
      POPUP.ShowPopUp(GeneratePopUp("FirstName"));
      return false;
    }
    if (!LastName) {
      POPUP.ShowPopUp(GeneratePopUp("LastName"));
      return false;
    }
    if (!Email) {
      POPUP.ShowPopUp(GeneratePopUp("Email"));
      return false;
    }
    if (!Password) {
      POPUP.ShowPopUp(GeneratePopUp("Password"));
      return false;
    }
    if (!DateOfBirth) {
      POPUP.ShowPopUp(GeneratePopUp("DateOfBirth"));
      return false;
    }
    if (!PhoneNumber) {
      POPUP.ShowPopUp(GeneratePopUp("PhoneNumber"));
      return false;
    }
    if (!Gender) {
      POPUP.ShowPopUp(GeneratePopUp("Gender"));
      return false;
    }
    if (!ConfirmPassword) {
      POPUP.ShowPopUp(GeneratePopUp("ConfirmPassword"));
      return false;
    }
    if (!City) {
      POPUP.ShowPopUp(GeneratePopUp("QuCityack"));
      return false;
    }
    if (!Street) {
      POPUP.ShowPopUp(GeneratePopUp("Street"));
      return false;
    }
    if (!HouseNumber) {
      POPUP.ShowPopUp(GeneratePopUp("HouseNumber"));
      return false;
    }

    if (!validateEmail(Email)) {
      POPUP.ShowPopUp(GeneratePopUp("Valid Email"));
      return false;
    }
  }

  function validateEmail(email) {
    alert("validate");
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  function Register() {
    if (!Validation()) {
      return;
    }
    //Add validation here
    const userObj = {
      FirstName: FirstName,
      LastName: LastName,
      Email: Email,
      Password: Password,
      DateOfBirth: DateOfBirth,
      CellPhoneNumber: PhoneNumber,
      Gender: Gender,
      IDnumber: CountryId,
      Address: {
        City,
        Street,
        HouseNumber,
      },
    };

    API.APIPostAnon(
      "Users/Register",
      userObj,
      () => {
        POPUP.ShowPopUp("You have succesfully created your account.");
        history.push("/login");
      },
      () => {},
      () => {}
    );
  }

  return (
    <div >
      
      <div className="form-container-signup">
        <div className="title_container">
          <h1>Register</h1>

          <div className="row">
            <div className="col-25">
              <label>First Name:</label>
            </div>
            <div className="col-75">
              <input
                className="requiredField"
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
                className="requiredField"
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
                className="requiredField"
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
                className="requiredField"
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
              <label>Date Of Birth:</label>
            </div>
            <div className="col-75">
              <DatePicker
                selected={DateOfBirth}
                onChange={(date) => setDateOfBirth(date)}
              />
            </div>
          </div>

          <div className="row">
            <div className="col-25">
              <label htmlFor="id">ID number:</label>
            </div>
            <div className="col-75">
              <input
                className="requiredField"
                type="text"
                placeholder="0000000000000"
                required
                onChange={(e) => setCountryId(e.target.value)}
              />
            </div>
          </div>

          <div className="row">
            <div className="col-25">
              <label>Gender:</label>
            </div>
            <div className="col-75">
              <label className="lblGender" for="Male">
                <input
                  onChange={(e) => setGender(e.target.value)}
                  type="radio"
                  value="Male"
                  name="genderChoice"
                  id="Male"
                ></input>
                Male
              </label>

              <label className="lblGender" for="Female">
                {" "}
                <input
                  onChange={(e) => setGender(e.target.value)}
                  type="radio"
                  value="Female"
                  name="genderChoice"
                  id="Femeale"
                ></input>
                Female
              </label>
            </div>
          </div>

          <div className="row">
            <div className="col-25">
              <label>City:</label>
            </div>
            <div className="col-75">
              <input
                className="requiredField"
                type="text"
                placeholder="City"
                required
                onChange={(e) => setCity(e.target.value)}
              />
            </div>
          </div>

          <div className="row">
            <div className="col-25">
              <label>Street Address:</label>
            </div>
            <div className="col-75">
              <input
                className="requiredField"
                type="text"
                placeholder="Street"
                required
                onChange={(e) => setStreet(e.target.value)}
              />
            </div>
          </div>

          <div className="row">
            <div className="col-25">
              <label>Address Number:</label>
            </div>
            <div className="col-75">
              <input
                className="requiredField"
                type="number"
                placeholder="Number"
                required
                onChange={(e) => setHouseNumber(e.target.value)}
              />
            </div>
          </div>

          <div className="row">
            <div className="col-25">
              <label>Password:</label>
            </div>
            <div className="col-75">
              <input
                className="requiredField"
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
                className="requiredField"
                type="password"
                placeholder="Re-enter Password"
                required
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
          </div>
          <button
            className="btnSub"
            onClick={() => {
              Register();
            }}
          >
            Register
          </button>
          <button
            className="btnCancel"
            onClick={() => {
              history.goBack();
            }}
          >
            Cancel
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Signup;
