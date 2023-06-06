import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../styles/global.css";

function Footer() {
  return (
    <footer className="footer bg-dark text-center py-3">
      <Container style={{ height: "5px" }}>
        <Row>
          <Col className="text-white">
            &copy; {new Date().getFullYear()} Sean, Belane, Josh, Noah, All
            rights reserved.
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
