import React from "react";
import { Nav } from "react-bootstrap";
import "../styles/global.css";
import { NavLink } from "react-router-dom";

function SideNav() {
  return (
    <Nav className="sidenav">
      <NavLink
        className="sidenav-link nav-link"
        activeClassName="active"
        to="/link1"
      >
        Syllabus &nbsp;&nbsp;&nbsp;&nbsp;&gt;
      </NavLink>
      <NavLink
        className="sidenav-link nav-link"
        activeClassName="active"
        to="/link2"
      >
        Teachers &nbsp;&nbsp;&nbsp;&nbsp;&gt;
      </NavLink>
      <NavLink
        className="sidenav-link nav-link"
        activeClassName="active"
        to="/link3"
      >
        Calender &nbsp;&nbsp;&nbsp;&nbsp;&gt;
      </NavLink>
    </Nav>
  );
}

export default SideNav;
