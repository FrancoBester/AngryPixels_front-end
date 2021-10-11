import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import API from "../../API";

function ViewSinglePolicy(props) {
  const search = useLocation().search;

  const [policy, setPolicy] = useState({});
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    const id = new URLSearchParams(search).get("id");

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

  return (
    <>
      {hasLoaded ? (
        <>
          <h3>Has loaded</h3>
          <h6>{policy.policy_Holder}</h6>
          <h6>{policy.policy_Type}</h6>
          <h6>{policy.policy_Holder}</h6>
          <h6>{policy.policy_Holder}</h6>
          <h6>{policy.policy_Holder}</h6>
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
