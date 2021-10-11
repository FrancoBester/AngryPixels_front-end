import React from 'react';
import './Client.css';
import { useHistory } from "react-router";


function Client(){

    const history = useHistory();

    return(
    <>
        <div className="grid-container-client-dashboard">
            
            <header className="clientDashHeader">Client Dashboard</header>
            
            <div className="secondHeader">
                <h2>Please select an actiion below:</h2>
            </div>

            <main className="topGrid">
                
                <button
                    className="btnViewProfileClient"
                    onClick={() => {
                        history.push("/ViewClientProfile"); //Add path here once a View Profile Page has been created
                    }}   
                >
                    View Profile
                </button>
                
                <button
                className="btnEditProfileClient"
                onClick={() => {
                    history.push("/EditProfileClient");
                }}
                >
                    Edit Profile
                </button>

                <button
                className="btnViewPoliciesClient"
                onClick={() => {
                    history.push();
                }}
                >
                    View Policies
                </button>

                <button
                className="btnNewQueryClient"
                onClick={() => {
                    history.push();
                }}
                >
                    New Query
                </button>
            </main> 
            
            <div className="userQueries">
                <label>TODO: Show users own queries here</label>
            </div>   

             
        </div>
    </>
    );
}

export default Client;
