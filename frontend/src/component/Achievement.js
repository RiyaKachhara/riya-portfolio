import { Container, Row ,Col} from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import leetcode from "../assets/images/leetcode.png";
import coding from "../assets/images/coding.png";
import WE from "../assets/images/WE.png";
import codess from "../assets/images/codess_cafe.png"
import nodebrew from "../assets/images/nodebrew.png"

export const Achievement = ()=>{
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
      const data = [
        { image: leetcode, title: "Leetcode" ,description :"Achieved the Highest Contest Rating of 1551"},
        { image: coding, title: "Coding Platforms", description :"Solved 650+ question across various coding platforms"},
        { image: codess, title: "Codess Cafe", description :"Selected among 1000+ applicants for this elite Mentorship Program for women in tech" },
        { image: WE, title: "Women Engineers Scholar", description :"Among the top 1% of scholars out of 22,000+ eligible applicants & received a 100% program & rewarding scholarship by Talentsprint & Google" },
        { image: nodebrew, title: "Brew Bridge Program" ,description :"Choosen as a volunteer and mentee by NodeBrew out of 1500+ applicants"},
      ];
    return (
        <section className="achievement" id="achievement">
            <Container>
                <Row>
                    <Col>
                        <div className="achievement-bx">
                            <h2>Achievements</h2>
                            <p>"Discover my achievements, a culmination of dedication and excellence. From academic milestones to impactful Ratings, each accomplishment reflects my commitment to continuous growth and delivering exceptional results."</p>
                            <Carousel responsive={responsive} infinite={true} className="achievement-slider">
                                
                                {data.map((achievement, index) => (
                                    <div key={index} className="ach-img">
                                        <img src={achievement.image} alt={achievement.title} />
                                        <h5>{achievement.title}</h5>
                                        <div className= "ach-des">
                                            <span>{achievement.description}</span>
                                        </div>
                                    </div>
                                ))}
                                
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
        
    )      
    
}