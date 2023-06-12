import { useState } from "react";
import { Container, Form, Button, Alert } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useUserContext } from "../ctx/UserContext";

function Login() {
  const [formData, setFormData] = useState({});
  const [failLogin, setFailLogin] = useState(false);
  const [showAlert, setShowAlert] = useState(true);
  const { logoutAlert, loginAlert, setLoginAlert, setLogoutAlert } =
    useUserContext();
  const navigate = useNavigate();

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
        navigate("/");
      })
      .catch((error) => {
        setFailLogin(true);
        console.log(error);
      });
  }

  /*  .then((response) => response.json())
      .then((data) => {
        console.log(data);
        window.location.href = "/";
      })
      .catch((error) => {
        setFailLogin(true);
        console.log(error);
      }); */

  return (
    <>
      {" "}
      <div style={{ marginTop: "50px", flexGrow: 0.5, flexBasis: "20%" }}>
        {logoutAlert && (
          <Alert
            variant="success"
            onClose={() => setLogoutAlert(false)}
            dismissible
          >
            {" "}
            {/* Bootstrap Alert */}
            Successfully Logged out!
          </Alert>
        )}
        {loginAlert && (
          <Alert
            variant="success"
            onClose={() => setLoginAlert(false)}
            dismissible
          >
            {" "}
            {/* Bootstrap Alert */}
            Please Login Before Accessing the Site!
          </Alert>
        )}
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
            </Button>{" "}
            <br />
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
            <Link to="/signup">Or Sign Up Here!</Link>
          </Form>
        </Container>
      </div>
    </>
  );
}

export default Login;

/* ADD VALUES LATER */
