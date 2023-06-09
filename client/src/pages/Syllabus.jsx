import React from "react";
import { useUserContext } from "../ctx/UserContext";
import { useState, useEffect } from "react";
import "../styles/global.css";

function SyllabusPage(props) {
  const { currUser } = useUserContext();
  console.log(currUser);
  
  const [classData, setClassData] = useState();
  async function lookupClass() {
    const apiPath = `/api/class/user/${currUser._id}`
    const searchQuery = await fetch(apiPath)
    const results = await searchQuery.json()
    console.log(results)
    setClassData(results)
  }
  useEffect(() => {
    console.log("context use effect working");
    lookupClass();
  }, []);
  return (
    <div style={{ marginTop: "50px", width: "800px" }}>
      <h1 style={{ marginLeft: "10%" }}>Syllabus</h1>
      <br />
      {classData && classData.map(course => (
        <>
          <h2 key={course.class_name}> {course.class_name}</h2>
          <p key={course._id}>{course.syllabus}</p>
        </>
      ))}
    </div>
  );
}

export default SyllabusPage;