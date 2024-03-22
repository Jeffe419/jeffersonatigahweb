import React from "react";
import { Button, Row, Col } from "react-bootstrap";
import ProfilePicture from "../images/ProfilePicture.jpg";
import "../styles/AboutSection.css";
// Import useNavigate from react-router-dom
import { useNavigate } from "react-router-dom";

const AboutSection = () => {
  // Instantiate the navigate function
  const navigate = useNavigate();

  // Create a function to handle the button click
  const handleProjectsClick = () => {
    navigate('/projects'); // Navigate to the Projects page
  };

  return (
    <section className="about-section d-flex">
      <Row>
        <Col
          xs={12}
          md={6}
          className="d-flex flex-column justify-content-center align-items-center"
        >
          <h2 className="text-center font-weight-bold">Hi, Jeff here, Welcome!</h2>
          <p className="text-center">
            Hello from a tech enthusiast who's traveled from West Africa to the UK, eagerly seizing every learning opportunity...
          </p>
          <div className="text-center">
          
            <Button variant="secondary" onClick={handleProjectsClick}>
              See my projects
            </Button>
          </div>
        </Col>
        <Col xs={12} md={6} className="text-center">
          <img
            src={ProfilePicture}
            alt="Profile Picture"
            className="img-fluid rounded-circle mx-auto d-block"
          />
        </Col>
      </Row>
    </section>
  );
};

export default AboutSection;
