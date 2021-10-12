import React, { useEffect } from "react";
import { useState } from "react";
import { useHistory } from "react-router";
import "./EditProfileClient.css";
import API from "../../API";

{
  /** THIS IS THE CLIENT EDIT PROFILE PAGE */
}

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

  function Update() {
    const userObj = {
      User_Name: FirstName,
      User_Surname: LastName,
      User_Email: Email,
      User_Cell: Cellphone,
      User_Geder: Gender,
      User_Dob: DOB,
      User_ID_Number: IdNumber,
      Address: {
        City,
        Street,
        Postal_Code,
      },
    };
    console.log(userObj);

    API.APIPOST(
      "Users/UpdateUserInformation/1",
      userObj,
      () => {},
      () => {},
      () => {}
    );
  }

  function HandleUserInfo(e) {
    setUserInfo(e);
    setCity(e.city);
    setDOB(e.User_Dob);
    setEmail(e.user_Email);
    setFirstName(e.user_Name);
    setLastName(e.user_Surname);
    setPostalCode(e.postal_Code);
    setStreet(e.street);
    setIdNumber(e.user_ID_Number);
    setGender(e.user_Gender);
    setCellphone(e.user_Cell);
    // console.log(e)
  }

  useEffect(() => {
    var onSuccess = (e) => {
      HandleUserInfo(e.data);
    };
    API.APIGET(
      "Users/GetUserDetails/" + localStorage.getItem("id"),
      onSuccess,
      () => {},
      () => {}
    );

    return () => {};
  }, [updated]);

  return (
    <>
      <div className="EditClientProf">
        <div className="edit-title-container">
          <header>Edit Profile</header>
          <form
            onSubmit={() => {
              Update();
            }}
          >
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
                <input
                  type="radio"
                  value="Male"
                  name="genderChoice"
                  onChange={(e) => setGender(e.target.value)}
                  // value = {user_info.user_Gender}
                />
                <label for="Male">Male</label>
                <input
                  type="radio"
                  value="Female"
                  name="genderChoice"
                  onChange={(e) => setGender(e.target.value)}
                />
                <label for="Female">Female</label>
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
                  onChange={(e) => setDOB(e.target.value)}
                  // defaultValue = {user_info.user_Dob}
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

            <input
              className="btnUpdateClient"
              type="submit"
              value="Update"
              onClick={() => {
                Update();
              }}
            />
            <button
              className="btnCancelUpdate"
              onClick={() => {
                history.push("/Client");
              }}
            >
              Cancel
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default EditProfileClient;
