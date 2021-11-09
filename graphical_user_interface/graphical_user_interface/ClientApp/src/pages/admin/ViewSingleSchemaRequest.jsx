import React, { useState, useEffect } from "react";
import { useLocation, Link, useHistory } from "react-router-dom";
import API from "../../API";
import './ViewSingleSchemaRequest.css';
import Footer from '../../components/Footer';


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
      <>
    <main className="viewSchemaRequest">
      <div>
        <h5>Client Name:</h5>
        <h6>{schemaRequest.userName}</h6>
      </div>

      <div>
        <h5>Client Surname:</h5>
        <h6>{schemaRequest.userSurname}</h6>
      </div>

      <div>
        <h5>Policy Type:</h5>
        <h6>{schemaRequest.policyType}</h6>
      </div>

      <div>
        <h5>Status:</h5>
        <h6>{schemaRequest.requestStatus}</h6>
      </div>
    </main>

    <button className="btnAcceptSchema">Accept</button>

      <button className="btnRejectSchema">Reject</button>

      <button
              className="btnBackSchemaPage"
              onClick={() => {
                history.push("/admin/viewSchemaRequests");
              }}
            >
              Back
      </button>

</>
    ) : (
      <>Loading...</>
    )}

  </div>
  <Footer/>
  </>
 );
}

export default ViewSingleSchemaRequest;
/*
        
*/