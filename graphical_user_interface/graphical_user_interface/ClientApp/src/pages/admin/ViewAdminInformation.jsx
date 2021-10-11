import React, { useState, useEffect } from "react";
import "./ViewAdminInformation.css";
import API from "../../API";
import { useHistory } from "react-router";


function ViewAdminInformation() {

    const [hasLoaded, setHasLoaded] = useState(false);
    const [profile, setProfile] = useState({});
    const [updated, setUpdated] = useState(1); 
    const history = useHistory();

    function HandleProfile(e){
        setProfile(e);
    }

    useEffect(() => {
        var id = parseInt(localStorage.getItem("id"));
        var onSuccess = (e) => {
            HandleProfile(e.data);

            setHasLoaded(true);
        };

        API.APIGET(
            'Users/GetUserDetails/' + id,
            onSuccess,
            () => {},
            () => {
                alert("Client Information Loaded");
            }
        );
        return () => {};
    }, [updated]);

  return (
    <>
      <div className="gridViewAdminInfo">
          <div className="gridViewAdminInfoHeader">
              <h1>View Information</h1>
          </div>

          {hasLoaded ? (
          <main className="viewClientInfo">
                <div>
                    <label>Role Name:</label>
                    {/** STILL TRYING TO GET THIS TO ACTUALLY WORK */}
                </div>
                <div>
                    <label>Name:</label>
                    
                </div>
                <div>
                    <label>Surname:</label>
                    
                </div>
                <div>
                    <label>ID Number:</label>
                    
                </div>
                <div>
                    <label>Email:</label>
                    
                </div>
                <div>
                    <label>Cellphone:</label>
                    
                </div>
                <div>
                    <label>Date of Birth:</label>
                    
                </div>
                <div>
                    <label>Gender::</label>
                    
                </div>
                <div>
                    <label>Street:</label>
                    
                </div>
                <div>
                    <label>City:</label>
                    
                </div>
                <div>
                    <label>Postal Code:</label>
                    
                </div>
                <div>
                    <label>Policy ID:</label>
                    
                </div>
                <div>
                    <label>Policy Type:</label>
                    
                </div>

                <button
                className="btnBackAdminProfile"
                onClick={() => {
                    history.push("/Admin");
                }}
                >
                    Back
                </button>
          </main>
          ) : (
            <>Loading...</>
        )}
      </div>
    </>
  );
}

export default ViewAdminInformation;
