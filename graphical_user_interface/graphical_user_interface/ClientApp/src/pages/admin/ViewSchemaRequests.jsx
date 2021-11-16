import React, { useState, useEffect } from "react";
import { useLocation,Link, useHistory } from "react-router-dom";
import API from "../../API";
import "./ViewSchemaRequests.css";
import Footer from "../../components/Footer";
import {Pagination, PaginationItem, PaginationLink} from "reactstrap"

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
  const history = useHistory();

  const page_number = useLocation().search;
  const [number, setNumber] = useState("")

  useEffect(() => {
    var onSuccess = (e) => {
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
          <div>
            <header>Schema Requests</header>
          </div>
          <div className="viewSchemasTable">
              <Pagination>
                <PaginationItem>
                    <PaginationLink previous href="#" />
                </PaginationItem>

                <PaginationItem value = {1}>
                  <PaginationLink href="#">1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">...</PaginationLink>
                </PaginationItem>

                <PaginationItem>
                    <PaginationLink next href="#" />
                </PaginationItem>
              </Pagination> 
            </div>
        </div>

        {hasLoaded ? (
          <>
            <main className="viewSchemasTable">
              <table>
                <tbody>
                  <tr className="tblViewSchemas">
                    <th>Policy Type</th>
                    <th>Client Name</th>
                    <th>Request Status</th>
                    <th>Schema Request</th>
                    <th>Client Details</th>
                    <th>Policy Details</th>
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
                        <td>
                          <NavItem>
                            <NavLink
                              tag={Link}
                              className="text-dark"
                              to={`/ViewClientDetails?id=${x.userId}`}
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
                              to={`/ViewPolicyDetails/?id=${x.policyId}`}
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
                  history.goBack();
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
      <Footer />
    </>
  );
}

export default ViewSchemaRequests;
