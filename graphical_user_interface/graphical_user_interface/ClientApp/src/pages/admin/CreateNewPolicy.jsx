import React, {useEffect, useState} from "react";
import './CreateNewPolicy.css';
import { useHistory } from "react-router";
import API from "../../API";


function CreateNewPolicy(){

    const history = useHistory();

    return(
    <>
        <div className="createNewPolicyGrid">
            <header className="newPolicyHeader">Create New Policy</header>

            <main className="">
                <div className="rowPolicyDetails">
                    <div className="policyLabel">
                        <label>Policy Holder:</label>
                    </div>
                    <div className="policyInput">
                        <input type="text" />
                    </div>
                </div>
                <div className="rowPolicyDetails">
                    <div className="policyLabel">
                        <label>Policy Type:</label>
                    </div>
                    <div className="policyInput">
                        <input type="text" />
                    </div>
                </div>
                <div className="rowPolicyDetails">
                    <div className="policyLabel">
                        <label>Description:</label>
                    </div>
                    <div className="policyInput">
                        <input type="text" />
                    </div>
                </div>
                <div className="rowPolicyDetails">
                    <div className="policyLabel">
                        <label>Policy Date:</label>
                    </div>
                    <div className="policyInput">
                        <input type="date" />
                    </div>
                </div>
                <div className="rowPolicyDetails">
                    <div className="policyLabel">
                        <label>Policy Benefits:</label>
                    </div>
                    <div className="policyInput">
                        <input type="text" />
                    </div>
                </div>
            </main>

            <div className="btnsPolicy">
                <button 
                className="btnCreatePolicy"
                
                >Create</button>
                <button 
                className="btnCancelPolicy"
                onClick={() => {
                    history.push("/Admin");
                }}
                >
                    Cancel
                </button>

            </div>

        </div>
    </>
)

}

export default CreateNewPolicy;
