import React, { useState, useEffect } from "react";
import { useLocation, Link, useHistory } from "react-router-dom";
import API from "../../API";
import "./ViewSingleSchemaRequest.css";
import Footer from "../../components/Footer";

function ViewSingleSchemaRequest(props) {
  const history = useHistory();
  const search = useLocation().search;

  const [schemaRequest, setschemaRequest] = useState({});
  const [hasLoaded, setHasLoaded] = useState(false);
  const [schemaRequestId, setschemaRequestId] = useState(0);

  useEffect(() => {
    const id = new URLSearchParams(search).get("id");
    debugger;
    setschemaRequestId(id);
    var onSuccess = (e) => {
      debugger;
      setschemaRequest(e.data);

      setHasLoaded(true);
    };

    API.APIGET(
      "SchemaRequests/ViewUserSchemarequest/" + id,
      onSuccess,
      () => {
        alert("Error");
      },
      () => {}
    );

    return () => {};
  }, []);

  return (
    <>
      <div className="gridIndividualScheme">
        <div className="viewIndSchema">
          <header>Schema Request Details</header>
        </div>

        {hasLoaded ? (
          <>
            <main id="singleRequest" className="viewSchemaRequest">
              <div id="policyArea">
                <div>
                  <h5>Policy Information:</h5>
                  <h6>
                    <b>Admission type:</b> {schemaRequest.policyInfo.adms_Type}
                  </h6>
                  <h6>
                    <b>Holder:</b> {schemaRequest.policyInfo.policy_Holder}
                  </h6>
                  <h6>
                    <b>Type:</b> {schemaRequest.policyInfo.policy_Type}
                  </h6>
                  <h6>
                    <b>Date:</b> {schemaRequest.policyInfo.policy_Date}
                  </h6>
                  <h6>
                    <b>Benefits:</b> {schemaRequest.policyInfo.policy_Benefits}
                  </h6>
                  <h6>
                    <b>Description:</b> {schemaRequest.policyInfo.policy_Des}
                  </h6>
                </div>
              </div>
              <div id="userArea">
                <div>
                  <h5>Client Information:</h5>
                  <h6>
                    <b>Fullname:</b> {schemaRequest.clientInformation.fullname}
                  </h6>
                  <h6>
                    <b>Gender:</b> {schemaRequest.clientInformation.gender}
                  </h6>
                  <h6>
                    <b>IdNumber:</b> {schemaRequest.clientInformation.idNumber}
                  </h6>
                  <h6>
                    <b>Cell:</b> {schemaRequest.clientInformation.cell}
                  </h6>
                  <h6>
                    <b>DOB:</b> {schemaRequest.clientInformation.dob}
                  </h6>
                </div>
              </div>
              <div id="informationArea">
                <div>
                  <h5>Request Information:</h5>
                  <h6>
                    <b>Request status: </b>
                    {schemaRequest.schemaRequest.requestStatus}
                  </h6>
                </div>
              </div>
              <div id="buttonsArea">
                <button className="btnAcceptSchema">Accept</button>

                <button className="btnRejectSchema">Reject</button>
              </div>
            </main>

            {/** CAREL CAN YOU PLEASE GIVE SOME GUIDANCE ON ACCEPTING & REJECTING THE SCHEMA REQUEST */}

            <button
              className="btnBackSchemaPage"
              onClick={() => {
                history.goBack();
              }}
            >
              Back
            </button>
          </>
        ) : (
          <>Loading...</>
        )}
      </div>
      <Footer />
    </>
  );
}

export default ViewSingleSchemaRequest;
/*
        
*/
