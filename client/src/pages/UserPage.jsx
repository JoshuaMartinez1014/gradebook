import React from "react";
import { useUserContext } from "../ctx/UserContext";
import { useState, useEffect } from "react";
import "../styles/global.css";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

function UserPage() {
  const { currUser } = useUserContext();
  console.log(currUser);

  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
  });
  const [userData, setUserData] = useState();

  async function lookupUser() {
    const apiPath = `/api/user/${currUser._id}`;
    const searchQuery = await fetch(apiPath);
    const results = await searchQuery.json();
    console.log(results);
    setUserData(results);
    setFormData(results);
  }

  useEffect(() => {
    console.log("context use effect working");
    if (currUser && currUser._id) {
      lookupUser();
    }
  }, [currUser]);

  return (
    <>
      {" "}
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
          Account Page
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
          <div
            style={{
              backgroundColor: "lightGrey",
              padding: "10px",
              borderRadius: "15px",
            }}
          >
            <h3>First Name:</h3>
            <h4>&nbsp;&nbsp;{formData.fname}</h4>
          </div>
          <br />{" "}
          <div
            style={{
              backgroundColor: "lightGrey",
              padding: "10px",
              borderRadius: "15px",
            }}
          >
            <h3>Last Name:</h3>
            <h4> &nbsp;&nbsp;{formData.lname}</h4>
          </div>
          <br />{" "}
          <div
            style={{
              backgroundColor: "lightGrey",
              padding: "10px",
              borderRadius: "15px",
            }}
          >
            <h3>Email Name:</h3>
            <h4> &nbsp;&nbsp;{formData.email}</h4>
          </div>
          <br />
          <div style={{ textAlign: "right" }}>
            <Link to="/updateuser">
              <Button
                style={{ fontSize: "1.2rem" }}
                variant="primary"
                type="submit"
              >
                Update User
              </Button>
            </Link>{" "}
            &nbsp;&nbsp;
            <Button
              style={{ fontSize: "1.2rem" }}
              variant="danger"
              type="submit"
            >
              Delete User
            </Button>
          </div>
        </div>
      </div>
      {/*  <div className="d-flex flex-column container">
                <h1>hello, {formData.fname} {formData.lname}</h1>
                <Form
                    className="mt-3"
                    onSubmit={handleSubmit}
                >
                    <Form.Group className="mb-3">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control
                            type="text"
                            name="fname"
                            value={formData.fname}
                            onChange={handleChange}
                            placeholder="Enter your first name"
                            required
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control
                            type="text"
                            name="lname"
                            onChange={handleChange}
                            value={formData.lname}
                            placeholder="Enter your last name"
                            required
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="email"
                            name="email"
                            onChange={handleChange}
                            value={formData.email}
                            placeholder="Enter your email"
                            required
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            name="password"
                            onChange={handleChange}
                            placeholder="Enter your Password"
                            required
                        />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div> */}
    </>
  );
}

export default UserPage;
