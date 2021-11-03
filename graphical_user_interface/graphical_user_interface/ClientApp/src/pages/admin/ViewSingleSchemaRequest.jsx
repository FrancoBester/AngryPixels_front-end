import React, { useState, useEffect } from "react";
import { useLocation, Link, useHistory } from "react-router-dom";
import API from "../../API";
import './ViewSingleSchemaRequest.css';


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

 return(
  <>
  <div className="gridIndividualScheme">
    <div className="viewIndSchema">
      <header>Schema Request Details</header>
    </div>

    {hasLoaded ? (
    <main className="viewSchemaRequest">
      <div>
        <h3>Client Name:</h3>
        
      </div>

      <div>
        <h3>Policy Holder:</h3>
        
      </div>

      <div>
        <h3>Policy Type:</h3>
        
      </div>

      <button className="btnAcceptSchema">Accept</button>

      <button className="btnRejectSchema">Reject</button>

      <button
              className="btnBackSchemaPage"
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

export default ViewSingleSchemaRequest;
/*User who requester info
  Policy Info
  Accept/Reject Button*/