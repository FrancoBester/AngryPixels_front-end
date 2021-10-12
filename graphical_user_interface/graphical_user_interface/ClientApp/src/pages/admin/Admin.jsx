import React from "react";
import "./Admin.css";
import { useHistory } from "react-router";

function Admin() {
  const history = useHistory();

  return (
    <>
      <div className="grid-container-admin-dashboard">
        <header className="adminDashHeader">Admin Dashboard</header>

        <div className="subHeader">
          <h2>Please select an action below</h2>
        </div>

        <main className="mainGridAdminDash">
          <button
            className="btnViewQueries"
            onClick={() => {
              history.push("/ViewQueries");
            }}
          >
            View Queries
          </button>

          <button
            className="btnViewMedicalSchema"
            onClick={() => {
              history.push("");
            }}
          >
            View Medical Schema
          </button>
        </main>

        <div className="searchAdminDash">
          <label>Search:</label>
          <input type="text" />
        </div>
        <div className="tblAdminDashSearch">
          <table>table</table>
        </div>
        <div className="headerEmpClient">
          <header>Employee and Client Information</header>
        </div>
        <div className="tblEmpClientInfo">
          <table></table>
        </div>
        <button
          className="btnViewMedicalSchema"
          onClick={() => {
            history.push("/admin/viewSchemaRequests");
          }}
        >
          View Schema Requests
        </button>
      </div>
    </>
  );
}

export default Admin;
