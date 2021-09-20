import React from 'react';
import './Client.css';

function Client(){
    return(
    <div>
        <body>
        <h1 className="dashboardHeading">Client Dashboard</h1>

            <div className="grid-container">
                <button onClick="">New Application</button>
                <button onClick="">View Info</button>
                <button onClick="">Upload Documents</button>
                <button onClick="">My Profile</button>
                <button onClick="">Policy Details</button>
                <button onClick="">Logout</button>
            </div>
        </body>
    </div>

    );

}

export default Client;
