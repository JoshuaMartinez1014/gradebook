import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";
import GradeBookImage from "../img/Gradebook.svg";
/* import "../styles/global.css"; */

function Header(props) {
  return (
    <>
      <Navbar
        bg="dark"
        expand="lg"
        variant="dark"
        style={{
          borderBottom: "solid white 6px",
          fontSize: "1.4rem",
          boxShadow: "2px 0px 8px 0px rgba(0, 0, 0, 0.75)",
          paddingTop: "10px",
        }}
      >
        <Container fluid>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Navbar.Brand
              className="flex-fill header-brand"
              style={{ fontSize: "2rem" }}
            >
              <img
                src={GradeBookImage}
                alt="apple with a letter G inside"
                style={{ height: "40px", marginRight: "10px" }}
              />{" "}
              GradeBook
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto d-flex justify-content-end flex-fill">
              <NavLink
                to="/login"
                className="nav-link"
                /* activeclassname="active-link" */
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
    </>
  );
}

export default Header;
