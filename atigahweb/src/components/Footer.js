import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="bg-light py-3">
      <Container className="text-center">
        <Row>
          <Col md={12}>
            <p className="text-muted">
              Copyright &copy; Jefferson Atigah {new Date().getFullYear()}
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="d-flex justify-content-center">
            <a
              href="https://www.linkedin.com/in/jefferson-atigah-2709b716a/"
              target="_blank"
              rel="noopener noreferrer"
              className="mr-3"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
              <span>Connect on LinkedIn</span>
            </a>
            <a href="mailto:jeffersonatigah@gmail.com" className="ml-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z" />
              </svg>
              <span>Email me</span>
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
