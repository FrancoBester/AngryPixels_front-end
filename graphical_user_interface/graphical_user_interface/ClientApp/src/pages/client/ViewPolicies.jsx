import React, { useState, useEffect } from "react";
import API from "../../API";
import auth from "../../auth";
import { Link, useHistory } from "react-router-dom";
import {
  Collapse,
  Container,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
} from "reactstrap";

function ViewPolicies() {
  const [policies, setPolicies] = useState({});
  const [update, setUpdate] = useState(0);
  const [hasLoaded, setHasLoaded] = useState(false);

  //Get Policies Here
  useEffect(() => {
    var onSuccess = (e) => {
      debugger;
      setPolicies(e.data);

      setHasLoaded(true);
    };

    API.APIGET(
      "SchemaRequests/GetAllPolicies",
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
      {hasLoaded ? (
        <>
          <table>
            <tr>
              <th>Policy Holder</th>
              <th>Policy Type</th>
              <th>Admission</th>
              <th>Options</th>
            </tr>
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
          </table>
        </>
      ) : (
        <h3>Loading...</h3>
      )}
    </>
  );
}

export default ViewPolicies;
