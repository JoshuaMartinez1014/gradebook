import React, { useEffect } from "react";
import { Nav } from "react-bootstrap";
import "../styles/global.css";
import { NavLink } from "react-router-dom";

function SideNav() {
  /* Adds sidescrolling on the navbar */
  useEffect(() => {
    const nav = document.querySelector(".sidenav");
    const scrollHorizontally = (e) => {
      e.preventDefault();
      if (e.deltaY > 0) nav.scrollLeft += 50;
      else nav.scrollLeft -= 50;
    };
    nav.addEventListener("wheel", scrollHorizontally, { passive: false });
    return () => {
      nav.removeEventListener("wheel", scrollHorizontally);
    };
  }, []);

  return (
    <Nav className="sidenav">
      <NavLink
        className="sidenav-link nav-link"
        activeclassname="active"
        to="/link1"
      >
        Syllabus &nbsp;&nbsp;&nbsp;&nbsp;&gt;
      </NavLink>
      <NavLink
        className="sidenav-link nav-link"
        activeclassname="active"
        to="/link2"
      >
        Teachers &nbsp;&nbsp;&nbsp;&nbsp;&gt;
      </NavLink>
      <NavLink
        className="sidenav-link nav-link"
        activeclassname="active"
        to="/calendar"
      >
        Calendar &nbsp;&nbsp;&nbsp;&nbsp;&gt;
      </NavLink>
      <NavLink
        className="sidenav-link nav-link"
        activeclassname="active"
        to="/link3"
      >
        Assignments &nbsp;&nbsp;&nbsp;&nbsp;&gt;
      </NavLink>
    </Nav>
  );
}

export default SideNav;
