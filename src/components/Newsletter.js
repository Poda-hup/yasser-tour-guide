import { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";

export const Newsletter = ({ subscribe, status, message }) => {

  return (
      <Col lg={12}>
        <div className="newsletter-bx wow slideInUp">
          <Row className="justify-content-center">
            <Col lg={12} className="text-center">
              <h3>"Have questions about your trip? Chat with me directly for a customized itinerary."</h3>
            </Col>
          </Row>
        </div>
      </Col>
  );
}; 