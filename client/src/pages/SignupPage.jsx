import { useState, useEffect } from "react";
import { Container, Form, Button, Alert } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
/* import { SignupPage } from "."; */

function Signup() {
  const [formData, setFormData] = useState({ isTeacher: false });
  const [failLogin, setFailLogin] = useState(false);

  function handleChange(e) {
    if (e.target.name === "role") {
      setFormData({
        ...formData,
        isTeacher: e.target.checked,
      });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  }

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  function handleSubmit(e) {
    e.preventDefault();

    fetch("api/user/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (!response.ok) {
          // If the status code indicates a failed login attempt, set failLogin to true
          setFailLogin(true);
          return;
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        window.location.href = "/";
      });
  }

  return (
    <>
      <div style={{ marginTop: "50px", flexGrow: 0.5, flexBasis: "20%" }}>
        <h1
          style={{
            marginLeft: "1%",
          }}
        >
          Signup
        </h1>
        <Container className="d-flex justify-content-center mt-3">
          <Form
            className="mt-3"
            style={{ width: "800px" }}
            onSubmit={handleSubmit}
          >
            <Form.Group className="mb-3">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                name="fname"
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

            <Form.Group className="mb-3">
              <Form.Check
                type="checkbox"
                id="teacher"
                name="role"
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    isTeacher: e.target.checked,
                  })
                }
                value="true"
                label="Select if Teacher"
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
            {failLogin && (
              <>
                <br />
                <Alert
                  variant="danger"
                  onClose={() => setFailLogin(false)}
                  dismissible
                >
                  {" "}
                  {/* Bootstrap Alert */}
                  Login Failed!
                </Alert>
              </>
            )}
            <br />
            <br />
            <Link to="/login">Already Have an Account?</Link>
          </Form>
        </Container>
      </div>
    </>
  );
}

export default Signup;
