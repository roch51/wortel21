import { Container, Nav, Navbar } from "react-bootstrap";
import { scroller } from "react-scroll";
import "./header.css";
const Header = () => {
  const scrollToComponent = (componentId) => {
    scroller.scrollTo(componentId, {
      offset: -50,
    });
  };
  return (
    <Navbar expand="lg" className="navbar-header">
      <Container>
        <Navbar.Brand to="/">
          <img
            alt=""
            src="/themes2/logo2.png"
            width="141"
            height="99"
            className="d-inline-block align-top"
          />{" "}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav variant="underline" defaultActiveKey="/">
            <Nav.Link
              className="nav-link-orange nav-link"
              onClick={() => scrollToComponent("home")}
            >
              Beranda
            </Nav.Link>
            <Nav.Link
              className="nav-link-orange nav-link"
              onClick={() => scrollToComponent("game")}
            >
              Game
            </Nav.Link>
            <Nav.Link
              className="nav-link-orange nav-link"
              onClick={() => scrollToComponent("aboutus")}
            >
              Tentang Kami
            </Nav.Link>
          </Nav>
          <div className="nav-bar-action">
            <button className="btn-nav btn-wortel-secondary-orange">
              Masuk
            </button>
            <button className="btn-nav btn-wortel-primary-white">Daftar</button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
