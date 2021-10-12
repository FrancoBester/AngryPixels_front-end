import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import API from "../../API";

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
      {hasLoaded ? (
        <>
          <table>
            <tr>
              <th>Policy Type</th>
              <th>User Fullname</th>
              <th>Request Status</th>
              <th>Options</th>
            </tr>
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
                        View Schema Request
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

export default ViewSchemaRequests;
