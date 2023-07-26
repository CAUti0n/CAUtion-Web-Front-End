
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function MainWrapper(props) {
    return (
        <Container>

            <Row >
                <Col xs={1} md={3}></Col>
                <Col>
                    {props.children}
                </Col>
                <Col xs={1} md={1}></Col>
            </Row>

        </Container>
    );
}

export default MainWrapper;
