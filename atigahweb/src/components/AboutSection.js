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
            Hi, Jeff here, Welcome!
          </h2>
          <p className="text-center">

          Hello from a tech enthusiast who's traveled from West Africa to the UK, eagerly seizing every learning opportunity. I thoroughly enjoyed creating this website, as it allowed me to express my passion for technology and design. My academic journey led me from Glasgow Caledonian University to a Master's at Strathclyde, focusing on coding, machine learning, and web development. <br/>
          My skills span Java, Python, React, the MERN stack, DevOps, and cloud technologies like AWS and Docker. Beyond coding, I delve into artificial intelligence and cloud development.<br></br>
          So, while my story is still unfolding, I'm excited for what the future holds in technology and beyond.
          </p>
          <div className="text-center">
            <Button variant="secondary" href="/projects">
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
