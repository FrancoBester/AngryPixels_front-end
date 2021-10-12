import React, { useState, useEffect } from "react";
import { useLocation, Link, useHistory } from "react-router-dom";
import API from "../../API";

function ViewSinglePolicy(props) {
  const history = useHistory();
  const search = useLocation().search;

  const [policy, setPolicy] = useState({});
  const [hasLoaded, setHasLoaded] = useState(false);
  const [policyId, setPolicyId] = useState(0);

  useEffect(() => {
    const id = new URLSearchParams(search).get("id");
    debugger;
    setPolicyId(id);
    var onSuccess = (e) => {
      debugger;
      setPolicy(e.data);

      setHasLoaded(true);
    };

    API.APIGET(
      "Users/GetPolicyDetails/" + id,
      onSuccess,
      () => {
        alert("Error");
      },
      () => {}
    );

    return () => {};
  }, []);

  function RequestPolicy() {
    var onSuccess = (e) => {
      alert("Request Succesfull");
      history.goBack();
    };

    API.APIPOST(
      "SchemaRequests/RequestToJoinSchema/" + policyId,
      {},
      onSuccess,
      () => {
        alert("Error");
      },
      () => {}
    );
  }

  return (
    <>
      {hasLoaded ? (
        <>
          <h3>Has loaded</h3>
          <h5>Holder</h5>
          <h6>{policy.policy_Holder}</h6>
          <h5>Policy Type</h5>
          <h6>{policy.policy_Type}</h6>
          <h5>Admision type</h5>
          <h6>{policy.adms_Type}</h6>
          <h5>Description</h5>
          <h6>{policy.policy_Des}</h6>
          <h5>Benifits</h5>
          <h6>{policy.policy_Benefits}</h6>

          <button onClick={RequestPolicy}>Request this Policy</button>
        </>
      ) : (
        <h3>Loading...</h3>
      )}
    </>
  );
}

export default ViewSinglePolicy;

// public string Policy_Holder { get; set; }
// public string Policy_Type { get; set; }
// public string Policy_Des { get; set; }
// public string Policy_Date { get; set; }
// public string Policy_Benefits { get; set; }
// public int Adms_Id { get; set; }
// public string Adms_Type { get; set; }
