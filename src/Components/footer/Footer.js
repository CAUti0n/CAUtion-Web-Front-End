import React from "react";
import styled from "styled-components"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import {SlLocationPin, SlEnvolope} from "react-icons/sl";

import {SiGithub} from "react-icons/si";

const HallWrapper = styled.div`
  height: 220px;
  background-color: #00b992;
  padding-top: 30px;
  padding-bottom: 40px;
  width:100%;
  margin-top:200px;
 
`
const TitleWrapper = styled.div`
  color: white;
  font-size: 30px;
  font-family: 'Do Hyeon', sans-serif;
  margin-left: 10px;

`
const ContentWrapper = styled.div`
  color: white;
  font-family: 'Do Hyeon', sans-serif;
  font-size: 20px;
  padding-top: 10px;
`
const Icon = styled.div`
  width: 30px;
`
const Footer = () => {
    return (
        <HallWrapper>

            <Container>
                <Row>
                    <Col xs={1} md={2}></Col>
                    <Col md={8}>
                        <TitleWrapper>
                            Get In Touch
                        </TitleWrapper>
                        <ContentWrapper>
                            <SlLocationPin
                                style={{"color": "white", "margin": "5px", "width": "25px", "height": "25px","margin-right":"10px"}}/>
                            Chung-Ang Univ. Computer Science & Engineering
                            <br/>
                            <SlEnvolope style={{"color": "white", "margin": "5px", "width": "25px", "height": "25px","margin-right":"10px"}}/>
                            2021caution@gmail.com
                            <br/>
                            <SiGithub style={{"color": "white", "margin": "5px", "width": "25px", "height": "25px","margin-right":"10px"}}/>
                            https://github.com/CAUti0n
                        </ContentWrapper>

                    </Col>
                </Row>
            </Container>
        </HallWrapper>
    );
}


export default Footer;