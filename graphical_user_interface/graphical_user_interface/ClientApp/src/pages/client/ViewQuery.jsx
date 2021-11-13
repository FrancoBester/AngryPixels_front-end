import React, { useState, useEffect } from "react";
import { useLocation, Link, useHistory } from "react-router-dom";
import API from "../../API";

function ViewQuery() {
  const history = useHistory();
  const search = useLocation().search;

  const [query, setQuery] = useState({});
  const [hasLoaded, setHasLoaded] = useState(false);
  const [updated, setUpdated] = useState(1);
  const [queryId, setQueryId] = useState(0);

  function HandleProfile(e) {
    setQuery(e);
  }

  useEffect(() => {
    //var id = parseInt(localStorage.getItem("id"));
    const id = new URLSearchParams(search).get("id");
    var onSuccess = (e) => {
      setHasLoaded(true);
      console.log(e.data);
      HandleProfile(e.data[0]);
    };

    API.APIGET(
      "Queries/GetQueryDetails/" + id,
      onSuccess,
      () => {},
      () => {
        // alert(id);
      }
    );

    return () => {};
  }, [updated]);

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
                  history.push("/Client");
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

export default ViewQuery;
