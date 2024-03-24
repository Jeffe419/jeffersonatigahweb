import React, { useState, useEffect } from "react";
import { Button, Container } from "react-bootstrap";
import "../styles/AboutSection.css"; // Assuming min-full-height is added here
import { useNavigate } from "react-router-dom";

const Resume = () => {
  const navigate = useNavigate();
  const resumePdfUrl = '/jeffresume.pdf';
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Or your preferred mobile breakpoint
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Container className="my-5 min-full-height">
      {isMobile ? (
        <div className="text-center">
          <Button variant="primary" href={resumePdfUrl} download="JeffResume.pdf">Download Resume</Button>
        </div>
      ) : (
        <div className="d-flex justify-content-center">
          <iframe
            src={resumePdfUrl}
            width="100%"
            height="800px"
            title="Resume"
            className="resume-iframe"
          ></iframe>
        </div>
      )}
    </Container>
  );
};

export default Resume;
