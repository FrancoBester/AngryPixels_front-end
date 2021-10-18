import "./Admin.css";
import { Link, useHistory } from "react-router-dom";
import React, {useEffect, useState} from "react";
import API from "../../API";
import { Tab } from "bootstrap";
import Footer from '../../components/Footer';
import {
  NavItem,
  NavLink,
} from "reactstrap";

function Admin() {
  const history = useHistory();
  const [updated, setUpdated] = useState(1);
  const tableHeadings = ["Client Name", "Role", "Policy Type", "Client Details", "Policy Details"]
  const [TableInfo, setTableInfo] = useState({});
  const [search_value, setSearch] = useState('');

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

  function searchClick(){
    var onSuccess = (e) =>{
      HandleTableInfo(e.data)
    };
    API.APIGET(
      "Users/SearchLoadPageData?search=" + search_value+ "",
      onSuccess,
      () => {},
      () => {}
    )
  }

  function clearCLick(){
    document.getElementById("userSearch").value = "";
    var onSuccess = (e) =>{
      HandleTableInfo(e.data)
    };
    API.APIGET(
      "Users/GetAdminLoadPageData",
      onSuccess,
      () => {},
      () => {}
    )
  }

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
          className="btnCreateNewPolicy"
          onClick={() => {
            history.push("/admin/CreateNewPolicy");
          }}
        >
          Create New Policy
        </button>

        </main>

          <div className="tblHeadingViewClient">
            <h2>View Client Details:</h2>
          </div>

          <div className="rowSearch">
          <div className="colLeftSearch">
          <label id="lblSearch">Search:</label>
        </div>
        <div className="colRightSearchBar">
          <input id="userSearch" type="text" for="lblSearch" onChange={event => setSearch(event.target.value)}></input>
          </div>
        </div>
      
        <div className="userDetailsButtons">
          <button className="btnSearchUserDetails" id="btnSearch" onClick={searchClick}>Search</button>
          <button className="btnClearUserDetails" id="btnClear" onClick={clearCLick}>Clear</button>
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
                  <td>{(TableInfo[i].firstName) + " " + (TableInfo[i].lastName)}</td>
                  <td>{(TableInfo[i].roleName)}</td>
                  <td>{(TableInfo[i].policyName)}</td>
                  <td><NavItem>
                      <NavLink
                        tag={Link}
                        className="text-dark"
                        to={``}
                      >
                        View
                      </NavLink>
                    </NavItem></td>
                    <td><NavItem>
                      <NavLink
                        tag={Link}
                        className="text-dark"
                        to={``}
                      >
                        View
                      </NavLink>
                    </NavItem></td> {/*NEED TO ADD URL HERE STILL*/}
                </tr>
                )
              })}
            </tbody>
          </table>
        </div>


            
        
      </div>
      <Footer/>
    </>
  );
}

export default Admin;
