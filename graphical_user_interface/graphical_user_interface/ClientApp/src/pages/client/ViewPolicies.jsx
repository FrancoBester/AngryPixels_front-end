import React, { useState, useEffect } from "react";
import API from "../../API";
import auth from "../../auth";
import "./ViewPolicies.css";
import Footer from "../../components/Footer";
import { useLocation, Link, useHistory } from "react-router-dom";
import {
  Collapse,
  Container,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
} from "reactstrap";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";

function ViewPolicies() {
  const [policies, setPolicies] = useState({});
  const [update, setUpdate] = useState(0);
  const [hasLoaded, setHasLoaded] = useState(false);
  const history = useHistory();

  const page_number = useLocation().search;
  const [number, setNumber] = useState("");

  //Get Policies Here
  useEffect(() => {
    const id = new URLSearchParams(page_number).get("pageNumber");
    setNumber(id);

    var onSuccess = (e) => {
      setPolicies(e.data);

      setHasLoaded(true);
    };

    API.APIGET(
      "SchemaRequests/GetAllPoliciesPaginate?pageNumber=" + id + "",
      onSuccess,
      () => {
        alert("Error");
      },
      () => {}
    );

    return () => {};
  }, [update]);
  return (
    <>
      <div className="gridViewPolicies">
        <div className="viewPoliciesHeader">
          <header>View Policies</header>
        </div>

        {hasLoaded ? (
          <>
            <main className="viewPolicies">
              <table>
                <tbody>
                  <tr className="tblViewPoliciesHeadings">
                    <th>Policy Holder</th>
                    <th>Policy Type</th>
                    <th>Admission</th>
                    <th>Options</th>
                  </tr>
                </tbody>
                <tbody>
                  {policies.map((policy) => {
                    return (
                      <tr key={policy.policyId}>
                        <td>{policy.policyHolder}</td>
                        <td>{policy.policyType}</td>
                        <td>{policy.admsType}</td>
                        <td>
                          <NavItem>
                            <NavLink
                              tag={Link}
                              className="text-dark"
                              to={`/viewSinglePolicy?id=${policy.policyId}`}
                            >
                              View Policy
                            </NavLink>
                          </NavItem>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </main>

            <div className="viewPolicies">
              <Pagination>
                <PaginationItem>
                  <PaginationLink
                    previous
                    href=""
                    onClick={() => {
                      var new_page = parseInt(number, 10) - 1;
                      if (new_page < 1) {
                        new_page = 1;
                      }
                      setNumber(new_page);
                      history.push("/ViewPolicies?pageNumber=" + new_page + "");
                      window.location.reload();
                    }}
                  ></PaginationLink>
                </PaginationItem>

                <PaginationItem>
                  <PaginationLink href="">{number}</PaginationLink>
                </PaginationItem>

                <PaginationItem>
                  <PaginationLink href="">...</PaginationLink>
                </PaginationItem>

                <PaginationItem>
                  <PaginationLink
                    next
                    href=""
                    onClick={() => {
                      // alert("test")
                      var new_page = parseInt(number, 10) + 1;
                      // alert(new_page)
                      setNumber(new_page);
                      history.push("/ViewPolicies?pageNumber=" + new_page + "");
                      window.location.reload();
                    }}
                  ></PaginationLink>
                </PaginationItem>
              </Pagination>
            </div>

            <div className="btnPoliciesBack">
              <button
                className="btnBackClient"
                onClick={() => {
                  history.push("Client");
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

export default ViewPolicies;
