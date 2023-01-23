import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="bg-light py-3">
      <Container>
        <Row>
          <Col md={3}>
            <p className="text-muted">
              Copyright &copy; Jefferson Atigah {new Date().getFullYear()}
            </p>
          </Col>
          <Col md={9} className="d-flex justify-content-end">
            <a href="#home" className="text-muted mr-3">
              Home
            </a>
            <a href="#about" className="text-muted mr-3">
              About
            </a>
            <a href="#projects" className="text-muted mr-3">
              Projects
            </a>
            <a href="#contact" className="text-muted mr-3">
              Contact
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
