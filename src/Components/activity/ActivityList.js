import React from 'react';
import styled from 'styled-components';
import ActivityItem from './ActivityItem';

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const ActivityCard = styled.div`
  flex: 0 0 calc(33.33% - 20px);
  margin: 0 15px;
`;

const ActivityList = ({ activity }) => {
    function ShowActivity() {
        let activityList = activity.activityData.read();
        console.log(activityList);
        let activityArray = [];

        if (activityList) {
            for (let i = 0; i < activityList.length; i++) {
                activityArray.push(
                    <ActivityCard key={i}>
                        <ActivityItem
                            imageSrc={activityList[i]["image"]}
                            name={activityList[i]["title"]}
                            startDate={activityList[i]["startDate"]}
                            endDate={activityList[i]["endDate"]}
                        />
                    </ActivityCard>
                );
            }
        }

        return activityArray;
    }

    return (
        <Cards>
            {ShowActivity()}
        </Cards>
    );
};

export default ActivityList;