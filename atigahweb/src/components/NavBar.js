import Container from "react-bootstrap/Container";
import NavBarCss from "../styles/NavBarCss.css";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

function NavBar() {
  return (
    <Navbar bg="light" expand="sm">
      <LinkContainer to="/">
        <Navbar.Brand>Jefferson Atigah</Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="nav-links-right">
          <Nav className="ml-auto">
            <LinkContainer to="/">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/resume">
              <Nav.Link>Resume</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/projects">
              <Nav.Link>Projects</Nav.Link>
            </LinkContainer>
            {/* For external links, no need to use LinkContainer */}
            <Nav.Link href="mailto:jeffersonatigah2000@gmail.com">
              Contact
            </Nav.Link>
          </Nav>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
