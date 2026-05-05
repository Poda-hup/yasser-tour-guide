import meter1 from "../assets/img/world-flag.png";
import meter2 from "../assets/img/united-states.png";
import meter3 from "../assets/img/flag.png";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Languages & Expertise</h2>
                        <p>Experienced in guiding tourists across Egypt with deep knowledge of Egyptian history, culture, and famous attractions.</p>
                        <h5>Historical Tours,  Cultural Tours,  Nile Cruises,  Tour Planning</h5>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter1} alt="Skill image" />
                                <h5>Egyptian (Native)</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Skill image" />
                                <h5>English (Fluent)</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Skill image" />
                                <h5>French (Fluent)</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Skill imageyy" />
    </section>
  )
}
