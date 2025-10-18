import { Container, Row, Col } from "react-bootstrap";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaTiktok,
  FaTelegramPlane,
} from "react-icons/fa";

import logo from "../../asset/image/logo CMS.png"; // your logo path
import "./Footer.css"

function Footer() {
  return (
    <footer className="bg-light text-bark pt-5">
      <Container>
        <Row className="mb-4">
          {/* LOGO */}
          <Col md={3} className="mb-3">
            <img src={logo} alt="CMS Logo" style={{ width: "120px" }} />
            <p className="mt-2">© 2025 CMS | All Rights Reserved</p>
            <p>
              <a href="/privacy" className="text-bark text-decoration-none">
                Privacy Policy
              </a>
            </p>
          </Col>

          {/* ABOUT */}
          <Col md={5} className="mb-3">
            <h5>អំពីយើង</h5>
            <p className="text-bark">
              CMS ជាវេទិកាប្រព័ន្ធគ្រប់គ្រងមាតិកាសម្រាប់បង្កើត និងចែកចាយព័ត៌មានថ្មីៗ។
            </p>
          </Col>

          {/* CONTACT & SOCIAL */}
          <Col md={4} className="mb-3">
            <h5>ទំនាក់ទំនង</h5>
            <p className="text-bark mb-2">info@cms.com</p>
            <p className="text-bark mb-2">023 228 000</p>

            <div className="d-flex gap-3 mt-2">
              <a href="https://facebook.com" className="text-bark fs-5 footer-icon">
                <FaFacebookF />
              </a>
              <a href="https://instagram.com" className="text-bark fs-5 footer-icon">
                <FaInstagram />
              </a>
              <a href="https://youtube.com" className="text-barke fs-5 footer-icon">
                <FaYoutube />
              </a>
              <a href="https://tiktok.com" className="text-bark fs-5 footer-icon">
                <FaTiktok />
              </a>
              <a href="https://telegram.org" className="text-bark fs-5 footer-icon">
                <FaTelegramPlane />
              </a>
            </div>

          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
