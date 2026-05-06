import wwVideo from "../assets/video/about.mp4";
import { useRef } from "react";
import { Col, Row } from "react-bootstrap";

export const Newsletter = () => {
  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  // وظيفة لفتح الصوت لما يضغطوا على الفيديو
  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
    }
  };

  return (
    <Col lg={12}>
      <div className="newsletter-bx wow slideInUp">
        <Row className="justify-content-center">
          <Col lg={12} className="text-center">
            
            <div 
              className="video-container" 
              onMouseEnter={handleMouseEnter} 
              onMouseLeave={handleMouseLeave}
              onClick={toggleMute} // يفتح الصوت بالضغط
              style={{ marginBottom: '20px', cursor: 'pointer', position: 'relative' }}
            >
              <video
                ref={videoRef}
                width="60%"
                style={{ borderRadius: '20px', maxWidth: '700px', border: '3px solid #AA367C' }}
                muted // لازم يبدأ كده عشان يرضى يشتغل تلقائي
                loop
                playsInline
              >
                <source src={wwVideo} type="video/mp4" />
              </video>
              
            </div>
          </Col>
        </Row>
      </div>
    </Col>
  );
};