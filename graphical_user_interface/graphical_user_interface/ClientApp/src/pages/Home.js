import React from "react";
import auth from "../auth";
import { Link } from "react-router-dom";

import { NavLink } from "reactstrap";

function Home() {
  return (
    <div>
      <h1>Welcome to medi trust</h1>
      {auth.isAuthenticated() && (
        <>
          <NavLink tag={Link} className="text-dark" to="/viewPolicies">
            View Policies
          </NavLink>
        </>
      )}
    </div>
  );
}

export default Home;
