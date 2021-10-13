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
          <h2>Please select an action below:</h2>
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

        <button
          className="btnSearchClient"
          onClick={() => {
            history.push("/UserDetailsAdmin");
          }}
        >
          Search User Details
        </button>

        </main>
{/*}
          <div className="tblHeadingViewClient">
            <h2>View Client Details:</h2>
          </div>
      
        <div className="tblAdminDashSearch">
          <table>
            <tbody>
              <tr className="tblUserDetailsHeading">
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


            */}
        
      </div>
    </>
  );
}

export default Admin;
