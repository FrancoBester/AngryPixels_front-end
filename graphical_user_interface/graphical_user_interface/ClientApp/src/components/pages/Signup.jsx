import React from "react";
import { useState } from "react";
import { useHistory } from "react-router";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./Signup.css";
import API from "../../API";

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

  function Register() {
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
      () => {},
      () => {},
      () => {}
    );
    history.push("/login");
  }
  return (
    <div>
      <div className="form-container-signup">
        <div className="title_container">
          <h1>Register</h1>
          <form
            onSubmit={() => {
              Register();
            }}
          >
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
                <label htmlFor="id">Id number:</label>
              </div>
              <div className="col-75">
                <input
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
                <input
                  onChange={(e) => setGender(e.target.value)}
                  type="radio"
                  value="Male"
                  name="genderChoice"
                ></input>
                <label htmlFor="Male">Male</label>
                <input
                  onChange={(e) => setGender(e.target.value)}
                  type="radio"
                  value="Female"
                  name="genderChoice"
                ></input>
                <label htmlFor="Female">Female</label>
                <br />
              </div>
            </div>

            <div className="row">
              <div className="col-25">
                <label>City:</label>
              </div>
              <div className="col-75">
                <input
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
            <input className="btnSub" type="submit" value="Register" />
            <button
              className="btnCancel"
              onClick={() => {
                history.push("/");
              }}
            >
              Cancel
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
