import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React from 'react'

import styled from "styled-components";
import Nav from '../../Components/Nav'
import Title from "../../Components/title/Title";
import ManageCard from '../../Components/management/ManageCard';
import Footer from '../../Components/footer/Footer';
const Wrapper=styled.div`
display:flex;
justify-content:center;

padding-left:100px;
padding-right:100px;

`
const Management = () => {
    return (
        <div>

            <Nav />

            <Title props={'Management'}/>
            <Container>
                <Row>
                    <Col xs={1} md={2}></Col>
                    <Col md={8}>
                        <Wrapper>
                            {/*props.map((e)=> (<ManageCard />))*/}
                            <ManageCard />
                            <ManageCard />
                            <ManageCard />

                        </Wrapper>
                    </Col>
                </Row>
            </Container>
            <Footer/>
        </div>
    )
}


export default Management
