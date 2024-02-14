import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function ColorSchemesExample() {
  return (
    <>
      <div className="nav1">
        <Navbar className="navbar" bg="light" data-bs-theme="light">
          <Container className="navcon">
            <Navbar.Brand href="/">ZENCLOUD-ASCENT</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/">HOME</Nav.Link>
              <Nav.Link href="/about">ABOUT </Nav.Link>
              <Nav.Link href="/contact">CONTACT</Nav.Link>
            </Nav>
            <Nav className="navlog">
              <Nav.Link href="/login">lOGIN</Nav.Link>
              <Nav.Link href="/signup">SIGN UP</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </div>
    </>
  );
}

export default ColorSchemesExample;
