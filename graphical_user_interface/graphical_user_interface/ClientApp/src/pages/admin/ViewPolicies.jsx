import React, { useState, useEffect } from "react";
import API from "../../API";
import auth from "../../auth";
import './ViewPolicies.css';
import {useLocation ,Link, useHistory } from "react-router-dom";
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
import {Pagination, PaginationItem, PaginationLink} from "reactstrap"

function ViewPolicies() {

  const [policies, setPolicies] = useState({});
  const [update, setUpdate] = useState(0);
  const [hasLoaded, setHasLoaded] = useState(false);
  const history = useHistory();

  const page_number = useLocation().search;
  const [number, setNumber] = useState("")

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
    const id = new URLSearchParams(page_number).get("pageNumber");
    setNumber(id)
    // alert(number)
    var onSuccess = (e) => {
      debugger;
      setPolicies(e.data);

      setHasLoaded(true);
    };

    API.APIGET(
      "SchemaRequests/GetAllSchemaRequests?pageNumber="+id+"",
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
        <div>
          <header>View Policies</header>
        </div>
        
        
         
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
                    className="btnDeletePolicy"
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

          <div className="viewPoliciesHeaderPgnt">
            <Pagination>
              <PaginationItem >
              <PaginationLink previous href="" onClick={
                  () => {
                    var new_page = parseInt(number,10) - 1
                    if(new_page < 1){
                      new_page = 1
                    }
                    setNumber(new_page)
                    history.push("/ViewAllPolicies?pageNumber="+new_page+"")
                    window.location.reload()}
                  }>
                </PaginationLink>
              </PaginationItem>

              <PaginationItem>
                <PaginationLink href="">{number}</PaginationLink>
              </PaginationItem>

              <PaginationItem>
                <PaginationLink href="">...</PaginationLink>
              </PaginationItem>

              <PaginationItem>
              <PaginationLink next href=""onClick={
                  () => {
                    // alert("test")
                    var new_page = parseInt(number,10) + 1
                    // alert(new_page)
                    setNumber(new_page)
                    history.push("/ViewAllPolicies?pageNumber="+new_page+"")
                    window.location.reload()}
                  }>
                </PaginationLink>
              </PaginationItem>
            </Pagination> 
          </div>
          
          <div className="btnPoliciesBack">
          <button 
              className="btnBackClient"
              onClick={() => {
                history.push("Admin?pagenumber=1")
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
