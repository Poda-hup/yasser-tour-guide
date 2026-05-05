import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/pyramids.png"; // تأكد من وضع صورتك بهذا الاسم في الفولدر
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Contact = () => {
  return (
    <section className="contact" id="about">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                   <img src={contactImg} alt="About Yasser" style={{ borderRadius: '30px', boxShadow: '0 20px 40px rgba(0,0,0,0.3)' }} />
                </div>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>About Me</h2>
                  <p>
                    Hi, I'm <strong>Yasser Magdy</strong>. I am a professional licensed Egyptian tour guide with a passion for sharing the wonders of my country.
                  </p>
                  <p>
                    With years of experience in historical and cultural tours, I specialize in making your journey through Egypt—from the Pyramids to the Nile—an unforgettable experience. I don't just show you places; I tell you the stories behind them.
                  </p>
                  
                  {/* إحصائيات سريعة تدي ثقة للسائح */}
                  <div className="about-stats" style={{ display: 'flex', gap: '20px', marginTop: '20px' }}>
                    <div>
                      <h3 style={{ color: '#fff', marginBottom: '0' }}>15+</h3>
                      <span style={{ color: '#B8B8B8', fontSize: '14px' }}>Years Experience</span>
                    </div>
                    <div>
                      <h3 style={{ color: '#fff', marginBottom: '0' }}>500+</h3>
                      <span style={{ color: '#B8B8B8', fontSize: '14px' }}>Successful Tours</span>
                    </div>
                  </div>

                  <div style={{ marginTop: '30px' }}>
                     <button className="vvd" onClick={() => window.location.hash = '#connect'}>
                        <span>Let’s Plan Your Trip</span>
                     </button>
                  </div>
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}