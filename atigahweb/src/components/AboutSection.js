import React from "react";
import { Button, Row, Col } from "react-bootstrap";
import ProfilePicture from "../images/ProfilePicture.jpg";
import "../styles/AboutSection.css";

const AboutSection = () => {
  return (
    <section className="about-section d-flex">
      <Row>
        <Col
          xs={12}
          md={6}
          className="d-flex flex-column justify-content-center align-items-center"
        >
          <h2 className="text-center font-weight-bold">
            Hi, I have been expecting you
          </h2>
          <p className="text-justify">
            I am a software developer with a passion for coding. I am
            particularly interested in frameworks such as React, Next.js, and
            Artificial Intelligence. I am also interested in cloud platform
            development. I am always looking for new challenges and
            opportunities to improve my skills and knowledge.
          </p>
          <div className="text-center">
            <Button variant="secondary" href="#">
              See my projects
            </Button>
          </div>
        </Col>
        <Col xs={12} md={6} className="text-center">
          <img
            src={ProfilePicture}
            alt="Profile Picture"
            className="img-fluid rounded-circle mx-auto d-block"
            width="450"
            height="450"
          />
        </Col>
      </Row>
    </section>
  );
};

export default AboutSection;
