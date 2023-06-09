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
    for(let i =0; i <results.grade.length; i++){
        if(results.grade[i].student===currUser._id){
            setSubmitedData(true)
            console.log("is true")
        }else {
            setSubmitedData(false)
            console.log("is false")
        }
    }
    setAssignmentData(results.assignment_name)
  }
  useEffect(() => {
    console.log("context use effect working");
    if( currUser && currUser._id ){
      lookupAssignment();
    }
  }, [currUser]);
  return (
    <div style={{ marginTop: "50px", width: "800px" }}>
      <h1 style={{ marginLeft: "10%" }}>Assignment</h1>
      <br />
      {submitedData ?(<SubmitedAssignment data={assignmentData}/>):(<NotSubmitedAssignment data={assignmentData}/>)}
    </div>
  );
}

export default AssignmentPage;