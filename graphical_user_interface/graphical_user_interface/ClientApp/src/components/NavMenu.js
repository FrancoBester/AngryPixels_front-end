import React, { useState, useEffect } from "react";
import {
  Collapse,
  Container,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
} from "reactstrap";
import { Link, useHistory } from "react-router-dom";
import "./NavMenu.css";
import auth from "../auth";

function NavMenu(props) {
  const [collapsed, setCollapsed] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);

  const history = useHistory();
  function HandeLoginout(value) {
    if (value) {
      auth.login(() => {
        history.push("/Home");
      });
    } else {
      auth.logout(() => {
        history.push("/");
      });
    }
    setAuthenticated(value);
  }

  return (
    <div>
      <header>
        <Navbar
          className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3"
          light
        >
          <Container>
            <NavbarBrand tag={Link} to="/">
              Medi trust
            </NavbarBrand>
            <NavbarToggler onClick={setCollapsed} className="mr-2" />
            <Collapse
              className="d-sm-inline-flex flex-sm-row-reverse"
              isOpen={!collapsed}
              navbar
            >
              <ul className="navbar-nav flex-grow">
                <NavItem>
                  <NavLink tag={Link} className="text-dark" to="/">
                    Home
                  </NavLink>
                </NavItem>

                {auth.isAuthenticated()}

                {authenticated && (
                  <>
                    <NavItem>
                      <NavLink tag={Link} className="text-dark" to="/counter">
                        Counter
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        tag={Link}
                        className="text-dark"
                        to="/fetch-data"
                      >
                        Fetch data
                      </NavLink>
                    </NavItem>
                  </>
                )}

                {authenticated ? (
                  <button
                    onClick={() => {
                      HandeLoginout(false);
                    }}
                  >
                    Logout
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      HandeLoginout(true);
                    }}
                  >
                    Login
                  </button>
                )}
              </ul>
            </Collapse>
          </Container>
        </Navbar>
      </header>
    </div>
  );
}

export default NavMenu;
