import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import navIcon4 from "../assets/img/gemini-svg (4).svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <h1>Guide</h1>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/yasser-magdi-a79ab4356/"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://www.facebook.com/share/18dYXdT3oP/"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://www.instagram.com/yasser_private_egypt_guide?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="><img src={navIcon3} alt="Icon" /></a>
              <a href="https://www.instagram.com/yasser_private_egypt_guide?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="><img src={navIcon4} alt="Icon" /></a>
            </div>
            <p>Egyptian Tour Guide - Yasser magdi Abdelazem © 2026 </p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
