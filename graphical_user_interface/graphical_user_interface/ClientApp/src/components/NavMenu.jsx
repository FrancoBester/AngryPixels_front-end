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

  //subscribe to events
  useEffect(() => {
    window.addEventListener("onAuthenticationChangedEvent", (e, p) => {
      setAuthenticated(e.detail.value);
    });

    // cleanup this component
    return () => {
      window.removeEventListener("onAuthenticationChangedEvent", () => {});
    };
  }, []);

  function toggleNavbar() {
    setCollapsed(!collapsed);
  }

  const history = useHistory();

  return (
    <header>
      <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3">
        <Container>
          <NavbarBrand tag={Link} to="/">
            MediTrust
          </NavbarBrand>
          <NavbarToggler onClick={() => toggleNavbar()} className="mr-2" />
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
              <NavItem>
                <NavLink tag={Link} className="text-dark" to="/About">
                  About
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} className="text-dark" to="/Contact">
                  Contact
                </NavLink>
              </NavItem>
              {authenticated ? (
                <>
                  <NavItem>
                    <NavLink tag={Link} className="text-dark" to="/Client">
                      Client
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      tag={Link}
                      className="text-dark"
                      to="/Admin"
                    >
                      Admin
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      onClick={() => {
                        auth.logout(() => {});
                      }}
                      tag={Link}
                      className="text-dark"
                      to="/"
                    >
                      Logout
                    </NavLink>
                  </NavItem>
                </>
              ) : (
                <>
                  <NavItem>
                    <NavLink tag={Link} className="text-dark" to="/login">
                      Login
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink tag={Link} className="text-dark" to="/Signup">
                      Register
                    </NavLink>
                  </NavItem>
                </>
              )}
            </ul>
          </Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default NavMenu;
