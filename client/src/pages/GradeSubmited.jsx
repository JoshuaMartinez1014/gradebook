import React from "react";
import { useUserContext } from "../ctx/UserContext";
import { useState, useEffect } from "react";
import "../styles/global.css";

function GradeSubmitedPage() {
  const { currUser } = useUserContext();
  console.log(currUser);

  useEffect(() => {
    console.log("context use effect working");
    if (currUser && currUser._id) {
      lookupSubmited();
      lookupAssignment();
    }
  }, [currUser]);
  return (
    <div style={{ marginTop: "50px", width: "800px" }}>
      <h1 style={{ marginLeft: "10%" }}>Ungraded Work</h1>
      <br />
      <h2>yo yo yo</h2>
    </div>
  );
}

export default GradeSubmitedPage;