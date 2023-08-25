import React from 'react'
import styled from "styled-components";


import 'bootstrap/dist/css/bootstrap.min.css';
import ActivityItem from '../../Components/card/ActivityItem';

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;


const ActivityCard = styled.div`
  flex: 0 0 calc(33.33% - 20px);
  margin: 0 15px;
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