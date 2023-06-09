import React from "react";
import { useUserContext } from "../ctx/UserContext";
import { useState, useEffect } from "react";
import "../styles/global.css";

function SyllabusPage() {
  const { currUser } = useUserContext();
  console.log(currUser);

  const [classData, setClassData] = useState();
  async function lookupClass() {
    const apiPath = `/api/class/user/${currUser._id}`;
    const searchQuery = await fetch(apiPath);
    const results = await searchQuery.json();
    console.log(results);
    setClassData(results);
  }

  useEffect(() => {
    console.log("context use effect working");
    if( currUser && currUser._id ){
      lookupClass();
    }
  }, [currUser]);

  return (
    <div style={{ marginTop: "50px", width: "800px" }}>
      <h1 style={{ marginLeft: "10%" }}>Syllabus</h1>
      <br />
      {classData &&
        classData.map((course) => (
          <React.Fragment key={course._id}>
            <h2> {course.class_name}</h2>
            <p>{course.syllabus}</p>
          </React.Fragment>
        ))}
    </div>
  );
}

export default SyllabusPage;
