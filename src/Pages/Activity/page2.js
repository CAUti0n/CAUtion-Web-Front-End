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

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -15px; // 페이지 양 끝 여백 보정
`;

const ActivityCard = styled.div`
  flex: 0 0 calc(33.33% - 20px); // 카드 너비와 여백 보정
  margin: 0 15px; // 카드 사이 여백
`;

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
        <Cards>
            {activities.map((activity, index) => (
                <ActivityCard key={activity.id}>
                    <ActivityItem
                        imageSrc={activity.imageSrc}
                        name={activity.name}
                        startDate={activity.startDate}
                        endDate={activity.endDate}
                    />
                </ActivityCard>
            ))}
        </Cards>

    );
};

export default ActivityPage1;