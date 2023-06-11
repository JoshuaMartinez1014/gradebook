import React from "react";
import { useUserContext } from "../ctx/UserContext";
import { useState, useEffect } from "react";
import "../styles/global.css";

function AssignmentsPage() {
  const { currUser } = useUserContext();
  console.log(currUser);

  const [assignmentsData, setAssignmentsData] = useState();
  async function lookupAssignments() {
    const apiPath = `/api/class/user/${currUser._id}`;
    const searchQuery = await fetch(apiPath);
    const results = await searchQuery.json();
    console.log(results);
    setAssignmentsData(results);
  }
  useEffect(() => {
    console.log("context use effect working");
    if (currUser && currUser._id) {
      lookupAssignments();
    }
  }, [currUser]);
  return (
    <div style={{ marginTop: "50px", width: "800px" }}>
      <h1
        style={{
          backgroundColor: "#212529",
          border: "solid black 4px",
          padding: "20px",
          borderRadius: "10px",
          textAlign: "center",
          color: "white",
        }}
      >
        Assignments
      </h1>
      <br />
      <div
        style={{
          backgroundColor: "white",
          padding: "20px",
          borderRadius: "10px",
        }}
      >
        {assignmentsData &&
          assignmentsData.map((assignments) => (
            <React.Fragment key={assignments._id}>
              <h2>
                {" "}
                <strong>{assignments.class_name}</strong>
              </h2>
              {assignments.assignment.map((hw) => (
                <p key={hw._id}>
                  <a href={`assignment/${hw._id}`}>{hw.assignment_name}</a>
                </p>
              ))}
            </React.Fragment>
          ))}
      </div>
    </div>
  );
}

export default AssignmentsPage;
