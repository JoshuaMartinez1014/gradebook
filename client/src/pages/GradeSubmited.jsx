import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useUserContext } from "../ctx/UserContext";
import { useState, useEffect } from "react";
import "../styles/global.css";

function GradeSubmitedPage() {
  const { currUser } = useUserContext();
  console.log(currUser);

  const [ungradedData, setUngradedData] = useState();
  async function lookupUngraded() {
    const apiPath = `/api/submited/ungraded`;
    const searchQuery = await fetch(apiPath);
    const results = await searchQuery.json();
    console.log(results);
    setUngradedData(results);
  }

  useEffect(() => {
    console.log("context use effect working");
    if (currUser && currUser._id) {
      lookupUngraded();
    }
  }, [currUser]);
  return (
    <div style={{ marginTop: "50px", width: "800px" }}>
      <h1 style={{ marginLeft: "10%" }}>Ungraded Work</h1>
      <br />
      {ungradedData &&
        ungradedData.map((submit) => (
          <div key={submit._id}>
            <h2> {submit.assignment.assignment_name}</h2>
            <p>
              Link to assignment <a href={submit.submited}>LINK</a>
            </p>

            <p>
              data holder {submit.assignment._id} and {submit.student}
            </p>
            <Form>
              <Form.Control
                style={{
                  border: "1px solid #333",
                  height: "60px",
                  fontSize: "1.4rem",
                }}
                type="text"
                name=""
                value=""
                placeholder="Submit Score"
                /* onChange={(e) => {
                  setSearch(e.target.value);
                  setSubmitedWork({
                    submited: e.target.value,
                  });
                }} */
              />{" "}
              <br />{" "}
              <Button variant="primary" /* onClick={submitAssignment} */>
                submit assignment!
              </Button>
            </Form>
          </div>
        ))}
    </div>
  );
}

export default GradeSubmitedPage;
