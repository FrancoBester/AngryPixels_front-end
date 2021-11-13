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

  const [updated, setUpdated] = useState(0);

  //subscribe to events
  useEffect(() => {
    setAuthenticated(auth.isAuthenticated());
    window.addEventListener("onAuthenticationChangedEvent", (e, p) => {
      setAuthenticated(e.detail.value);
    });
    // cleanup this component
    return () => {
      //cleanup
    };
  }, []);

  function toggleNavbar() {
    setCollapsed(!collapsed);
  }

  const history = useHistory();

  return (
    <>
      <header className="whole-navbar">
        <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3">
          <Container>
            <NavbarBrand className="navbar-left" tag={Link} to="/">
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
                  <NavLink tag={Link} className="nav-font-right" to="/">
                    Home
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} className="nav-font-right" to="/About">
                    About
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} className="nav-font-right" to="/Contact">
                    Contact
                  </NavLink>
                </NavItem>
                {authenticated ? (
                  <>
                    <NavItem>
                      <NavLink
                        tag={Link}
                        className="nav-font-right"
                        to="/Client"
                      >
                        Client
                      </NavLink>
                    </NavItem>
                    {auth.userIsOfType("Admin") && (
                      <>
                        <NavItem>
                          <NavLink
                            tag={Link}
                            className="nav-font-right"
                            to="/Admin"
                          >
                            Admin
                          </NavLink>
                        </NavItem>
                      </>
                    )}
                    <NavItem>
                      <NavLink
                        onClick={() => {
                          auth.logout(() => {
                            setUpdated(!updated);
                          });
                        }}
                        tag={Link}
                        className="nav-font-right"
                        to="/"
                      >
                        Logout
                      </NavLink>
                    </NavItem>
                  </>
                ) : (
                  <>
                    <NavItem>
                      <NavLink
                        tag={Link}
                        className="nav-font-right"
                        to="/login"
                      >
                        Login
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        tag={Link}
                        className="nav-font-right"
                        to="/Signup"
                      >
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
    </>
  );
}

export default NavMenu;
