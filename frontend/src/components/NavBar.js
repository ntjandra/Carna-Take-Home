import React, { useState } from "react";
import PropTypes from 'prop-types';
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
              {/* <NavItem>
                <NavLink
                  tag={RouterNavLink}
                  to="/login"
                  exact
                  activeClassName="router-link-exact-inactive"
                >
                  <button> Login </button>
                </NavLink>
              </NavItem> */}
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
              <NavItem>
                <NavLink
                  tag={RouterNavLink}
                  to="/profile"
                  exact
                  activeClassName="router-link-exact-inactive"
                >
                <button> Profile </button>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  to="#"
                  id="qsLogoutBtn"
                  onClick={() => props.handleLogout}
                >
                <button color="secondary" size="lg">Log out</button>
              </NavLink>
            </NavItem>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;