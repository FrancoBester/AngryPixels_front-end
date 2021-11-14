import React, { useState, useEffect } from "react";
import API from "../../API";
import auth from "../../auth";
import './ViewPolicies.css';
import { Link, useHistory } from "react-router-dom";
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

function ViewPolicies() {

  const [policies, setPolicies] = useState({});
  const [update, setUpdate] = useState(0);
  const [hasLoaded, setHasLoaded] = useState(false);
  const history = useHistory();

  function removePolicy(e){
    var id = e
    var onSuccess = () => {
      alert("Policy has been deleted");
      window.location.reload();
      // history.push("viewAllPolicies");
    };

    API.APIGET(
      "Policy/RemovePolicy/"+id,
      onSuccess,
      () => {},
      () => {}
    );
  }

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
              <th></th>
              <th></th>
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
                        to={`/EditPolicy?id=${policy.policyId}`}
                      >
                        Edit Policy
                      </NavLink>
                    </NavItem>
                  </td>
                  <td>
                    <button 
                      onClick={() =>{
                        const confirmBox = window.confirm(
                          "Do you want to delete this policy"
                        )
                        if(confirmBox == true)
                        {
                          removePolicy(policy.policyId);
                        }
                      }}
                    >
                    Delete
                    </button>
                  </td>
                </tr>
              );
            })}
            </tbody>
          </table>
          </main>
          <div className="btnPoliciesBack">
          <button 
              className="btnBackClient"
              onClick={() => {
              history.goBack();
              }}>
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
