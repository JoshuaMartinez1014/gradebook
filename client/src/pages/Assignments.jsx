import React from "react";
import { useUserContext } from "../ctx/UserContext";
import { useState, useEffect } from "react";
import "../styles/global.css";

function AssignmentsPage(props) {
  const { currUser } = useUserContext();
  console.log(currUser);
  
  const [assignmentsData, setAssignmentsData] = useState();
  async function lookupAssignments() {
    const apiPath = `/api/class/user/${currUser._id}`
    const searchQuery = await fetch(apiPath)
    const results = await searchQuery.json()
    console.log(results)
    setAssignmentsData(results)
  }
  useEffect(() => {
    console.log("context use effect working");
    lookupAssignments();
  }, []);
  return (
    <div style={{ marginTop: "50px", width: "800px" }}>
      <h1 style={{ marginLeft: "10%" }}>Assignments</h1>
      <br />
      {assignmentsData && assignmentsData.map(assignments => (
        <>
          <h2 key={assignments._id}> {assignments.class_name}</h2>
          {assignments.assignment.map(hw=>(
            <p key={hw._id}><a href= {`assignment/${hw._id}`}>{hw.assignment_name}</a></p>
          ))}
          
        </>
      ))}
    </div>
  );
}

export default AssignmentsPage;