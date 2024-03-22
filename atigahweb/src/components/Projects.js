import React from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import cookeryapp from'../images/CookeryApp.png';
import SearchnA from'../images/SearchnAi.png';
import pay from'../images/Find-my-pay.png';
import CelebrityRecognition from '../images/CelebrityRecognition.png';
import '../styles/Projects.css';

const Projects = () => {
  return (
    <section className="projects-section mt-5">
      <Row>
        {/* Cookery App */}
        <Col md={6}>
          <Card>
            <Card.Img variant="top" src={cookeryapp} alt="Cookery App" />
            <Card.Body>
              <Card.Title>Cookery App</Card.Title>
              <Card.Text>
              A cooking app that finds recipes and ingredients through an API, hosted on Firebase for quick and easy use.
              </Card.Text>
              <Button variant="primary" href="https://cookeryappfewd.web.app/">
                Visit Website
              </Button>
              <Button variant="secondary" href="https://github.com/Jeffe419/cookeryapp.git" className="ml-2">
                GitHub Repo
              </Button>
            </Card.Body>
          </Card>
        </Col>
        
        {/*Goblee*/}
        <Col md={6}>
          <Card>
            <Card.Img variant="top" src={SearchnA} alt="Goblee" />
            <Card.Body>
              <Card.Title>Goblee</Card.Title>
              <Card.Text>
              Goblee is hosted on Firebase with back-end services powered by Google Cloud, offering a unified search experience by combining Google and Bing. It features an OpenAI-powered chatbot.
              </Card.Text>
              <Button variant="primary" href="https://goblee.web.app/">
                Visit Website
              </Button>
              <Button variant="secondary" href="https://github.com/Jeffe419/goble.git" className="ml-2">
                GitHub Repo
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        {/* Find My Pay  */}
        <Col md={6}>
          <Card>
            <Card.Img variant="top" src={pay} alt="Find My Pay" />
            <Card.Body>
              <Card.Title>Find My Pay</Card.Title>
              <Card.Text>
              FindPay is an app that searches for jobs as you type, showing titles, descriptions, and salaries. It uses an API to get the latest job information and displays it neatly. Users can see job details and estimated yearly earnings quickly and easily.
              </Card.Text>
              <Button variant="primary" href="https://find-my-pay.web.app/">
                Visit Website
              </Button>
              <Button variant="secondary" href="#" className="ml-2">
                GitHub Repo
              </Button>
            </Card.Body>
          </Card>
        </Col>
        
        {/* Celebrity Recognition */}
        <Col md={6}>
          <Card>
            <Card.Img variant="top" src={CelebrityRecognition} alt="Project 2" />
            <Card.Body>
              <Card.Title>Celebrity Recognition Project</Card.Title>
              <Card.Text>
              In a university project, I developed a Celebrity Recognition application using AWS Rekognition for  image processing, Boto3 SDK for AWS service integration including EC2, S3, DynamoDB, and CloudFormation for streamlined resource setup. This architecture utilized Lambda functions activated by SNS for image analysis, updating a DynamoDB database, and API Gateway for efficient data access.
              </Card.Text>
  
              <Button variant="secondary" href="https://github.com/Jeffe419/CPDs1918454.git" className="ml-2">
              GitHub Repo
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
          
    </section>
  );
};

export default Projects;
