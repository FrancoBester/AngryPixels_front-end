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
      setPolicies(e.data);

      setHasLoaded(true);
    };

    API.APIGET(
      "GetAllPolicies",
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
              <th>Date</th>
              <th>Description</th>
              <th>Benefits</th>
              <th>Options</th>
            </tr>
            {policies.map((policy) => {
              return (
                <tr>
                  <td>{policy.policy_Holder}</td>
                  <td>{policy.policy_Type}</td>
                  <td>{policy.policy_Date}</td>
                  <td>{policy.policy_Des}</td>
                  <td>{policy.policy_Benefits}</td>
                  <td>
                    <NavItem>
                      <NavLink
                        tag={Link}
                        className="text-dark"
                        to={`/viewSinglePolicy?id=${policy.policy_Id}`}
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
