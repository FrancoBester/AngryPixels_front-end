import React, { useState, useEffect } from "react";
import { useLocation, Link, useHistory } from "react-router-dom";
import API from "../../API";
import './ViewSingleQuery.css';

function ViewSingleQuery() {

    const history = useHistory();
    const search = useLocation().search;

    const [query, setQuery] = useState({});
    const [hasLoaded, setHasLoaded] = useState(false);
    const [queryId, setQueryId] = useState(0);

    useEffect(() =>{
        const id = new URLSearchParams(search).get("id");
        debugger;
        setQueryId(id);
        var onSuccess = (e) => {
            debugger;
            setQuery(e.data);

            setHasLoaded(true);
        };

        API.APIGET(
            "Queries/GetQueryDetails/" + queryId,
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
        <div className="gridSingleQuery">
            
            <div className="singleQueryHeader">
                <header>Query Information</header>
            </div>

            {hasLoaded ? (
            <>
                <main className="viewSingleQuery">
                    <ul>
                        <li>
                            <h5>Title:</h5>
                            <h6>{query.query_Title}</h6>
                        </li>
                        <li>
                            <h5>Details:</h5>
                            <h6>{query.query_Detail}</h6>
                        </li>
                        <li>
                            <h5>Code:</h5>
                            <h6>{query.query_Code}</h6>
                        </li>
                        <li>
                            <h5>Level:</h5>
                            <h6>{query.query_Level}</h6>
                        </li>
                        <li>
                            <h5>Status:</h5>
                            <h6>{query.query_Status}</h6>
                        </li>
                        <li>
                            <h5>Assistant Name:</h5>
                            <h6>{query.assistant_Name}</h6>
                        </li>
                    </ul>
                </main>

                <div className="buttonBackQuery">
                    <button 
                        className="btnBackQuery"
                        onClick={() => {
                            history.push("/ViewQueries");
                        }}
                        >
                            Back
                    </button>
                </div>
            </>
            ) : (
                <h3>Loading...</h3>
              )}

        </div>
    </>
  );
}

export default ViewSingleQuery;

/*
api/Queries/GetQueryDetails/
query_Id
query_Title
query_Detail
query_Code
query_Level
query_Status
assistant_Name
*/