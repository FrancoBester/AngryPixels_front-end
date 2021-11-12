import "./ViewClientProfile.css";
import API from "../../API";
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import Footer from "../../components/Footer";

function ViewClientProfile() {
  const [hasLoaded, setHasLoaded] = useState(false);
  const [profile, setProfile] = useState({});
  const [updated, setUpdated] = useState(1);
  const history = useHistory();

  function HandleProfile(e) {
    setProfile(e);
  }

  useEffect(() => {
    //var id = parseInt(localStorage.getItem("id"));
    var id = parseInt(window.sessionStorage.getItem("id"));
    var onSuccess = (e) => {
      HandleProfile(e.data);

      setHasLoaded(true);
    };

    API.APIGET(
      "Users/GetProfileInformation/" + id,
      onSuccess,
      () => {},
      () => {
        {
          /*alert("Information Loaded");*/
        }
      }
    );
    return () => {};
  }, [updated]);

  return (
    <>
      <div className="grid-viewInfo-wrapper">
        <div className="ViewClientInfoGrid">
          <h1>View Information</h1>
        </div>

        {hasLoaded ? (
          <main className="viewInfoGrid">
            <div>
              <label>Name:</label>
              {profile.user.user_Name}
            </div>

            <div>
              <label>Surname:</label>
              {profile.user.user_Surname}
            </div>

            <div>
              <label>Email:</label>
              {profile.user.user_Email}
            </div>

            <div>
              <label>Cellphone:</label>
              {profile.user.user_Cell}
            </div>

            <div>
              <label>Gender:</label>
              {profile.user.user_Gender}
            </div>

            <div>
              <label>Date of Birth:</label>
              {profile.user.user_Dob}
            </div>

            <div>
              <label>ID Number:</label>
              {profile.user.user_ID_Number}
            </div>

            {/** HARD CODED -> NEED TO FIX */}

            <div>
              <label>City:</label>
              <label>Johannesburg</label>
            </div>

            <div>
              <label>Street Name:</label>
              <label>Hazel Road</label>
            </div>

            <div>
              <label>Postal Code:</label>
              <label>2059</label>
            </div>

            <button
              className="btnEditProfileClient"
              onClick={() => {
                history.push("/EditProfileClient");
              }}
            >
              Edit Profile
            </button>


            {/** CAREL CAN YOU PLEASE GIVE SOME GUIDANCE ON DELETING THE PROFILE */}    

            <button
              className="btnDeleteClientProfile"
              onClick={() => {
                history.push("/");
              }}
            >
              Delete Profile
            </button>

            <button
              className="btnBackClientProfile"
              onClick={() => {
                history.push("/Client");
              }}
            >
              Back
            </button>
          </main>
        ) : (
          <>Loading...</>
        )}
      </div>
      <Footer />
    </>
  );
}

export default ViewClientProfile;
