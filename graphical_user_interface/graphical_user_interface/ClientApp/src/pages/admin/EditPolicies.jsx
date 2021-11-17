import React, { useState, useEffect } from "react";
import { useLocation, Link, useHistory } from "react-router-dom";
import API from "../../API";
import "./EditPolicies.css";
import Footer from "../../components/Footer";

function ViewSinglePolicy() {
  const history = useHistory();
  const search = useLocation().search;

  const [policy, setPolicy] = useState({});
  const [hasLoaded, setHasLoaded] = useState(false);
  const [policyId, setPolicyId] = useState(0);
  const [holder, setHolder] = useState("");
  const [type, setType] = useState("");
  const [desc, setDesc] = useState("");
  const [benefit, setBenefits] = useState("");
  const [Adms_Doctors, setAdmsDoctors] = useState("");
  const [Adms_Hospitals, setAdmsHospitals] = useState("");
  const [Adms_Type, setAdmsType] = useState("");

  function updatePolicy() {
    // console.log(policy)
    const policyObj = {
      policy_Holder: holder,
      policy_Type: type,
      policy_Des: desc,
      policy_Benefits: benefit,
      Admissions: {
        Adms_Doctors,
        Adms_Hospitals,
        Adms_Type,
      },
    };
    // console.log(policyObj)
    var e = history.goBack;
    const id = new URLSearchParams(search).get("id");
    API.APIPOST(
      "Policy/UpdatePolicyInformation/" + id,
      policyObj,
      () => {
        alert("Changes have been ");
        e();
        history.push("viewAllPolicies?pageNumber=1");
      },
      () => {},
      () => {}
    );
  }

  function handlePolicyInfo(e) {
    // console.log(e)
    setDesc(e.policy_Des);
    setType(e.policy_Type);
    setHolder(e.policy_Holder);
    setBenefits(e.policy_Benefits);
    setAdmsDoctors(e.adms_Doctors);
    setAdmsHospitals(e.adms_Hospitals);
    setAdmsType(e.adms_Type);
  }

  useEffect(() => {
    const id = new URLSearchParams(search).get("id");
    setPolicyId(id);
    var onSuccess = (e) => {
      const info = e.data[0];

      setPolicy(info);
      handlePolicyInfo(info);
      setHasLoaded(true);
    };

    API.APIGET(
      "policy/GetSpecificPolicyDetails/" + id,
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
      <div className="formSinglePolicy">
        <div className="singlePolicyHeader">
          <header>Policy Information</header>
        </div>

        {hasLoaded ? (
          <>
            <main className="viewSinglePolicy">
              <div className="rowEditPolicy">
                <div className="leftPolicy">
                  <h5>Holder:</h5>
                </div>
                <div className="rightPolicy">
                  <input
                    type="text"
                    placeholder="Policy holder"
                    onChange={(e) => setHolder(e.target.value)}
                    defaultValue={policy.policy_Holder}
                  />
                </div>
                {/* <h6>{policy.policy_Holder}</h6> */}
              </div>

              <div className="rowEditPolicy">
                <div className="leftPolicy">
                  <h5>Policy Type:</h5>
                </div>
                <div className="rightPolicy">
                  <input
                    type="text"
                    placeholder="Policy type"
                    onChange={(e) => setType(e.target.value)}
                    defaultValue={policy.policy_Type}
                  />
                </div>
              </div>

              <div className="rowEditPolicy">
                <div className="leftPolicy">
                  <h5>Description:</h5>
                </div>
                <div className="rightPolicy">
                  <input
                    type="text"
                    placeholder="Policy description"
                    onChange={(e) => setDesc(e.target.value)}
                    defaultValue={policy.policy_Des}
                  />
                </div>
              </div>

              <div className="rowEditPolicy">
                <div className="leftPolicy">
                  <h5>Benefits:</h5>
                </div>
                <div className="rightPolicy">
                  <input
                    type="text"
                    placeholder="Policy benefits"
                    onChange={(e) => setBenefits(e.target.value)}
                    defaultValue={policy.policy_Benefits}
                  />
                </div>
              </div>

              <div className="rowEditPolicy">
                <div className="leftPolicy">
                  <h5>Admission Doctor:</h5>
                </div>
                <div className="rightPolicy">
                  <input
                    type="text"
                    placeholder="Admission Doctor"
                    onChange={(e) => setAdmsDoctors(e.target.value)}
                    defaultValue={policy.adms_Doctors}
                  />
                </div>
              </div>

              <div className="rowEditPolicy">
                <div className="leftPolicy">
                  <h5>Admission Hospital:</h5>
                </div>
                <div className="rightPolicy">
                  <input
                    type="text"
                    placeholder="Afmission Hospital"
                    onChange={(e) => setAdmsHospitals(e.target.value)}
                    defaultValue={policy.adms_Hospitals}
                  />
                </div>
              </div>

              <div className="rowEditPolicy">
                <div className="leftPolicy">
                  <h5>Admission Type:</h5>
                </div>
                <div className="rightPolicy">
                  <input
                    type="text"
                    placeholder="Admission Type"
                    onChange={(e) => setAdmsType(e.target.value)}
                    defaultValue={policy.adms_Type}
                  />
                </div>
              </div>
            </main>

            <div className="buttonsEditPolicy">
              <button
                className="btnSavePolicy"
                onClick={() => {
                  updatePolicy();
                }}
              >
                Save Changes
              </button>

              <button
                className="btnBackPolicies"
                onClick={() => {
                  history.goBack();
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
      <Footer />
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
