import { Container, Nav, Navbar } from "react-bootstrap";
import "./nav-bar.scss";

export const NavBar = ({ user, onLogout }) => {
  return (
    <Navbar collapseOnSelect expand="md" className="bg-body-tertiary mb-5" sticky="top">
      <Container className="navbar-container justify-content-between">
        <Nav className="logo">
          {/* Create img for logo then wrap subtitle in navbar.brand */}
          <Navbar.Brand href="/">
            <img src={require("../../img/paperBGLogo.png")} alt="logo" className="align-top" /> Written Worlds
            Brought to Life!
          </Navbar.Brand>
        </Nav>
        <Nav>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Navbar.Text>Welcome, {user.username}</Navbar.Text>
            <Nav.Link href="#">• Account •</Nav.Link>
            <button className="logoutButton" onClick={onLogout}>
              Logout
            </button>
          </Navbar.Collapse>
        </Nav>
      </Container>
    </Navbar>
  );
};
