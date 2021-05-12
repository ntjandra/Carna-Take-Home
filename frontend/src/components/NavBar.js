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
                  to="/login"
                  exact
                  activeClassName="router-link-exact-inactive"
                >
                  <button> Login </button>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  tag={RouterNavLink}
                  to="/register"
                  exact
                  activeClassName="router-link-exact-inactive"
                >
                  <button> Register </button>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  tag={RouterNavLink}
                  to="/courses"
                  exact
                  activeClassName="router-link-exact-inactive"
                >
                  <button> View Courses </button>
                </NavLink>
              </NavItem>
            </Nav>
            
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

            {/* Check User is logged in, then allow more stuff to appear. */}
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
                    onClick={() => props.handleLogout}
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