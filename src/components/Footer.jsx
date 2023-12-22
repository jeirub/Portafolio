import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import navIcon4 from "../assets/img/nav-icon4.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">          
          <Col md={6} className="text-center text-md-end">
            <div className="social-icon">
              <a href="www.linkedin.com/in/jeissonrubio">
                <img src={navIcon1} alt="Icon" />
              </a>              
              <a href="https://wa.me/573107900238">
                <img src={navIcon3} alt="Icon" />
              </a>
              <a href="https://github.com/jeirub">
                <img src={navIcon4} alt="Icon" />
              </a>
            </div>
            <p>Copyright 2023. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
