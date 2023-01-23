import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import NavBarCss from "../styles/NavBarCss.css";

function NavBar() {
  return (
    <Navbar
      bg="light"
      expand="lg"
      className="d-flex align-items-center py-3 pl-5"
    >
      <div className="left-container">
        <Navbar.Brand href="#home">Jefferson Atigah</Navbar.Brand>
      </div>
      <div className="right-container">
        <Nav className="ml-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#projects">Projects</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>
      </div>
      <Navbar.Toggle aria-controls="basic-navbar-nav" className="d-none" />
      <Navbar.Collapse id="basic-navbar-nav"></Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
