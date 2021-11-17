import React, { useEffect } from "react";
import { useState } from "react";
import { useHistory } from "react-router";
import "./EditProfileClient.css";
import API from "../../API";
import POPUP from "../../components/popUp.js";
import Footer from "../../components/Footer";

function EditProfileClient() {
  const [updated, setUpdated] = useState(1);
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [Email, setEmail] = useState("");
  const [Cellphone, setCellphone] = useState("");
  const [Gender, setGender] = useState("");
  const [DOB, setDOB] = useState(new Date());
  const [IdNumber, setIdNumber] = useState("");
  const [City, setCity] = useState("");
  const [Street, setStreet] = useState("");
  const [Postal_Code, setPostalCode] = useState("");
  const history = useHistory();
  const [user_info, setUserInfo] = useState({});
  const [hasLoaded, setHasLoaded] = useState(false);
  const [dateString, setDateString] = useState("");

  function Update() {
    const userObj = {
      User_Name: FirstName,
      User_Surname: LastName,
      User_Email: Email,
      User_Cell: Cellphone,
      User_Gender: Gender,
      User_Dob: DOB,
      User_ID_Number: IdNumber,
      Address: {
        City,
        Street,
        Postal_Code,
      },
    };
    var e = history.goBack;
    API.APIPOST(
      //"Users/UpdateUserInformation/" + localStorage.getItem("id"),
      "Users/UpdateUserInformation/" + window.sessionStorage.getItem("id"),
      userObj,
      () => {
        POPUP.ShowPopUp("Profile Successfully Updated");
        e();
        history.goBack();
      },
      () => {},
      () => {}
    );
  }

  function HandleUserInfo(e) {
    setUserInfo(e);
    setCity(e.city);
    setDOB(new Date(e.user_Dob));
    setEmail(e.user_Email);
    setFirstName(e.user_Name);
    setLastName(e.user_Surname);
    setPostalCode(e.postal_Code);
    setStreet(e.street);
    setIdNumber(e.user_ID_Number);
    setGender(e.user_Gender);
    setCellphone(e.user_Cell);
  }

  useEffect(() => {
    var onSuccess = (e) => {
      HandleUserInfo(e.data);
      getDateString(new Date(e.data.user_Dob));
      setHasLoaded(true);
    };
    API.APIGET(
      "Users/GetUserDetails/" + window.sessionStorage.getItem("id"),
      onSuccess,
      () => {},
      () => {}
    );

    return () => {};
  }, [updated]);

  function getDateString(dob) {
    var now = dob;

    var day = ("0" + now.getDate()).slice(-2);
    var month = ("0" + (now.getMonth() + 1)).slice(-2);

    var today = now.getFullYear() + "-" + month + "-" + day;
    console.log(today);
    setDateString(today);
  }

  if (!hasLoaded) {
    return <h1>Loading</h1>;
  } else {
    return (
      <>
        <div className="EditClientProf">
          <div className="edit-title-container">
            <header>Edit Profile</header>
            <div className="editProfRow">
              <div className="editProfileColLeft">
                <label>Name:</label>
              </div>
              <div className="editProfileColRight">
                <input
                  type="text"
                  placeholder="First Name"
                  onChange={(e) => setFirstName(e.target.value)}
                  defaultValue={user_info.user_Name}
                />
              </div>
            </div>
            <div className="editProfRow">
              <div className="editProfileColLeft">
                <label>Surname:</label>
              </div>
              <div className="editProfileColRight">
                <input
                  type="text"
                  placeholder="Surname"
                  onChange={(e) => setLastName(e.target.value)}
                  defaultValue={user_info.user_Surname}
                />
              </div>
            </div>

            <div className="editProfRow">
              <div className="editProfileColLeft">
                <label>Email:</label>
              </div>
              <div className="editProfileColRight">
                <input
                  type="email"
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                  defaultValue={user_info.user_Email}
                />
              </div>
            </div>

            <div className="editProfRow">
              <div className="editProfileColLeft">
                <label>Cellphone:</label>
              </div>
              <div className="editProfileColRight">
                <input
                  type="tel"
                  placeholder="Cellphone"
                  onChange={(e) => setCellphone(e.target.value)}
                  defaultValue={user_info.user_Cell}
                />
              </div>
            </div>

            <div className="editProfRow">
              <div className="editProfileColLeft">
                <label>Gender:</label>
              </div>
              <div className="editProfileColRight">
                <select
                  onChange={(e) => setGender(e.target.value)}
                  name="genderChoice"
                  size="1"
                >
                  <option
                    selected={Gender == "Male" ? true : false}
                    value="Male"
                  >
                    Male
                  </option>
                  <option
                    selected={Gender == "Female" ? true : false}
                    value="Female"
                  >
                    Female
                  </option>
                </select>
              </div>
            </div>

            <br />

            <div className="editProfRow">
              <div className="editProfileColLeft">
                <label>Date of Birth:</label>
              </div>
              <div className="editProfileColRight">
                <input
                  type="date"
                  onChange={(e) => setDOB(new Date(e.target.value))}
                  defaultValue={dateString}
                />
              </div>
            </div>

            <div className="editProfRow">
              <div className="editProfileColLeft">
                <label>ID Number:</label>
              </div>
              <div className="editProfileColRight">
                <input
                  type="text"
                  placeholder="ID Number"
                  onChange={(e) => setIdNumber(e.target.value)}
                  defaultValue={user_info.user_ID_Number}
                />
              </div>
            </div>

            <div className="editProfRow">
              <div className="editProfileColLeft">
                <label>City:</label>
              </div>
              <div className="editProfileColRight">
                <input
                  type="text"
                  placeholder="City"
                  onChange={(e) => setCity(e.target.value)}
                  defaultValue={user_info.city}
                />
              </div>
            </div>

            <div className="editProfRow">
              <div className="editProfileColLeft">
                <label>Street Name:</label>
              </div>
              <div className="editProfileColRight">
                <input
                  type="text"
                  placeholder="Street"
                  onChange={(e) => setStreet(e.target.value)}
                  defaultValue={user_info.street}
                />
              </div>
            </div>

            <div className="editProfRow">
              <div className="editProfileColLeft">
                <label>Postal Code:</label>
              </div>
              <div className="editProfileColRight">
                <input
                  type="text"
                  placeholder="Postal Code"
                  onChange={(e) => setPostalCode(e.target.value)}
                  defaultValue={user_info.postal_Code}
                />
              </div>
            </div>

            <button
              className="btnCancelUpdate"
              onClick={() => {
                Update();
              }}
            >
              Update
            </button>
            <button
              className="btnCancelUpdate"
              onClick={() => {
                history.goBack();
              }}
            >
              Cancel
            </button>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default EditProfileClient;
