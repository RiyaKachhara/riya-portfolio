import { Col } from "react-bootstrap";

export const ProjectCard = ({title,description,imgUrl}) => {
    return (
        
            <Col sm={10} md= {6} className="d-flex justify-content-center mb-4">
            <div className="proj-imgbx">
                <img src={imgUrl} alt="related visual" />
                <div className="proj-txtx">
                    <h4>{title}</h4>
                    <span>{description}</span>
                </div>
            </div>
            </Col>
        
    )
}