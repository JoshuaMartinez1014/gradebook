import React from "react";
import SubmitedAssignment from "../components/SubmitedAssignment";
import NotSubmitedAssignment from "../components/NotSubmitedAssignment";
import { useUserContext } from "../ctx/UserContext";
import { useState, useEffect } from "react";
import "../styles/global.css";

function AssignmentPage() {
  const { currUser } = useUserContext();
  console.log(currUser);
  const url = window.location.pathname.split("/").pop()
  console.log(url)
  const [submitedData, setSubmitedData] = useState(false);
  const [assignmentData, setAssignmentData] = useState("");

  async function lookupAssignment() {
    const apiPath = `/api/assignment/${url}`
    const searchQuery = await fetch(apiPath)
    const results = await searchQuery.json()
    console.log(results)

    setAssignmentData([results.assignment_name, results._id])
  }
  
  async function lookupSubmited() {
    const apiPath = `/api/submited`
    const searchQuery = await fetch(apiPath)
    const results = await searchQuery.json()
    console.log(results)
    for (let i = 0; i < results.length; i++) {
      if (results[i].student === currUser._id && results[i].assignment === url) {
        setSubmitedData(true)
      }
    }
    setAssignmentData([results.assignment_name, results._id])
  }
  useEffect(() => {
    console.log("context use effect working");
    if (currUser && currUser._id) {
      lookupSubmited();
      lookupAssignment();
    }
  }, [currUser]);
  return (
    <div style={{ marginTop: "50px", width: "800px" }}>
      <h1 style={{ marginLeft: "10%" }}>Assignment</h1>
      <br />
      {submitedData ? (<SubmitedAssignment setPosted={setSubmitedData} data={assignmentData} />) : (<NotSubmitedAssignment setPosted={setSubmitedData} data={assignmentData} />)}
    </div>
  );
}

export default AssignmentPage;