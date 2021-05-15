import React, { useState } from "react";
import PropTypes from 'prop-types';
import { NavLink as RouterNavLink } from "react-router-dom";
import {
  Container,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";


function NavBar(props) {

  // Get the logged in state, but also need to call this more than once, but not infinite.

  // Return a NavBar to visit different pages
  // Always Display: Home, About, Courses
  // If authenthicated: Profile, Logout
  // Not authenthicated: Register/Log in
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
              {/* Display only if logged in */}
              { props.isLogin ? 
              <>
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
                    tag={RouterNavLink}
                    to="/"
                    exact
                    activeClassName="router-link-exact-inactive"
                    onClick={() => props.handleLogout}
                  >
                  <button onClick={props.handleLogout}> Log out</button>
                </NavLink>
              </NavItem>
            </>
            :
            <NavItem>
              <NavLink
                tag={RouterNavLink}
                to="/register"
                exact
                activeClassName="router-link-exact-inactive"
              >
                <button> Register or Login </button>
              </NavLink>
            </NavItem>
            }
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
NavBar.propTypes = {
  handleLogout: PropTypes.func.isRequired,
  isLogin: PropTypes.bool.isRequired,
};