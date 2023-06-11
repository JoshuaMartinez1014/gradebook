import React from "react";
import { Table, Container } from "react-bootstrap";
import { useUserContext } from "../ctx/UserContext";
import { useState, useEffect } from "react";
import "../styles/global.css";

function GradesPage() {
  const { currUser } = useUserContext();
  console.log(currUser);
  const [gradeData, setgradeData] = useState();
  async function lookupGrade() {
    const apiPath = `/api/class/user/${currUser._id}`;
    const searchQuery = await fetch(apiPath);
    const results = await searchQuery.json();
    console.log(results);
    setgradeData(results);
  }

  function getGradeColor(grade) {
    const red = Math.round((255 * (100 - grade)) / 100);
    const green = Math.round((255 * grade) / 100);
    return `rgb(${red}, ${green}, 0)`;
  }

  useEffect(() => {
    console.log("context use effect working");
    if (currUser && currUser._id) {
      lookupGrade();
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
        Grades
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
        {gradeData &&
          gradeData.map((grade) => (
            <>
              <div key={grade._id}>
                <h2 style={{}}> {grade.class_name}</h2>
                <div style={{}}>
                  {grade.assignment.map((hw) => (
                    <div
                      style={{
                        backgroundColor: "lightGrey",
                        padding: "10px",
                        borderRadius: "15px",
                      }}
                      key={hw._id}
                    >
                      <h3 style={{}}>{hw.assignment_name}</h3>
                      {hw.grade.map((score) => (
                        <>
                          <p
                            key={score._id}
                            style={{
                              backgroundColor: getGradeColor(score.grade),
                              padding: "10px",
                              borderRadius: "15px",
                            }}
                          >
                            Score {score.grade}
                          </p>
                        </>
                      ))}{" "}
                    </div>
                  ))}
                </div>
              </div>
              <br />
            </>
          ))}
      </div>
    </div>
  );
}

export default GradesPage;
