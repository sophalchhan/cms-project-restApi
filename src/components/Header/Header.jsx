import { Link } from "react-router-dom";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import logo from "../../asset/image/logo CMS.png";
import "./Header.css";

function Header() {
  return (
    <header>
      {/* ខ្សែខ្មៅខាងលើ មានឡូហ្គោ */}
      <div style={{ backgroundColor: "#f2f6f8ff" }}>
        <Container className="d-flex align-items-center">
          <img
            src={logo}
            alt="CMS Logo"
            style={{ width: "100px", height: "100px" }}
          />
        </Container>
      </div>

      {/* ខ្សែក្រហមខាងក្រោម មានមឺនុយ */}
      <Navbar expand="lg" style={{ backgroundColor: "#0896f4ff" }}>
        <Container>
          <Navbar.Toggle aria-controls="cms-navbar" />
          <Navbar.Collapse id="cms-navbar">
            {/* LEFT SIDE MENU */}
            <Nav className="me-auto align-items-center">
              <Nav.Link 
                as={Link} 
                to="/" 
                className="nav-link-custom text-white fw-bold"
              >
                ទំព័រដើម
              </Nav.Link>
              <Nav.Link 
                as={Link} 
                to="/news" 
                className="nav-link-custom text-white fw-bold"
              >
                ព័ត៌មានថ្មីៗ
              </Nav.Link>
              <Nav.Link 
                as={Link} 
                to="/technology" 
                className="nav-link-custom text-white fw-bold"
              >
                បច្ចេកវិទ្យា
              </Nav.Link>
              <Nav.Link 
                as={Link} 
                to="/sports" 
                className="nav-link-custom text-white fw-bold"
              >
                កីឡា
              </Nav.Link>
              <Nav.Link 
                as={Link} 
                to="/entertainment" 
                className="nav-link-custom text-white fw-bold"
              >
                កម្សាន្ដ
              </Nav.Link>
            </Nav>

            {/* RIGHT SIDE BUTTONS */}
            <div className="d-flex">
              <Button
                as={Link}
                to="/login"
                variant="outline-light"
                className="me-2 fw-bold header-button"
              >
                ចូលគណនី
              </Button>
              <Button
                as={Link}
                to="/register"
                variant="light"
                className="fw-bold text-primary header-button"
              >
                បង្កើតគណនី
              </Button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;