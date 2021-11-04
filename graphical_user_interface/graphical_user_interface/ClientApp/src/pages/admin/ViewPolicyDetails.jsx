import React, { useState, useEffect } from "react";
import "./ViewPolicyDetails.css";
import Footer from '../../components/Footer';
import { useLocation, Link, useHistory } from "react-router-dom";
import API from "../../API";

function ViewPolicyDetails() {
    const history = useHistory();
    const [profile, setProfile] = useState({});
    const [hasLoaded, setHasLoaded] = useState(false);
    const [updated, setUpdated] = useState(1);
    const [policyHolder, setPolicyHolder] = useState({});
    const [policyType, setPolicyType] = useState({});
    const [policyDescription, setPolicyDescription] = useState({});
    const [policyDate, setPolicyDate] = useState({});
    const [polucyBenefits, setPolucyBenefits] = useState({});

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
            "Users/GetPolicyDetails/" + id,
            onSuccess,
            () => {},
            () => {
              {
                alert("Information Loaded");
              }
            }
          );
          return () => {};
        }, [updated]);

  return (
      <>
    <div className="gridViewPolicyDetails">
      <div className="headerViewPolDet">
        <header>View Policy Details</header>
      </div>

      {hasLoaded ? (
      <main className="mainViewPolDetails">
        <div>
            <label>Holder:</label>
            
        </div>
        <div>
            <label>Type:</label>
            <label></label>
        </div>
        <div>
            <label>Description:</label>
            <label></label>
        </div>
        <div>
            <label>Date:</label>
            <label></label>
        </div>
        <div>
            <label>Benefits:</label>
            <label></label>
        </div>  

        <button
              className="btnBackAdminPage"
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
    <Footer/>
    </>
  );
}

export default ViewPolicyDetails;
