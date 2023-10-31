import { Container, Nav, Navbar, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./nav-bar.scss";

export const NavBar = ({ user, onLogout }) => {
  return (
    <Navbar collapseOnSelect expand="md" sticky="top">
      <Container className="navbar-container">
        <Col className="col-auto me-auto">
          <Navbar.Brand as={Link} to="/" className="logo">
            <img src={require("../../img/bookFlixTitle.png")} alt="logo" className="align-top logo" />
          </Navbar.Brand>
        </Col>
        <Col className="col-auto burgerContainer align-self-center">
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
              {!user && (
                <>
                  <Nav.Link as={Link} to="/login">
                    Login
                  </Nav.Link>
                  <Nav.Link as={Link} to="/signup">
                    Signup
                  </Nav.Link>
                </>
              )}
              {user && (
                <>
                  {/* <Navbar.Text>
                    <strong>Welcome, {user.username}! </strong>
                  </Navbar.Text> */}
                  <Nav.Link as={Link} to="/">
                    Home
                  </Nav.Link>
                  <Nav.Link as={Link} to="/profile">
                    Profile
                  </Nav.Link>
                  <Nav.Link onClick={onLogout}>Logout</Nav.Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Col>
      </Container>
    </Navbar>
  );
};
