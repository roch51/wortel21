import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { scroller } from "react-scroll";
const Header = () => {
  const scrollToComponent = (componentId) => {
    scroller.scrollTo(componentId, {
      offset: -50,
    });
  };
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand to="/">
          <img
            alt=""
            src="/wortel01.png"
            width="141"
            height="99"
            className="d-inline-block align-top"
          />{" "}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <NavLink
              className="nav-link-orange nav-link"
              onClick={() => scrollToComponent("home")}
            >
              Beranda
            </NavLink>
            <NavLink
              className="nav-link-orange nav-link"
              onClick={() => scrollToComponent("game")}
            >
              Game
            </NavLink>
            <NavLink
              className="nav-link-orange nav-link"
              onClick={() => scrollToComponent("aboutus")}
            >
              Tentang Kami
            </NavLink>
          </Nav>
          <div className="nav-bar-action">
            <button className="btn-nav btn-wortel-secondary-orange">
              Masuk
            </button>
            <button className="btn-nav btn-wortel-primary-orange">
              Daftar
            </button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
