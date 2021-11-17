import React from "react";
import "./CreateNewQuery.css";
import { useHistory } from "react-router";
import { useState } from "react";
import API from "../../API";
import Footer from "../../components/Footer";
import POPUP from "../../components/popUp.js";

function CreateNewQuery() {
  const history = useHistory();
  const [QueryTitle, setQueryTitle] = useState("");
  const [QueryLevel, setQueryLevel] = useState(1);
  const [QueryDescription, setQueryDescription] = useState("");

  function PostNewQuery() {
    const queryObj = {
      Query_Title: QueryTitle,
      Query_Level: QueryLevel,
      Query_Detail: QueryDescription,
    };

    API.APIPOST(
      // "Queries/CreateQuery/"+localStorage.getItem("id"),
      "Queries/CreateQuery/" + window.sessionStorage.getItem("id"),
      queryObj,
      () => {
        POPUP.ShowPopUp("Query Successfully Created");
        history.goBack();
      },
      () => {},
      () => {}
    );
  }

  return (
    <>
      <div className="newQueryGrid">
        <div className="titleContainerQueries">
          <header className="createQueryHeader">Create Query</header>
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
              />{" "}
              {/*CAREL HOW DO I MAKE THE DDL WORK?*/}
            </div>
          </div>

          <div className="rowQuey">
            <div className="queryColLeft">
              <label>Level:</label>
            </div>
            <div className="queryColRight">
              <select
                onChange={(e) => setQueryLevel(e.target.value)}
                name="level"
                size="1"
              >
                <option value="1">Low Priority</option>
                <option value="2">Medium Priority</option>
                <option value="3">High Priority</option>
              </select>
            </div>
          </div>
          {/*
            <div className="rowQuey">
              <div className="queryColLeft">
                <label>Level:</label>
              </div>
              <div className="queryColRight">
                <select
                  className="priorityLevel"
                  id="priorityLevel"
                  required
                  onChange={(e) => setQueryLevel(e.target.value)}
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </div>
            </div>
*/}
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

          <button
            className="btnCreateQuery"
            onClick={() => {
              PostNewQuery();
            }}
          >
            Post
          </button>

          <button
            className="btnCancelCreateQuery"
            onClick={() => {
              history.goBack();
            }}
          >
            Cancel
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default CreateNewQuery;
