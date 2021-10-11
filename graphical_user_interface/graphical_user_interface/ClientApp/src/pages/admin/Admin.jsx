import React from 'react';
import './Admin.css';
//import { useHistory } from "react-router";

function Admin(){
    return(
    <div>
        <body>
        <h1>Admin Dashboard</h1>

            <div className="grid-container">
                <button className="btnAdmin">Create New User</button>
                <button className="btnAdmin">View Client Info</button>
                <button className="btnAdmin">View Applications</button>
                <button className="btnAdmin">View Certificates</button>
                <button className="btnAdmin">Upload Documentation</button>
                <button className="btnAdmin">Logout</button>
            </div>
        </body>
    </div>

    );

}

export default Admin;
