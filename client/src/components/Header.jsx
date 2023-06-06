import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import GradeBookImage from "../img/Gradebook.svg";
/* import "../styles/global.css"; */

function Header(props) {
  return (
    <>
      <Navbar
        bg="dark"
        expand="lg"
        variant="dark"
        style={{ borderBottom: "solid white 6px", fontSize: "1.6rem" }}
      >
        <Container fluid>
          <Navbar.Brand
            href="/"
            className="flex-fill header-brand"
            style={{ fontSize: "1.6rem" }}
          >
            <img
              src={GradeBookImage}
              alt="apple with a letter G inside"
              style={{ height: "40px", marginRight: "10px" }}
            />{" "}
            GradeBook
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto d-flex justify-content-end flex-fill">
              <NavLink
                to="/login"
                className="nav-link"
                /* activeClassName="active-link" */
              >
                Login
              </NavLink>
              <NavLink to="/grades" className="nav-link">
                Grades
              </NavLink>

              <NavLink to="/classes" className="nav-link">
                Classes
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="water"></div>
    </>
  );
}

export default Header;
