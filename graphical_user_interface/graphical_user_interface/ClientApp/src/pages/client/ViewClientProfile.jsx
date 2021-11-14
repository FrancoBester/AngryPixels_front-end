import "./ViewClientProfile.css";
import API from "../../API";
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import Footer from "../../components/Footer";
import auth from "../../auth";

function ViewClientProfile() {
  const [hasLoaded, setHasLoaded] = useState(false);
  const [profile, setProfile] = useState({});
  const [updated, setUpdated] = useState(1);
  const history = useHistory();

  function HandleProfile(e) {
    setProfile(e);
  }

  function removeUser(){
    var id = parseInt(window.sessionStorage.getItem("id"));
    var onSuccess = () => {
      alert("Account deleted");
      auth.logout(() => {
        // setUpdated(!updated);
      });;
      history.push("/About")
    };


    API.APIGET(
      "Users/RemoveUserAccount/"+id,
      onSuccess,
      () => {},
      () => {}
    );
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
              <h5>Name:</h5>
              <h6>{profile.user.user_Name}</h6>
            </div>

            <div>
              <h5>Surname:</h5>
              <h6>{profile.user.user_Surname}</h6>
            </div>

            <div>
              <h5>Email:</h5>
              <h6>{profile.user.user_Email}</h6>
            </div>

            <div>
              <h5>Cellphone:</h5>
              <h6>{profile.user.user_Cell}</h6>
            </div>

            <div>
              <h5>Gender:</h5>
              <h6>{profile.user.user_Gender}</h6>
            </div>

            <div>
              <h5>Date of Birth:</h5>
              <h6>{profile.user.user_Dob}</h6>
            </div>

            <div>
              <h5>ID Number:</h5>
              <h6>{profile.user.user_ID_Number}</h6>
            </div>

            {/** HARD CODED -> NEED TO FIX */}

            <div>
              <h5>City:</h5>
              <h6>{profile.user.city}</h6>
            </div>

            <div>
              <h5>Street Name:</h5>
              <h6>{profile.user.street}</h6>
            </div>

            <div>
              <h5>Postal Code:</h5>
              <h6>{profile.user.postal_Code}</h6>
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
                const confirmBox = window.confirm(
                  "Do you want to delete your account?"
                )
                if (confirmBox == true)
                {
                  removeUser();
                }
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
