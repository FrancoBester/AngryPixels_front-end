import React, { useState, useEffect } from "react";
import './ViewClientDetails.css';
import API from "../../API";
import { useLocation, Link, useHistory } from "react-router-dom";
import Footer from '../../components/Footer';

function ViewClientDetails() {

    const history = useHistory();
    const search = useLocation().search;

    const [clientDetails, setClientDetails] = useState({});
    const [hasLoaded, setHasLoaded] = useState(false);
    const [updated, setUpdated] = useState(1); 
    const [clientDetailsId, setClientDetailsId] = useState(0);
  
    function HandleProfile(e){
        setClientDetails(e);
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
                <ul>
                    <li>
                        <h5>Client Name:</h5>
                        <h6>{clientDetails.user_Name}</h6>
                    </li>
                    <li>
                        <h5>Client Surname:</h5>
                        <h6>{clientDetails.user_Surname}</h6>
                    </li>
                    <li>
                        <h5>ID Number:</h5>
                        <h6>{clientDetails.user_ID_Number}</h6>
                    </li>
                    <li>
                        <h5>Email:</h5>
                        <h6>{clientDetails.user_Email}</h6>
                    </li>
                    <li>
                        <h5>Cellphone:</h5>
                        <h6>{clientDetails.user_Cell}</h6>
                    </li>
                    <li>
                        <h5>Date of Birth:</h5>
                        <h6>{clientDetails.user_Dob}</h6>
                    </li>
                    <li>
                        <h5>Gender:</h5>
                        <h6>{clientDetails.user_Gender}</h6>
                    </li>
                    <li>
                        <h5>Street:</h5>
                        <h6>{clientDetails.street}</h6>
                    </li>
                    <li>
                        <h5>City:</h5>
                        <h6>{clientDetails.city}</h6>
                    </li>
                    <li>
                        <h5>Postal Code:</h5>
                        <h6>{clientDetails.postal_Code}</h6>
                    </li>
                </ul>
            </main>

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
            
            </>
            ) : (
                <h3>Loading...</h3>
              )}
        </div>

        <Footer/>
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