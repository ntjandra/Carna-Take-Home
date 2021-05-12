import React, { useState } from "react";
import { NavLink as RouterNavLink } from "react-router-dom";
import {
  Collapse,
  Container,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import PropTypes from 'prop-types';


function NavBar(props) {

  // Return a NavBar to visit different pages
  return (
    <div className="nav-container">
      <Navbar color="light" light expand="md">
        <Container>
          <NavbarBrand className="logo" />
          <NavbarToggler/>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink
                  tag={RouterNavLink}
                  to="/"
                  exact
                  activeClassName="router-link-exact-active"
                >
                  <button> Home </button>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  tag={RouterNavLink}
                  to="/about"
                  exact
                  activeClassName="router-link-exact-inactive"
                >
                  <button> About </button>
                </NavLink>
              </NavItem>

              {/* Display only if not logged in */}
              <NavItem>
                <NavLink
                  tag={RouterNavLink}
                  to="/register"
                  exact
                  activeClassName="router-link-exact-inactive"
                >
                  <button> Login or Register </button>
                </NavLink>
              </NavItem>

            </Nav>
            {/* <Nav className="d-none d-md-block" navbar>
              {!isAuthenticated && (
                <NavItem>
                  <Button
                    id="qsLoginBtn"
                    color="primary"
                    className="btn-margin"
                    onClick={ props.handle_logout}
                  >
                    Log in
                  </Button>
                </NavItem>
              )}
              {isAuthenticated && (
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret id="profileDropDown">
                    <img
                      src={user.picture}
                      alt="Profile"
                      className="nav-user-profile rounded-circle"
                      width="50"
                    />
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem header>{user.name}</DropdownItem>
                    <DropdownItem
                      tag={RouterNavLink}
                      to="/profile"
                      className="dropdown-profile"
                      activeClassName="router-link-exact-active"
                    >
                      <FontAwesomeIcon icon="user" className="mr-3" /> Profile
                    </DropdownItem>
                    <DropdownItem
                      id="qsLogoutBtn"
                      onClick={() => logoutWithRedirect()}
                    >
                      <FontAwesomeIcon icon="power-off" className="mr-3" /> Log
                      out
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              )}
            </Nav> */}
            {/* {!isAuthenticated && (
              <Nav className="d-md-none" navbar>
                <NavItem>
                  <Button
                    id="qsLoginBtn"
                    color="primary"
                    block
                    onClick={ window.location.href = '/login/'}
                  >
                    Log in
                  </Button>
                </NavItem>
              </Nav>
            )} */}
            {/* Check User is loged in, then allow more stuff to appear. */}
            {true && (
              <Nav
                className="d-md-none justify-content-between"
                navbar
                style={{ minHeight: 170 }}
              >
                <NavItem>
                  <RouterNavLink
                    to="/profile"
                    activeClassName="router-link-exact-active"
                  >
                    <Button> Profile </Button>
                  </RouterNavLink>
                </NavItem>
                <NavItem>
                  <RouterNavLink
                    to="#"
                    id="qsLogoutBtn"
                    onClick={() => props.handle_logout}
                  >
                    <Button color="secondary" size="lg">Log out</Button>
                  </RouterNavLink>
                </NavItem>
              </Nav>
            )}
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;

Nav.propTypes = {
  logged_in: PropTypes.bool.isRequired,
  display_form: PropTypes.func.isRequired,
  handle_logout: PropTypes.func.isRequired
};