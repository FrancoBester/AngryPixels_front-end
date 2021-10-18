import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import API from "../../API";
import './ViewSchemaRequests.css';
import Footer from '../../components/Footer';


import {
  Collapse,
  Container,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
} from "reactstrap";

function ViewSchemaRequests() {
  const [hasLoaded, setHasLoaded] = useState(false);
  const [schemaRequests, setSchemaRequests] = useState({});
  const history =useHistory();


  useEffect(() => {
    var onSuccess = (e) => {
      debugger;
      setSchemaRequests(e.data);

      setHasLoaded(true);
    };

    API.APIGET(
      "SchemaRequests/GetAllSchemaRequests",
      onSuccess,
      () => {
        alert("Error");
      },
      () => {}
    );
    return () => {};
  }, []);

  return (
    <>

    <div className="gridViewSchema">

    <div className="viewSchemaHeader">
      <header>Schema Requests</header>
    </div>

      {hasLoaded ? (
        <>
        <main className="viewSchemasTable">
          <table>
            <tbody>
            <tr className="tblViewSchemas">
              <th>Policy Type</th>
              <th>User Fullname</th>
              <th>Request Status</th>
              <th>View Schema Request</th>
            </tr>
            </tbody>
            <tbody>
            {schemaRequests.map((x) => {
              return (
                <tr>
                  <td>{x.policyType}</td>
                  <td>{`${x.userName} ${x.userSurname}`}</td>
                  <td>{x.requestStatus}</td>
                  <td>
                    <NavItem>
                      <NavLink
                        tag={Link}
                        className="text-dark"
                        to={`/admin/viewSingleSchemaRequest?id=${x.requestId}`}
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
          </main>

          <div className="backSchema">
          <button
              className="btnBackSchema"
              onClick={() => {
                history.push("/Admin");
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
      <Footer/>
    </>
  );
}

export default ViewSchemaRequests;

