import React, { useEffect } from "react";
import { Nav } from "react-bootstrap";
import "../styles/global.css";
import { NavLink } from "react-router-dom";
import { useUserContext } from "../ctx/UserContext";

function SideNav(props) {
  const { currUser, logout, loading } = useUserContext();
  /* Adds sidescrolling on the navbar */

  useEffect(() => {
    const nav = document.querySelector(".sidenav");
    const scrollHorizontally = (e) => {
      e.preventDefault();
      if (e.deltaY > 0) nav.scrollLeft += 50;
      else nav.scrollLeft -= 50;
    };
    if (nav) {
      // Checks if nav is not null
      nav.addEventListener("wheel", scrollHorizontally, { passive: false });

      // Return a cleanup function to remove the event listener
      return () => {
        nav.removeEventListener("wheel", scrollHorizontally);
      };
    }
  }, [currUser, loading]);

  if (loading) {
    return (
      <>
        {" "}
        <Nav className="sidenav"></Nav>
      </>
    );
  }

  return (
    <Nav className="sidenav">
      {currUser ? (
        currUser.isTeacher === false ? (
          <>
            <NavLink
              to="/grades"
              className="sidenav-link nav-link"
              activeclassname="active"
            >
              Grades &nbsp;&nbsp;&nbsp;&nbsp;&gt;
            </NavLink>
            <NavLink
              className="sidenav-link nav-link"
              activeclassname="active"
              to="/syllabus"
            >
              Syllabus &nbsp;&nbsp;&nbsp;&nbsp;&gt;
            </NavLink>
            <NavLink
              className="sidenav-link nav-link"
              activeclassname="active"
              to="/teacher"
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
              to="/assignments"
            >
              Assignments &gt;
            </NavLink>
          </>
        ) : (
          <NavLink
            className="sidenav-link nav-link"
            activeclassname="active"
            to="/submitted"
          >
            Submitted Work &gt;
          </NavLink>
        )
      ) : null}
    </Nav>
  );
}
export default SideNav;
