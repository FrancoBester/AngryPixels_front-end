import React, { useState, useEffect } from "react";
import { useLocation, Link, useHistory } from "react-router-dom";
import API from "../../API";
import './EditPolicies.css';

function ViewSinglePolicy() {
  const history = useHistory();
  const search = useLocation().search;

  const [policy, setPolicy] = useState({});
  const [hasLoaded, setHasLoaded] = useState(false);
  const [policyId, setPolicyId] = useState(0);
  const [holder, setHolder] = useState("")
  const [type, setType] = useState("")
  const [desc, setDesc] = useState("")
  const [benefit, setBenefits] = useState("")


  function updatePolicy(){
    console.log(policy)
    alert("break")
    const policyObj = 
    {
      policy_Holder : holder,
      policy_Type : type,
      policy_Des : desc,
      policy_Benefits : benefit,
    }
    console.log(policyObj)
    var e = history.goBack;
    const id = new URLSearchParams(search).get("id");
    API.APIPOST(
      "Policy/UpdatePolicyInformation/" + id,
      policyObj,
      () => {
        alert("Changes have been ")
        debugger;
        e();
        history.push("viewAllPolicies");
      },
      () => {},
      () => {}
    );
  }

  function handlePolicyInfo(e){
    console.log(e)
    setDesc(e.policy_Des);
    setType(e.policy_Type)
    setHolder(e.policy_Holder)
    setBenefits(e.policy_Benefits)
  }

  useEffect(() => {
    const id = new URLSearchParams(search).get("id");
    debugger;
    setPolicyId(id);
    var onSuccess = (e) => {
      debugger;
      setPolicy(e.data);
      handlePolicyInfo(e.data)
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
    <div className="gridSinglePolicy">

      <div className="singlePolicyHeader">
        <header>Policy Information</header>
      </div>

      {hasLoaded ? (
        <>
          <main className="viewSinglePolicy">
            <ul>
              <li>
              <h5>Holder:</h5>
              <input
                type="text"
                placeholder="Policy holder"
                onChange={(e) => setHolder(e.target.value)}
                defaultValue={policy.policy_Holder}
              />
              {/* <h6>{policy.policy_Holder}</h6> */}
              </li>
              <br />
              <li>
              <h5>Policy Type:</h5>
              <input
                type="text"
                placeholder="Policy type"
                onChange={(e) => setType(e.target.value)}
                defaultValue={policy.policy_Type}
              />
              </li>
              <br />
              <li>
              <h5>Admision type:</h5>
              <input
                type="text"
                placeholder="Admision type"
                // onChange={(e) => setAdmision(e.target.value)}
                defaultValue={policy.adms_Type}
              />
              </li>
              <br />
              <li>
              <h5>Description:</h5>
              <input
                type="text"
                placeholder="Policy description"
                onChange={(e) => setDesc(e.target.value)}
                defaultValue={policy.policy_Des}
              />
              </li>
              <br />
              <li>
              <h5>Benefits:</h5>
              <input
                type="text"
                placeholder="Policy benefits"
                onChange={(e) => setBenefits(e.target.value)}
                defaultValue={policy.policy_Benefits}
              />
              </li>

          </ul>
          </main>
          
          <div className="buttonRequest">
            <button className="btnRequestPolicy" onClick={() => {
              updatePolicy();
            }}>Save Changes</button>


            <button className="btnBackPolicies" 
                  onClick={() => {
                  history.push("/ViewAllPolicies");
              }}>Back</button>

          </div>
          
        </>
        
      ) : (
        <h3>Loading...</h3>
      )}
      </div>
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
