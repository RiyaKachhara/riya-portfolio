import { Container, Row, Tab ,Col, Nav} from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import av from "../assets/images/weather.png";
import cb from "../assets/images/chat.png";
import rulegirl from "../assets/images/image.png";
import foody from "../assets/images/foody1.jpg"
import ids from "../assets/images/ids.png";
import dl from "../assets/images/dl.png";
export const Project = () => {
    const projects1 = [
        {
            title:"Lynk",
            description: "Connect instantly with real-time messaging, smart presence indicators, and seamless user interactions in a modern chat experience.",
            imgUrl: cb
        },
        {
            title:"Weather Application",
            description: "An intuitive platform providing real-time forecasts and weather insights for locations worldwide.",
            imgUrl: av
        }
    ];
    const projects2 = [
        {
            title:"WhirlWash- Laundry Management System",
            description: "Digitized hostel laundry access with smart booking, fair-use logic, and OTP-verified reservations—making queues and conflicts a thing of the past.",
            imgUrl: rulegirl,
            bgColor: "#f8f9fa" 
        },
        {
            title:"Foody - Food Recipe App",
            description: "Discover, search, and cook with ease—this app brings curated recipes and YouTube tutorials together in one smooth mobile experience.",
            imgUrl: foody
        }
    ];

    const projects3 = [
        {
            title:"Student Academic Dropout and Sucess",
            description: "This data science project explores student academic outcomes through exploratory data analysis. We dived into a comprehensive dataset to uncover patterns, identify key factors influencing success and dropout, and develop insights to guide interventions and support student achievement.",
            imgUrl: ids
        },
        {
            title:"Street Sign Recognition ",
            description: "In this project we developed a deep learning model for recognizing street signs using the GTSRB dataset. We employed a Convolutional Neural Network (CNN) architecture to achieve high accuracy in classifying diverse traffic signs. The model achieved outstanding performance, reaching 99.69% accuracy on the validation set and 97.68% on the test set.",
            imgUrl: dl
        }
    ];
    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                    <h2>Projects</h2>
                    <p>"Explore my diverse portfolio of projects, each a testament to my passion for problem-solving and creativity. From web development to software engineering, discover the impact of my work."</p>
                    <p className="link-dir">Github Link in Navbar and Footer</p>
                    <Tab.Container id="projetcs-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                        <Nav.Item>
                            <Nav.Link eventKey="first">Web Developement</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="second">App Development</Nav.Link>
                        </Nav.Item>
                        {/* <Nav.Item>
                            <Nav.Link eventKey="third">ML/DL</Nav.Link>
                        </Nav.Item> */}
                    </Nav>
                    <Tab.Content>
                        <Tab.Pane eventKey="first">
                            <Row className="justify-content-center mx-auto" style={{ maxWidth: "900px" }}>
                                {
                                projects1.map(
                                    (project,index) => {
                                        return (
                                            <ProjectCard
                                                key={index}
                                                {...project}/>
                                            
                                        )
                                    }
                                )}
                            </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                            
                            <Row className="justify-content-center mx-auto" style={{ maxWidth: "900px" }}>
                                {
                                projects2.map(
                                    (project,index) => {
                                        return (
                                            <ProjectCard
                                                key={index}
                                                {...project}/>
                                            
                                        )
                                    }
                                )}
                            </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="third">
                        
                        <Row className="justify-content-center mx-auto" style={{ maxWidth: "900px" }}>
                                {
                                projects3.map(
                                    (project,index) => {
                                        return (
                                            <ProjectCard
                                                key={index}
                                                {...project}/>
                                            
                                        )
                                    }
                                )}
                            </Row>
                        </Tab.Pane>
                    </Tab.Content>
                    </Tab.Container>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}