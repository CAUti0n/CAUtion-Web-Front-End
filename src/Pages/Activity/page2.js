import React from 'react'

import Nav from '../../Components/Nav'
import Title from "../../Components/title/Title";
import styled from "styled-components";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "../../Components/footer/Footer";
import ActivityItem from '../../Components/card/ActivityItem';


const Wrapper = styled.div`
  padding-right: 100px;
  padding-left: 100px;
`
const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;

`
const activities = [
    {
        id: 1,
        imageSrc: '/img/sample_1.png',
        name: 'DEVIEW CAMPUS 2023',
        startDate: '2023-08-10',
        endDate: '2023-08-15',
    },
    {
        id: 2,
        imageSrc: '/img/sample_2.png',
        name: 'DEVIEW CAMPUS 2023',
        startDate: '2023-08-15',
    },
    {
        id: 3,
        imageSrc: '/img/sample_3.png',
        name: '한강 나들이',
        endDate: '2023-08-15',
    },
    {
        id: 4,
        imageSrc: '/img/sample_3.png',
        name: '와아',
        date: '2023-08-15',
    },
];
const ActivityPage1 = () => {
    return (
        <div>

            <Nav />
            <Title props={'2022'}/>
            <Container>
                <Row>
                    <Col xs={1} md={2}></Col>
                    <Col md={8}>
                        <Wrapper>
                            <Cards>
                                {activities.map((activity, index) => (
                                    <div key={activity.id} className="col-md-6">
                                        <ActivityItem
                                            imageSrc={activity.imageSrc}
                                            name={activity.name}
                                            startDate={activity.startDate}
                                            endDate={activity.endDate}
                                        />
                                    </div>
                                ))}
                            </Cards>
                        </Wrapper>
                    </Col>
                </Row>
            </Container>
            <Footer/>

        </div>
    );
};

export default ActivityPage1;