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
  const [updated, setUpdated] = useState(0);

  useEffect(() => {
    const id = new URLSearchParams(search).get("id");
    setschemaRequestId(id);
    var onSuccess = (e) => {
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
  }, [updated]);

  function acceptRequest() {
    var onSuccess = (e) => {
      setUpdated(!updated);
    };

    API.APIGET(
      `SchemaRequests/AproveRequest/${schemaRequest.schemaRequest.requestId}`,
      onSuccess,
      () => {},
      () => {}
    );
  }
  function declineRequest() {
    var onSuccess = (e) => {
      setUpdated(!updated);
    };

    API.APIGET(
      `SchemaRequests/DeclineRequest/${schemaRequest.schemaRequest.requestId}`,
      onSuccess,
      () => {},
      () => {}
    );
  }

  return (
    <>
      <div className="gridIndividualScheme">
        <div className="viewIndSchema">
          <header>Schema Request Details</header>
        </div>

        {hasLoaded ? (
          <>
            <main id="singleRequest" className="viewSchemaRequest">
              <div className="policyArea" id="policyArea">
                <div>
                  <h5>Policy Information:</h5>
                  <h6>Admission type:</h6>
                  <p>{schemaRequest.policyInfo.adms_Type}</p>
                  <h6>Holder:</h6>
                  <p>{schemaRequest.policyInfo.policy_Holder}</p>
                  <h6>Type:</h6>
                  <p>{schemaRequest.policyInfo.policy_Type}</p>
                  <h6>Date:</h6>
                  <p>{schemaRequest.policyInfo.policy_Date}</p>
                  <h6>Benefits:</h6>
                  <p>{schemaRequest.policyInfo.policy_Benefits}</p>
                  <h6>Description:</h6>
                  <p>{schemaRequest.policyInfo.policy_Des}</p>
                </div>
              </div>
              <div className="userArea" id="userArea">
                <div>
                  <h5>Client Information:</h5>
                  <h6>Full Name:</h6>
                  <p>{schemaRequest.clientInformation.fullname}</p>
                  <h6>Gender:</h6>
                  <p>{schemaRequest.clientInformation.gender}</p>
                  <h6>IdNumber:</h6>
                  <p>{schemaRequest.clientInformation.idNumber}</p>
                  <h6>Cell:</h6>
                  <p>{schemaRequest.clientInformation.cell}</p>
                  <h6>DOB:</h6>
                  <p>{schemaRequest.clientInformation.dob}</p>
                </div>
              </div>
              <div className="informationArea" id="informationArea">
                <div>
                  <h5>Request Information:</h5>
                  <h6>Request status:</h6>
                  <p>{schemaRequest.schemaRequest.requestStatus}</p>
                </div>
              </div>
              <div className="buttonsArea" id="buttonsArea">
                <button
                  onClick={(q) => acceptRequest()}
                  className="btnAcceptSchema"
                >
                  Accept
                </button>

                <button
                  onClick={(q) => declineRequest()}
                  className="btnRejectSchema"
                >
                  Reject
                </button>

                <button
                  className="btnBackSchemaPage"
                  onClick={() => {
                    history.goBack();
                  }}
                >
                  Back
                </button>
              </div>
            </main>
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
