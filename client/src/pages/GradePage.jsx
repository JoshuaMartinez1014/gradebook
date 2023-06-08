import React from "react";
import { Table, Container } from "react-bootstrap";
import { useUserContext } from "../ctx/UserContext";
import { useState, useEffect } from "react";
import "../styles/global.css";

function GradesPage() {
  const { currUser } = useUserContext();
  console.log(currUser);
  const [gradeData, setgradeData] = useState();
  console.log(currUser._id)
  // /user/${currUser._id}
  async function lookupGrade() {
    const apiPath = `/api/grade/user/${currUser._id}`
    const searchQuery = await fetch(apiPath)
    const results = await searchQuery.json()
    console.log(results)
    // const test = results.map(hw => ({ id: hw._id, title: hw.assignment_name, date: hw.due_date }
    // ))
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
        <p key={grade._id}> {grade.assignment.assignment_name} score {grade.grade}</p>
      ))}

      <h2>class</h2>
      <h3>Overall Grade $$$$</h3>
      <p>HW$$$$$ Grade $$$$</p>
      <p>HW$$$$$ Grade $$$$</p>
      <p>HW$$$$$ Grade $$$$</p>
      <p>HW$$$$$ Grade $$$$</p>
      <h2>class</h2>
      <h3>Overall Grade $$$$</h3>
      <p>HW$$$$$ Grade $$$$</p>
      <p>HW$$$$$ Grade $$$$</p>
      <p>HW$$$$$ Grade $$$$</p>
      <p>HW$$$$$ Grade $$$$</p>
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
