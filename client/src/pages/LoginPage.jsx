import { Container, Form, Button } from "react-bootstrap";

function Login() {
  return (
    <>
      <div style={{ marginTop: "50px", flexGrow: 0.5, flexBasis: "20%" }}>
        <h1 style={{ marginLeft: "1%" }}>Login</h1>
        <Container className=" mt-3">
          <Form className="mt-3" style={{}}>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter your Password"
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
            <br />
            <br />
            <a href="/signup">Or Sign Up Here!</a>
          </Form>
        </Container>
      </div>
    </>
  );
}

export default Login;
