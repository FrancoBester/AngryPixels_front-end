import React, { useState, useEffect } from "react";
import "./ViewPolicyDetails.css";
import Footer from "../../components/Footer";
import { useLocation, Link, useHistory } from "react-router-dom";
import API from "../../API";

function ViewPolicyDetails() {
  const history = useHistory();
  const search = useLocation().search;

  const [policy, setPolicy] = useState({});
  const [hasLoaded, setHasLoaded] = useState(false);
  const [policyId, setPolicyId] = useState(0);

  useEffect(() => {
    const id = new URLSearchParams(search).get("id");
    setPolicyId(id);
    var onSuccess = (e) => {
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
      <div className="gridViewPolicyDetails">
        <div className="headerViewPolDet">
          <header>View Policy Details</header>
        </div>

        {hasLoaded ? (
          <>
            <main className="mainViewPolDetails">
              <ul>
                <li>
                  <h5>Holder:</h5>
                  <h6>{policy.policy_Holder}</h6>
                </li>
                <br />
                <li>
                  <h5>Policy Type:</h5>
                  <h6>{policy.policy_Type}</h6>
                </li>
                <br />
                <li>
                  <h5>Admision type:</h5>
                  <h6>{policy.adms_Type}</h6>
                </li>
                <br />
                <li>
                  <h5>Description:</h5>
                  <h6>{policy.policy_Des}</h6>
                </li>
                <br />
                <li>
                  <h5>Benefits:</h5>
                  <h6>{policy.policy_Benefits}</h6>
                </li>
              </ul>
            </main>

            <div className="buttonsViewPol">
              <button
                className="btnBackAdminPage"
                onClick={() => {
                  history.goBack();
                }}
              >
                Back
              </button>
            </div>
          </>
        ) : (
          <>Loading...</>
        )}
      </div>
      <Footer />
    </>
  );
}

export default ViewPolicyDetails;
