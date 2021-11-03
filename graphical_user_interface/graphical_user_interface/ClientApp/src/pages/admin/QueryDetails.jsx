import API from "../../API";
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import "./QueryDetails.css";
import Footer from "../../components/Footer";

function QueryDetails() {
  const [hasLoaded, setHasLoaded] = useState(false);
  const [profile, setProfile] = useState({});
  const [updated, setUpdated] = useState(1);
  const history = useHistory();

  function HandleProfile(e) {
    setProfile(e);
  }

  useEffect(() => {
    //var id = parseInt(localStorage.getItem("id"));
    var id = parseInt(window.sessionStorage.getItem("id"));
    var onSuccess = (e) => {
      HandleProfile(e.data);

      setHasLoaded(true);
    };

    API.APIGET(
      "Queries/GetQueryDetails/" + id,
      onSuccess,
      () => {},
      () => {
        {
          /*alert("Information Loaded");*/
        }
      }
    );
    return () => {};
  }, [updated]);

  return (
    <>
      <div className="gridViewQueryDetails">
        <div className="queryDetailsHeader">
          <header>View Query Details</header>
        </div>

        {hasLoaded ? (
          <main className="viewQueryInfoGrid">
            <div>
              <h3>Title: </h3>
              <br />
              <label>Issues Uploading Documents</label>
            </div>

            <div>
              <h3>Details: </h3>
              <br />
              <label>
                I am having issues uploading the neccesary documents onto my
                profile. Please provide assistance if possible.
              </label>
            </div>

            <div>
              <h3>Level: </h3>
              <br />
              <label>2</label>
            </div>

            <div>
              <h3>Assistant Name: </h3>
              <br />
              <label>Job Tender</label>
            </div>

            <button
              className="btnEditQuery"
              onClick={() => {
                history.push("/EditProfileClient");
              }}
            >
              Edit Profile
            </button>

            <button
              className="btnDeleteQuery"
              onClick={() => {
                history.push("/");
              }}
            >
              Delete Profile
            </button>

            <button
              className="btnBackQueryList"
              onClick={() => {
                history.push("/Admin");
              }}
            >
              Back
            </button>
          </main>
        ) : (
          <>Loading...</>
        )}
      </div>
      <Footer />
    </>
  );
}

export default QueryDetails;
