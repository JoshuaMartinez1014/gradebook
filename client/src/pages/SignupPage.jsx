import { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";

function Signup() {
  const [formData, setFormData] = useState();
  function handleChange (e) {
    setFormData({...formData, [e.target.name]: e.target.value})
  }
  function handleSubmit (e) {
    e.preventDefault();

    fetch('http://localhost:3001/api/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    }).then(response => response.json()).then(data=> {
      console.log(data)
    })
  }
  return (
    <>
      <div style={{ marginTop: "50px" }}>
        <h1 style={{ marginLeft: "10%" }}>Signup</h1>
        <Container className="d-flex justify-content-center mt-3">
          <Form className="mt-3" style={{ width: "800px" }} onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>UserName</Form.Label>
              <Form.Control
                type="text"
                name="username"
                onChange={handleChange}
                placeholder="Enter your username"
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

            <Button variant="primary" type="submit">
              Submit
            </Button>
            <br />
            <br />
            <a href="/login">Already Have an Account?</a>
          </Form>
        </Container>
      </div>
    </>
  );
}

export default Signup;
