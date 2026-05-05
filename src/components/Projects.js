import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/Screenshot 2026-05-04 182726.png";
import projImg2 from "../assets/img/Screenshot 2026-05-04 223606.png";
import projImg3 from "../assets/img/Screenshot 2026-05-04 223702.png";
import projImg4 from "../assets/img/Screenshot 2026-05-05 003436.png";
import projImg5 from "../assets/img/Screenshot 2026-05-04 223718.png"; 
import projImg6 from "../assets/img/Screenshot 2026-05-05 003352.png";    
import projImg7 from "../assets/img/Screenshot 2026-05-04 204427.png";                       
import projImg8 from "../assets/img/Screenshot 2026-05-04 204442.png";                       
import projImg9 from "../assets/img/Screenshot 2026-05-05 033145.png";   
import projImg10 from "../assets/img/Screenshot 2026-05-05 033116.png";                       
import projImg11 from "../assets/img/Screenshot 2026-05-05 032950.png";                       
import projImg12 from "../assets/img/Screenshot 2026-05-05 033510.png";
import projImg13 from "../assets/img/Screenshot 2026-05-05 053454.png";
import projImg14 from "../assets/img/Screenshot 2026-05-05 053632.png";
import projImg15 from "../assets/img/Screenshot 2026-05-05 054328.png";
import projImg16 from "../assets/img/Screenshot 2026-05-05 053608.png";
import projImg17 from "../assets/img/Screenshot 2026-05-05 053803.png";
import projImg18 from "../assets/img/Screenshot 2026-05-05 062527.png";


import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Pyramids of Giza Tour",
      description: "Explore the Great Pyramids and discover the secrets of ancient Egypt with a professional guide.",
      imgUrl: projImg1,
    },
    {
      title:"Pyramids of Giza Tour",
      description: "Explore the Great Pyramids and discover the secrets of ancient Egypt with a professional guide.",
      imgUrl: projImg2,
    },
    {
      title: "Pyramids of Giza Tour",
      description: "Explore the Great Pyramids and discover the secrets of ancient Egypt with a professional guide.",
      imgUrl: projImg3,
    },
    {
      title: "Pyramids of Giza Tour",
      description: "Explore the Great Pyramids and discover the secrets of ancient Egypt with a professional guide.",
      imgUrl: projImg4,
    },
    {
      title: "Pyramids of Giza Tour",
      description: "Explore the Great Pyramids and discover the secrets of ancient Egypt with a professional guide.",
      imgUrl: projImg5,
    },
    {
      title: "Pyramids of Giza Tour",
      description: "Explore the Great Pyramids and discover the secrets of ancient Egypt with a professional guide.",
      imgUrl: projImg6,
    },
]

/////////////////////////////////////
const George_Church =[
  {
    title: "St. George Church",
    description: "Experience a real tour with professional explanation and interaction.",
    imgUrl: projImg7, 
  },
  {
    title: "St. George Church",
    description: "Experience a real tour with professional explanation and interaction.",
    imgUrl: projImg8, 
  },
  {
    title: "St. George Church",
    description: "Experience a real tour with professional explanation and interaction.",
    imgUrl: projImg9, 
  },
  {
    title: "St. George Church",
    description: "Experience a real tour with professional explanation and interaction.",
    imgUrl: projImg10, 
  },
  {
    title: "St. George Church",
    description: "Experience a real tour with professional explanation and interaction.",
    imgUrl: projImg11, 
  },
  {
    title: "St. George Church",
    description: "Experience a real tour with professional explanation and interaction.",
    imgUrl: projImg12, 
  },]
////////////////////////////////////////////
  
const Other_Tours = [
  {
    title: "Unforgettable Experiences",
    description: "Explore a variety of unique tours across Egypt, from the Nile and ancient temples to vibrant cities and real local moments.",
    imgUrl: projImg13, 
  },
  {
    title: "Unforgettable Experiences",
    description: "Explore a variety of unique tours across Egypt, from the Nile and ancient temples to vibrant cities and real local moments.",
    imgUrl: projImg14, 
  },
  {
    title: "Unforgettable Experiences",
    description: "Explore a variety of unique tours across Egypt, from the Nile and ancient temples to vibrant cities and real local moments.",
    imgUrl: projImg15, 
  },
  {
    title: "Unforgettable Experiences",
    description: "Explore a variety of unique tours across Egypt, from the Nile and ancient temples to vibrant cities and real local moments.",
    imgUrl: projImg16, 
  },
  {
    title: "Unforgettable Experiences",
    description: "Explore a variety of unique tours across Egypt, from the Nile and ancient temples to vibrant cities and real local moments.",
    imgUrl: projImg17, 
  },
  {
    title: "Unforgettable Experiences",
    description: "Explore a variety of unique tours across Egypt, from the Nile and ancient temples to vibrant cities and real local moments.",
    imgUrl: projImg18, 
  }
  
]
;
   

  
  

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Featured Tours</h2>
                <p>Explore the best tours across Egypt, from the Pyramids of Giza to Luxor and Aswan, guided by a professional and experienced tour guide.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Pyramids</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">St. George Church</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Other Tours</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Row>
                        {
                          George_Church.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                    </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <Row>
                    {
                          Other_Tours.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img alt="Project Thumbnail" className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
