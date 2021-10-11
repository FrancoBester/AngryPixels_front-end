import React from 'react';
import './Admin.css';
import { useHistory } from "react-router";

function Admin(){

    const history = useHistory();

    return(
    <>
        <div className="grid-container-admin">
           
            <header className="adminDashHeader">Admin Dashboard</header>

            <div className="subHeader">
                <h2>Please select an actiion below:</h2>
            </div>

            <main className="adminButtons">
            <button
                    className="btnViewQueries"
                    onClick={() => {
                        history.push("/ViewQueries"); //Add path here once a View Profile Page has been created
                    }}   
                >
                    View Queries
            </button>

            <button
                    className="btnViewMedicalSchemas"
                    onClick={() => {
                        history.push("/"); //Add path here once a View Profile Page has been created
                    }}   
                >
                    View Medical Schema Requests
            </button>

            </main>    
            <div className="searchAdmin">
                <label>Search:</label>
                <input type="text" />
            </div>

            <div className="clientInfo">
                <h2>This will be client info which includes the following:</h2>
                <label>Name</label>
                <label>Surname</label>
                <label>Role</label>
                <label>Policy Type</label>
            </div>
            <div className="tabelClientInfo">
                <table>
                    <thead>
                        <tr>
                            <th>Hello</th>
                            <th>Hello</th>
                            <th>Hello</th>
                            <th>Hello</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>World</td>
                            <td>World</td>
                            <td>World</td>
                            <td>World</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            
        </div>
    </>

    );

}

export default Admin;
