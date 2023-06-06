import React from "react";
import { Table, Container } from "react-bootstrap";
import "../styles/global.css";

function GradesPage() {
  return (
    <div style={{ marginTop: "50px", width: "800px" }}>
      <h1 style={{ marginLeft: "10%" }}>Grades</h1>
      <br />
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
