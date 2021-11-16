import "./Admin.css";
import { useLocation ,Link, useHistory } from "react-router-dom";
import React, { useEffect, useState } from "react";
import API from "../../API";
import { Tab } from "bootstrap";
import Footer from "../../components/Footer";
import { NavItem, NavLink } from "reactstrap";
import {Pagination, PaginationItem, PaginationLink} from "reactstrap"

function Admin() {
  const history = useHistory();
  const [updated, setUpdated] = useState(1);
  const tableHeadings = [
    "Client Name",
    "Role",
    "Medical Aid Name",
    "Client Details",
    "Policy Details",
  ];
  const [TableInfo, setTableInfo] = useState({});
  const [search_value, setSearch] = useState("");
  const [loaded, setLoaded] = useState(false);

  const [Assign, setAssign] = useState("");

  const page_number = useLocation().search;
  const [number, setNumber] = useState("")

  function HandleTableInfo(e) {
    setTableInfo(e);
    setLoaded(true);
  }

  useEffect(() => {
    const id = new URLSearchParams(page_number).get("pagenumber");
    setNumber(id)
    var onSuccess = (e) => {
      HandleTableInfo(e.data);
    };
    API.APIGET(
      "Users/GetAdminLoadPageData?pageNumber="+id+"",
      onSuccess,
      () => {},
      () => {}
    );
    return () => {};
  }, [updated]);

  function searchClick() {
    var onSuccess = (e) => {
      HandleTableInfo(e.data);
    };
    API.APIGET(
      "Users/SearchLoadPageData?search=" + search_value + "",
      onSuccess,
      () => {},
      () => {}
    );
  }

  function clearCLick() {
    document.getElementById("userSearch").value = "";
    var onSuccess = (e) => {
      HandleTableInfo(e.data);
    };
    API.APIGET(
      "Users/GetAdminLoadPageData",
      onSuccess,
      () => {},
      () => {}
    );
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
              history.push("/ViewQueries?pageNumber=1");
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
            className="btnViewMedicalSchema"
            onClick={() => {
              history.push("/ViewAllPolicies?pageNumber=1");
            }}
          >
            View Policies
          </button>

          <button
            className="btnCreateNewPolicy"
            onClick={() => {
              history.push("/CreateNewPolicy");
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
            <input
              id="userSearch"
              type="text"
              for="lblSearch"
              onChange={(event) => setSearch(event.target.value)}
            ></input>
          </div>
        </div>

        <div className="userDetailsButtons">
          <button
            className="btnSearchUserDetails"
            id="btnSearch"
            onClick={searchClick}
          >
            Search
          </button>
          <button
            className="btnClearUserDetails"
            id="btnClear"
            onClick={clearCLick}
          >
            Clear
          </button>
        </div>
        
        

        <div className="tblAdminDashSearch">
          <table>
            <tbody>
              <tr className="tblUserDetailsHeading">
                {tableHeadings.map((t) => {
                  return <td key={t}>{t}</td>;
                })}
              </tr>
            </tbody>
            <tbody>
              {loaded &&
                TableInfo.map((policy) => {
                  // debugger;
                  return (
                    <tr>
                      <td>{policy.firstName + " " + policy.lastName}</td>
                      <td>{policy.roleName}</td>
                      <td>{policy.policyName}</td>
                      <td>
                        <NavItem>
                          <NavLink
                            tag={Link}
                            className="text-dark"
                            to={`/ViewClientDetails?id=${policy.userId}`}
                          >
                            View
                          </NavLink>
                        </NavItem>
                      </td>
                      <td>
                        <NavItem>
                          <NavLink
                            tag={Link}
                            className="text-dark"
                            to={`/ViewPolicyDetails?id=${policy.policyId}`}
                          >
                            View
                          </NavLink>
                        </NavItem>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
          
        </div>

        <div className="tblAdminDashSearchPgnt">
          <Pagination>
            <PaginationItem>
              <PaginationLink previous href="" onClick={
                () => {
                  var new_page = parseInt(number,10) - 1
                  if(new_page < 1){
                    new_page = 1
                  }
                  setNumber(new_page)
                  history.push("/Admin?pagenumber="+new_page+"")
                  window.location.reload()}
                }>
              </PaginationLink>
            </PaginationItem>

            <PaginationItem>
              <PaginationLink href="">
              {number}
              </PaginationLink>
            </PaginationItem>

            <PaginationItem>
              <PaginationLink href="">
              ...
              </PaginationLink>
            </PaginationItem>

            <PaginationItem >
              <PaginationLink next href=""onClick={
                () => {
                  // alert("test")
                  var new_page = parseInt(number,10) + 1
                  // alert(new_page)
                  setNumber(new_page)
                  history.push("/Admin?pagenumber="+new_page+"")
                  window.location.reload()}
                }>
              </PaginationLink>
            </PaginationItem>
          </Pagination> 
        </div>

        </div> 
      <Footer />
    </>
  );
}

export default Admin;
