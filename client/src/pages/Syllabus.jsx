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
    if (currUser && currUser._id) {
      lookupClass();
    }
  }, [currUser]);

  return (
    <div
      style={{
        marginTop: "50px",
        width: "800px",
      }}
    >
      <h1
        style={{
          backgroundColor: "#212529",
          border: "solid black 4px",
          padding: "20px",
          borderRadius: "10px",
          textAlign: "center",
          color: "white",
          boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)",
        }}
      >
        Syllabus
      </h1>
      <br />
      <div
        style={{
          backgroundColor: "white",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)",
        }}
      >
        {classData &&
          classData.map((course) => (
            <React.Fragment key={course._id}>
              <div style={{}}>
                <h2 style={{ marginBottom: "20px" }}>
                  <strong> {course.class_name}</strong>
                </h2>
                <p>{course.syllabus}</p>
              </div>
            </React.Fragment>
          ))}
      </div>
    </div>
  );
}

export default SyllabusPage;
