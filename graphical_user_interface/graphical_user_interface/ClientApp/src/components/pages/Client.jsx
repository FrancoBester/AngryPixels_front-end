import React from 'react';
import './Client.css';

function Client(){
    return(
    <div>
        <body>
        <h1 className="dashboardHeading">Client Dashboard</h1>

            <div className="grid-container">
                <button className="btnClient">New Application</button>
                <button className="btnClient">View Info</button>
                <button className="btnClient">Upload Documents</button>
                <button className="btnClient">My Profile</button>
                <button className="btnClient">Policy Details</button>
                <button className="btnClient">Logout</button>
            </div>
        </body>
    </div>

    );

}

export default Client;
