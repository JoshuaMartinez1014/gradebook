import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState, useEffect } from "react";
import { useUserContext } from "../ctx/UserContext";

function SubmitedAssignment(props) {
  const { currUser } = useUserContext();
  const [search, setSearch] = useState("");
  const [submitedWork, setSubmitedWork] = useState("");

  const submitAssignment = async () => {
    try {
      console.log(submitedWork);
      const query = await fetch("/api/submited", {
        method: "post",
        body: JSON.stringify(submitedWork),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const result = await query.json();
      console.log(result);
      if (result && result.status === "success") {
        console.log("set");
        props.setPosted(true);
      }
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
    <div
      style={{
        backgroundColor: "white",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)",
      }}
    >
      <h2 style={{}}>{props.data[0]}</h2>
      <div
        style={{
          border: "solid black 2px",
          padding: "15px",
          margin: "15px",
          borderRadius: "15px",
          backgroundColor: "lightGrey",
        }}
      >
        <h3 style={{ borderBottom: "solid 2px black", paddingBottom: "8px" }}>
          Turn In
        </h3>
        <br />
        <Form style={{}}>
          <Form.Control
            style={{
              border: "1px solid #333",
              height: "60px",
              fontSize: "1.4rem",
            }}
            type="text"
            name="search"
            value={search}
            placeholder="insert homework link here..."
            onChange={(e) => {
              setSearch(e.target.value);
              setSubmitedWork({
                submited: e.target.value,
                student: currUser._id,
                assignment: props.data[1],
              });
            }}
          />
          <br />

          <Button variant="primary" onClick={submitAssignment}>
            submit assignment!
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default SubmitedAssignment;
