import React from 'react'
import Nav from '../../Components/Nav'
import Title from "../../Components/title/Title";
import styled from "styled-components";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import StudyCard from "../../Components/card/StudyCard";
import 'bootstrap/dist/css/bootstrap.min.css';

const Wrapper = styled.div`
  padding-right: 100px;
  padding-left: 100px;

`
const Year = styled.div`
  font-size: 35px;
  font-weight: bold;
  margin : 3px;
`
const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;

`
const Study = ({props}) => {
    return (
        <div>

            <Nav/>
            <Title props={'Study'}/>
            <Wrapper>
                <Container>
                    <Row>
                        <Col xs={1} md={2}></Col>
                        <Col xs={10} md={8}>
                            <Year>
                                2023-1
                            </Year>
                            <Cards>
                                <StudyCard></StudyCard>
                                <StudyCard></StudyCard>
                                <StudyCard></StudyCard>
                                <StudyCard></StudyCard>
                                <StudyCard></StudyCard>
                            </Cards>
                        </Col>
                        <Col md={2}></Col>
                    </Row>
                </Container>
            </Wrapper>
        </div>
    )
}

export default Study
