import React from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import ProfilePicture from "../images/ProfilePicture.jpg";
import "../styles/AboutSection.css";


const Resume = () => {
 
  const resumePdfUrl = '/jeffresume.pdf'; 
  
  return (
    <Container className="my-5">
     
      <div className="d-flex justify-content-center">
        <iframe 
          src={resumePdfUrl}
          
          width="100%" 
          height="700px" 
          title="Resume" 
          className="resume-iframe" 
        >
        </iframe>
      </div>
    </Container>
  );
};

export default Resume;