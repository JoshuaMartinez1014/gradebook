import { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Login() {
  const [formData, setFormData] = useState({});
  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    fetch("/api/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        window.location.href = "/";
      });
  }

  return (
    <>
      <div style={{ marginTop: "50px", flexGrow: 0.5, flexBasis: "20%" }}>
        <h1 style={{ marginLeft: "1%" }}>Login</h1>
        <Container className=" mt-3">
          <Form className="mt-3" style={{}} onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter your email"
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                placeholder="Enter your Password"
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
            <br />
            <br />
            <Link to="/signup">Or Sign Up Here!</Link>
          </Form>
        </Container>
      </div>
    </>
  );
}

export default Login;

/* ADD VALUES LATER */
