import { Container, Form, Button } from "react-bootstrap";

function Signup() {
  return (
    <>
      <div style={{ marginTop: "50px" }}>
        <h1 style={{ marginLeft: "10%" }}>Signup</h1>
        <Container className="d-flex justify-content-center mt-3">
          <Form className="mt-3" style={{ width: "800px" }}>
            <Form.Group className="mb-3">
              <Form.Label>UserName</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control type="email" placeholder="Enter your Password" />
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
