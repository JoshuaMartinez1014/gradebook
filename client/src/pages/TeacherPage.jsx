import React from "react";
import { useUserContext } from "../ctx/UserContext";
import { useState, useEffect } from "react";
import "../styles/global.css";

function TeacherPage() {
  const { currUser } = useUserContext();
  console.log(currUser);

  const [teacherData, setTeacherData] = useState();
  async function lookupTeacher() {
    const apiPath = `/api/class/teacher/${currUser._id}`;
    const searchQuery = await fetch(apiPath);
    const results = await searchQuery.json();
    console.log(results);
    setTeacherData(results);
  }
  useEffect(() => {
    console.log("context use effect working");
    if (currUser && currUser._id) {
      lookupTeacher();
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
          boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)",
        }}
      >
        Teacher
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
        {teacherData &&
          teacherData.map((teacher) => (
            <React.Fragment key={teacher._id}>
              <h2>
                <strong> {teacher.class_name}</strong>
              </h2>
              <p>
                {teacher.teacher.fname} {teacher.teacher.lname}
              </p>
              <a href={teacher.teacher.email}>Send Email</a>
            </React.Fragment>
          ))}
      </div>
    </div>
  );
}

export default TeacherPage;
