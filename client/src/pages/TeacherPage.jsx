import React from "react";
import { useUserContext } from "../ctx/UserContext";
import { useState, useEffect } from "react";
import "../styles/global.css";

function TeacherPage() {
  const { currUser } = useUserContext();
  console.log(currUser);
  
  const [teacherData, setTeacherData] = useState();
  async function lookupTeacher() {
    const apiPath = `/api/class/teacher/${currUser._id}`
    const searchQuery = await fetch(apiPath)
    const results = await searchQuery.json()
    console.log(results)
    setTeacherData(results)
  }
  useEffect(() => {
    console.log("context use effect working");
    lookupTeacher();
  }, []);
  return (
    <div style={{ marginTop: "50px", width: "800px" }}>
      <h1 style={{ marginLeft: "10%" }}>Teacher</h1>
      <br />
      {teacherData && teacherData.map(teacher => (
        <>
          <h2 key={teacher._id}> {teacher.class_name}</h2>
          <p key={teacher.teacher._id}>{teacher.teacher.fname} {teacher.teacher.lname}</p>
          <a href = {teacher.teacher.email}>Send Email</a>
        </>
      ))}
    </div>
  );
}

export default TeacherPage;