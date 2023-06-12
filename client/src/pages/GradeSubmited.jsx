import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useUserContext } from "../ctx/UserContext";
import { useState, useEffect } from "react";
import "../styles/global.css";

function GradeSubmitedPage() {
  const { currUser } = useUserContext();
  const [search, setSearch] = useState("");
  const [submitedWork, setSubmitedWork] = useState("");

  const [ungradedData, setUngradedData] = useState();
  async function lookupUngraded() {
    const apiPath = `/api/submited/ungraded`;
    const searchQuery = await fetch(apiPath);
    const results = await searchQuery.json();
    console.log(results);
    setUngradedData(results);
  }

  const submitAssignment = async () => {
    try {
      console.log(submitedWork);
      const query = await fetch("/api/grade", {
        method: "post",
        body: JSON.stringify(submitedWork),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const result = await query.json();
      console.log(result);
      if (result && result.status === "success") {
        window.location.reload();
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    console.log("context use effect working");
    if (currUser && currUser._id) {
      lookupUngraded();
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
        Ungraded Work
      </h1>
      <br />
      {ungradedData &&
        ungradedData.map((submit) => (
          <div
            key={submit._id}
            style={{
              backgroundColor: "white",
              padding: "20px",
              borderRadius: "10px",
              boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)",
            }}
          >
            <h2
              style={{
                borderBottom: "solid black 4px",
                paddingBottom: "16px",
              }}
            >
              {" "}
              {submit.assignment.assignment_name}
            </h2>
            <br />
            <div style={{}}>
              <p>
                Submitted Link:{" "}
                <a href={`//${submit.submited}`}>Student-Link</a>
              </p>

              <Form>
                <Form.Control
                  style={{
                    border: "1px solid #333",
                    height: "60px",
                    fontSize: "1.4rem",
                  }}
                  type="number"
                  name="score"
                  value={search}
                  placeholder="Submit Score"
                  onChange={(e) => {
                    setSearch(e.target.value);
                    setSubmitedWork({
                      grade: e.target.value,
                      student: submit.student,
                      assignment: submit.assignment._id,
                      submitedId: submit._id,
                    });
                  }}
                />{" "}
                <br />{" "}
                <Button variant="primary" onClick={submitAssignment}>
                  submit score!
                </Button>
              </Form>
            </div>
          </div>
        ))}
    </div>
  );
}

export default GradeSubmitedPage;
