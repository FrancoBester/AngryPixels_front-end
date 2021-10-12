import React from 'react';
import './CreateNewQuery.css';
import { useHistory } from "react-router";


function CreateNewQuery() {

    const history = useHistory();

    return (
        <>
        <div className="newQueryGrid">
            <header className="createQueryHeader">Create New Query</header>
            <div className="logQueryHeader">
                <h2>To log a query, please provide us with the following information:</h2>
            </div>
            <main className="createQueryMain">

                <div className="rowQuey">
                    <div className="queryColLeft">
                        <label>Title:</label>
                    </div>
                    <div className="queryColRight">
                        <input type="text" name="" id="" />
                    </div>
                </div>

                <div className="rowQuey">
                    <div className="queryColLeft">
                        <label>Level:</label>
                    </div>
                    <div className="queryColRight">
                        <input type="text" placeholder="1 - Least Urgent, 3 - Very Urgent"/>
                    </div>
                </div>


                <div className="rowQuey">
                    <div className="queryColLeft">
                        <label>Description:</label>
                    </div>
                    <div className="queryColRight">
                        <input type="text" name="" id="" />
                    </div>
                </div>

                <button
                    className="btnCreateQuery"
                    onClick={() => {
                        history.push();
                    }}
                >
                    Create
                </button>

                <button
                    className="btnCancelCreateQuery"
                    onClick={() => {
                        history.push("/Client");
                    }}
                >
                    Cancel
                </button>
            </main>

        </div>
        </>
    )
}

export default CreateNewQuery
