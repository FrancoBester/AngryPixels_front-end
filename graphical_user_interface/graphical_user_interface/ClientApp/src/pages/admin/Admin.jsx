import "./Admin.css";
import { useHistory } from "react-router";
import React, {useEffect, useState} from "react";
import API from "../../API";
import { Tab } from "bootstrap";

function Admin() {
  const history = useHistory();
  const [updated, setUpdated] = useState(1);
  const tableHeadings = ["Client Name", "Client Surname", "Role Type", "Policy Type"]
  const [TableInfo, setTableInfo] = useState({});
  const [SearchValue, setSearchValue] = useState('');

  function HandleTableInfo(e){
    setTableInfo(e)
  }

  useEffect(() => {
    var onSuccess = (e) =>{
      HandleTableInfo(e.data)
    };
    API.APIGET(
      "Users/GetAdminLoadPageData",
      onSuccess,
      () => {},
      () => {}
    )
    return () => {};
  }, [updated])

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
            history.push("/admin/viewSchemaRequests");
          }}
        >
          View Schema Requests
        </button>
        </main>

      
        <div className="tblAdminDashSearch">
          <table>
            <tbody>
              <tr className="tblUserDetails">
                {tableHeadings.map((t) =>{
                  return(
                    <td key={t}>{t}</td>
                  );
                })}
              </tr>
            </tbody>
            <tbody>
              {Object.keys(TableInfo).map((i) => {
                return(
                <tr>
                  <td>{(TableInfo[i].firstName)}</td>
                  <td>{(TableInfo[i].lastName)}</td>
                  <td>{(TableInfo[i].roleName)}</td>
                  <td>{(TableInfo[i].policyName)}</td>
                </tr>
                )
              })}
            </tbody>
          </table>
        </div>


        <div className="headerEmpClient">
          <header>Employee and Client Information</header>
        </div>
        <div className="tblEmpClientInfo">
          <table></table>
        </div>
        
      </div>
    </>
  );
}

export default Admin;
