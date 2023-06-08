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
    const apiPath = `/api/class/user/${currUser._id}`
    const searchQuery = await fetch(apiPath)
    const results = await searchQuery.json()
    console.log(results)

    setgradeData(results)
  }
  useEffect(() => {
    console.log("context use effect working");
    lookupGrade();
  }, []);
  return (
    <div style={{ marginTop: "50px", width: "800px" }}>
      <h1 style={{ marginLeft: "10%" }}>Grades</h1>
      <br />
      {gradeData && gradeData.map(grade => (
        <>
          <h2 key={grade._id}> {grade.class_name}</h2>
          {grade.assignment.map(hw => (
            <>
              <h3 key={hw._id}>{hw.assignment_name}</h3>
              {hw.grade.map(score => (
                <p key={score._id}>Score {score.grade}</p>
              ))}
            </>
          ))}
        </>
      ))}
      
      <Container className="d-flex justify-content-center">
        <Table striped bordered className="grades-table">
          <thead>
            <tr>
              <th>Math</th>
              <th>English</th>
              <th>Science</th>
              <th>History</th>
              <th>Computer Science</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Row 1</td>
              <td>Row 1</td>
              <td>Row 1</td>
              <td>Row 1</td>
              <td>Row 1</td>
            </tr>
            <tr>
              <td>Row 2</td>
              <td>Row 2</td>
              <td>Row 2</td>
              <td>Row 2</td>
              <td>Row 2</td>
            </tr>
            <tr>
              <td>Row 3</td>
              <td>Row 3</td>
              <td>Row 3</td>
              <td>Row 3</td>
              <td>Row 3</td>
            </tr>
            <tr>
              <td>Row 4</td>
              <td>Row 4</td>
              <td>Row 4</td>
              <td>Row 4</td>
              <td>Row 4</td>
            </tr>
            <tr>
              <td>Row 5</td>
              <td>Row 5</td>
              <td>Row 5</td>
              <td>Row 5</td>
              <td>Row 5</td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </div>
  );
}

export default GradesPage;
