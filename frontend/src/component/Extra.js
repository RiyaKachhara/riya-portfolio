import { ListGroup, Container,Col ,Row } from "react-bootstrap";

export const Extra = () =>{
    return (
        <section className="extra" id="extra">
            <Container>
                <Row>
                    <Col>
                    <div className="extra-list">
                        <h2>Extra-Curricular</h2>
                        <p>"Beyond the code, explore my engagement in extra-curricular activities. From leadership roles to community involvement, witness my holistic approach to personal and professional development."</p>
                            <ListGroup className="list">
                            <a href="https://drive.google.com/drive/folders/14bPDmRrf1Jv9M2oyf5rhyi75FGB_dGnF?usp=sharing" target="_blank" style={{textDecoration : 'none'}}><ListGroup.Item>Student Mentor at The Counselling and Guidanace Cell,LNMIIT</ListGroup.Item></a> 
                            <a target="_blank" style={{textDecoration : 'none'}}><ListGroup.Item>Member of IEEE Student Branch, LNMIIT</ListGroup.Item></a> 
                            <a target="_blank" style={{textDecoration : 'none'}}><ListGroup.Item>Awarded Best Actress for Intra-college drama competition</ListGroup.Item></a> 


                            </ListGroup>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
      );
}