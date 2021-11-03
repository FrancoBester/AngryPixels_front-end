import React from "react";
import "./CreateNewQuery.css";
import { useHistory } from "react-router";
import { useState } from "react";
import API from "../../API";

function CreateNewQuery() {
  const history = useHistory();
  const [QueryTitle, setQueryTitle] = useState("");
  const [QueryLevel, setQueryLevel] = useState("");
  const [QueryDescription, setQueryDescription] = useState("");

  function PostNewQuery() {
    alert("Log query ?"); //function not triggering without this alert ?????
    const queryObj = {
      Query_Title: QueryTitle,
      Query_Level: QueryLevel,
      Query_Detail: QueryDescription,
    };

    API.APIPOST(
      // "Queries/CreateQuery/"+localStorage.getItem("id"),
      "Queries/CreateQuery/" + window.sessionStorage.getItem("id"),
      queryObj,
      () => {},
      () => {},
      () => {}
    );
    // history.push("/Client");
  }

  return (
    <>
      <div className="newQueryGrid">
        <div className="titleContainerQueries">
          <header className="createQueryHeader">Create Query</header>
          <form
            onSubmit={() => {
              PostNewQuery();
            }}
          >
            <div className="rowQuey">
              <div className="queryColLeft">
                <label>Title:</label>
              </div>
              <div className="queryColRight">
                <input
                  type="text"
                  placeholder="Title"
                  required
                  onChange={(e) => setQueryTitle(e.target.value)}
                />
              </div>
            </div>

            <div className="rowQuey">
              <div className="queryColLeft">
                <label>Level:</label>
              </div>
              <div className="queryColRight">
                <input
                  type="text"
                  placeholder="1 = Low Priority, 2 = Medium Priority, 3 = High Priority"
                  required
                  onChange={(e) => setQueryLevel(e.target.value)}
                />
              </div>
            </div>

            <div className="rowQuey">
              <div className="queryColLeft">
                <label>Description:</label>
              </div>
              <div className="queryColRight">
                <input
                  type="text"
                  placeholder="Give us more info about the issue..."
                  required
                  onChange={(e) => setQueryDescription(e.target.value)}
                />
              </div>
            </div>

            <input
              className="btnCreateQuery"
              type="submit"
              value="Post"
              onClick={() => {
                PostNewQuery();
              }}
            />

            <button
              className="btnCancelCreateQuery"
              onClick={() => {
                history.push("/Client");
              }}
            >
              Cancel
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default CreateNewQuery;
