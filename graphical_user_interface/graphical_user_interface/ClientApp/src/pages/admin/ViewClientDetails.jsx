import React, { useState, useEffect } from "react";
import "./ViewClientDetails.css";
import API from "../../API";
import { useLocation, Link, useHistory } from "react-router-dom";
import Footer from "../../components/Footer";

function ViewClientDetails() {
  const history = useHistory();
  const search = useLocation().search;

  const [clientDetails, setClientDetails] = useState({});
  const [hasLoaded, setHasLoaded] = useState(false);
  const [updated, setUpdated] = useState(1);
  const [clientDetailsId, setClientDetailsId] = useState(0);

  function HandleProfile(e) {
    setClientDetails(e);
  }

  useEffect(() => {
    //var id = parseInt(localStorage.getItem("id"));
    var id = parseInt(window.sessionStorage.getItem("id"));
    var onSuccess = (e) => {
      HandleProfile(e.data);

      setHasLoaded(true);
    };

    API.APIGET(
      "Users/GetUserDetails/" + id,
      onSuccess,
      () => {},
      () => {
        alert("Information Loaded");
      }
    );

    return () => {};
  }, [updated]);

  return (
    <>
      <div className="gridViewClientDetails">
        <div className="clientDetailsHeader">
          <header>Client Details</header>
        </div>

        {hasLoaded ? (
          <>
            <main className="viewClientDetailsMain">
              
                <div>
                  <label>Client Name:</label>
                  {clientDetails.user_Name}
                </div>
                <div>
                  <label>Client Surname:</label>
                  {clientDetails.user_Surname}
                </div>
                <div>
                  <label>ID Number:</label>
                  {clientDetails.user_ID_Number}
                </div>
                <div>
                  <label>Email:</label>
                  {clientDetails.user_Email}
                </div>
                <div>
                  <label>Cellphone:</label>
                  {clientDetails.user_Cell}
                </div>
                <div>
                  <label>Date of Birth:</label>
                  {clientDetails.user_Dob}
                </div>
                <div>
                  <label>Gender:</label>
                  {clientDetails.user_Gender}
                </div>
                <div>
                  <label>Street:</label>
                  {clientDetails.street}
                </div>
                <div>
                  <label>City:</label>
                  {clientDetails.city}
                </div>
                <div>
                  <label>Postal Code:</label>
                  {clientDetails.postal_Code}
                </div>
              
            

            <div className="buttonViewClient">
              <button
                className="btnBackClientQuery"
                onClick={() => {
                  history.push("/ViewQueries");
                }}
              >
                Back
              </button>
            </div>

            </main>
          </>
        ) : (
          <h3>Loading...</h3>
        )}
      </div>

      <Footer />
    </>
  );
}

export default ViewClientDetails;
//api/Users/GetUserDetails/
/**
 role_Name
 user_Name
 user_Surname
 user_ID_Number
 user_Email
 user_Cell
 user_Dob
 user_Gender
 street
 city
 postal_Code
 policy_Id
 */
