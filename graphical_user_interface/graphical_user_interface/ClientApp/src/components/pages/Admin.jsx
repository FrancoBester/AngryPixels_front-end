import React from 'react';
import './Admin.css';

function Admin(){
    return(
    <div>
        <body>
        <h1>Admin Dashboard</h1>

            <div className="grid-container">
                <button onClick="">Create New User</button>
                <button onClick="">View Client Info</button>
                <button onClick="">View Applications</button>
                <button onClick="">View Certificates</button>
                <button onClick="">Upload Documentation</button>
                <button onClick="">Logout</button>
            </div>
        </body>
    </div>

    );

}

export default Admin;
