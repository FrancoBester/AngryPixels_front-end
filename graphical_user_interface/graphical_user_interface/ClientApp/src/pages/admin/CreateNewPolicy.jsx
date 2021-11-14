import React, {useEffect, useState} from "react";
import './CreateNewPolicy.css';
import { useHistory } from "react-router";
import API from "../../API";
import Footer from "../../components/Footer";

function CreateNewPolicy(){

    const history = useHistory();
    const [PolicyHolder, setPolicyHolder] = useState("");
    const [PolicyType, setPolicyType] = useState("");
    const [PolicyDescription, setPolicyDescription] = useState("");
    const [PolicyDate, setPolicyDate] = useState("");
    const [PolicyBenefits, setPolicyBenefits] = useState("");
    const [AdmsDoctors, setAdmsDoctors] = useState("");
    const [AdmsHospitals, setAdmsHospitals] = useState("");
    const [AdmsType, setAdmsType] = useState("");

    function PostNewPolicy() {
        alert("Create Policy?");
        const policyObj = {
          Policy_Holder: PolicyHolder,
          Policy_Type: PolicyType,
          Policy_Des: PolicyDescription,
          Policy_Date: PolicyDate,
          Policy_Benefits: PolicyBenefits,
          Adms_Doctors: AdmsDoctors,
          Adms_Hospitals: AdmsHospitals,
          Adms_Type: AdmsType,
        };
    
        API.APIPOST(
          "Queries/CreatePolicy",
          policyObj,
          () => {
            history.goBack();
          },
          () => {},
          () => {}
        );
      }

    return(
    <>
        <div className="createNewPolicyGrid">
            <header className="newPolicyHeader">Create New Policy</header>

            <main className="mainCreatePolicy">
                <div className="rowPolicyDetails">
                    <div className="policyLabel">
                        <label>Policy Holder:</label>
                    </div>
                    <div className="policyInput">
                        <input 
                            type="text"
                            placeholder="Policy Holder"
                            required
                            onChange={(e) => setPolicyHolder(e.target.value)}
                            />
                    </div>
                </div>
                <div className="rowPolicyDetails">
                    <div className="policyLabel">
                        <label>Policy Type:</label>
                    </div>
                    <div className="policyInput">
                        <input 
                            type="text"
                            placeholder="Policy Type"
                            required
                            onChange={(e) => setPolicyType(e.target.value)}
                             />
                    </div>
                </div>
                <div className="rowPolicyDetails">
                    <div className="policyLabel">
                        <label>Description:</label>
                    </div>
                    <div className="policyInput">
                        <input 
                            type="text"
                            placeholder="Policy Description"
                            required
                            onChange={(e) => setPolicyDescription(e.target.value)}
                            />
                    </div>
                </div>
                <div className="rowPolicyDetails">
                    <div className="policyLabel">
                        <label>Policy Date:</label>
                    </div>
                    <div className="policyInput">
                        <input 
                            type="date"
                            required
                            onChange={(e) => setPolicyDate(e.target.value)}
                            />
                    </div>
                </div>
                <div className="rowPolicyDetails">
                    <div className="policyLabel">
                        <label>Policy Benefits:</label>
                    </div>
                    <div className="policyInput">
                        <input 
                            type="text"
                            placeholder="Policy Benefits"
                            required
                            onChange={(e) => setPolicyBenefits(e.target.value)} />
                    </div>
                </div>
                <h3>Admissions Information</h3>
                <div className="rowPolicyDetails">
                    <div className="policyLabel">
                        <label>Admissions Doctor:</label>
                    </div>
                    <div className="policyInput">
                        <input 
                            type="text"
                            placeholder="Admissions Doctor"
                            required
                            onChange={(e) => setAdmsDoctors(e.target.value)} />
                    </div>
                </div>
                <div className="rowPolicyDetails">
                    <div className="policyLabel">
                        <label>Admissions Hospital:</label>
                    </div>
                    <div className="policyInput">
                        <input 
                            type="text"
                            placeholder="Admissions Hospital"
                            required
                            onChange={(e) => setAdmsHospitals(e.target.value)} />
                    </div>
                </div>
                <div className="rowPolicyDetails">
                    <div className="policyLabel">
                        <label>Admissions Type:</label>
                    </div>
                    <div className="policyInput">
                        <input 
                            type="text"
                            placeholder="Admissions Type"
                            required
                            onChange={(e) => setAdmsType(e.target.value)} />
                    </div>
                </div>
            </main>

            <div className="btnsPolicy">
                <button 
                    className="btnCreatePolicy"
                    onClick={() => {
                        PostNewPolicy();
                    }}
                >Create
                </button>
                <button 
                className="btnCancelPolicy"
                onClick={() => {
                    history.goBack();
                }}
                >
                    Cancel
                </button>

            </div>

        </div>
        <Footer />
    </>
)

}

export default CreateNewPolicy;
