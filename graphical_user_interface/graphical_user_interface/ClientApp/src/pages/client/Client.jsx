import React, { useEffect, useState } from "react";
import "./Client.css";
import { useHistory } from "react-router";
import API from "../../API";
import { Link } from 'react-router-dom';
import Footer from "../../components/Footer";
import {
  Collapse,
  Container,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
} from "reactstrap";

function Client() {
  const history = useHistory();
  const [updated, setUpdated] = useState(1);
  const tableHeadings = ["Title", "Status", "Assistant Name", "Query Details"];
  const [TableInfo, setTableInfo] = useState({});

  function HandleTableInfo(e) {
    setTableInfo(e);
  }

  useEffect(() => {
    //var id = parseInt(localStorage.getItem("id"));
    var id = parseInt(window.sessionStorage.getItem("id"));
    var onSuccess = (e) => {
      HandleTableInfo(e.data);
    };
    API.APIGET(
      "Queries/GetSpecificUserQueries/" + id,
      onSuccess,
      () => {
        alert("Error");
      },
      () => {}
    );
    return () => {};
  }, [updated]);

  //console.log(localStorage.getItem("id"))
  return (
    <>
      <div className="grid-container-client-dashboard">
        <header className="clientDashHeader">Client Dashboard</header>

        <div className="secondHeader">
          <h2>Please select an action below:</h2>
        </div>

        <main className="topGrid">
          <button
            className="btnViewProfileClient"
            onClick={() => {
              history.push("/ViewClientProfile"); //Add path here once a View Profile Page has been created
            }}
          >
            View Profile
          </button>

          <button
            className="btnViewPoliciesClient"
            onClick={() => {
              history.push("/ViewPolicies");
            }}
          >
            View Policies
          </button>

          <button
            className="btnNewQueryClient"
            onClick={() => {
              history.push("/myProfile");
            }}
          >
            Upload Documents
          </button>
          <button
            className="btnUploadDocuments"
            onClick={() => {
              history.push("/CreateNewQuery");
            }}
          >
            New Query
          </button>
        </main>

        <div className="tableHeading">
          <h2>My Current Active Queries:</h2>
        </div>

        <div className="userQueries">
          <table>
            <tbody>
              <tr className="tblUserQueryHeadings">
                {tableHeadings.map((t) => {
                  return <td key={t}>{t}</td>;
                })}
              </tr>
            </tbody>
            <tbody>
              {Object.keys(TableInfo).map((i) => {
                return (
                  <tr>
                    <td>{TableInfo[i].queryTitle}</td>
                    <td>{TableInfo[i].queryStatus}</td>
                    <td>{TableInfo[i].assistantName}</td>
                    <td><NavItem>
                        <NavLink
                            tag={Link}
                            className="text-dark"
                            to={`/ViewQuery`} /* NEED TO ADD PATH*/
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
      </div>
      <Footer />
    </>
  );
}

export default Client;
