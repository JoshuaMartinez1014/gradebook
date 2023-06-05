import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function Header(props) {
  return (
    <>
      <Navbar bg="dark" expand="lg" variant="dark">
        <Container fluid>
          <Navbar.Brand href="#home" className="flex-fill">
            GradeBook
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto d-flex justify-content-end flex-fill">
              <NavLink
                to="/"
                className="nav-link"
                /* activeClassName="active-link" */
              >
                Student
              </NavLink>
              <NavLink to="/projects" className="nav-link">
                Grades
              </NavLink>

              <NavLink to="/contactme" className="nav-link">
                Classes
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
