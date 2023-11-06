import * as React from "react"
import logo from "../images/logo.svg"
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap"

const NavBar = () => {
  return (
    <Navbar bg="white" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} height="32px" alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavDropdown title="Message Archives" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Read</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Listen</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Watch</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                View by Topic
              </NavDropdown.Item>
              <NavDropdown.Item href="/messages">
                Conferences &amp; Trainings
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar
