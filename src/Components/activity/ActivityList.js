import React from 'react';
import styled from 'styled-components';
import ActivityItem from './ActivityItem';

const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(250px, 1fr));
  gap: 85px;
  justify-content: center;
`;
const ActivityCard = styled.div`
  flex: 0 0 calc(33.33% - 20px);
  margin: 0 15px;
  -webkit-user-select:none;
  -moz-user-select:none;
  -ms-user-select:none;
  user-select:none;
`;



const NoActivityMessage = styled.p`
  text-align: center;
  margin: 20px 0;
  font-weight: bold;
`;

const ActivityList = ({ year, activity }) => {
    function groupActivitiesByYear(activities) {
        const groupedActivities = {};

        activities.forEach((activity) => {
            const activityYear = activity.startDate.substring(0, 4); // 연도 추출
            if (!groupedActivities[activityYear]) {
                groupedActivities[activityYear] = [];
            }
            groupedActivities[activityYear].push(activity);
        });

        return groupedActivities;
    }

    const activityList = activity.activityData.read();
    const groupedActivities = groupActivitiesByYear(activityList);

    const yearActivities = groupedActivities[year] || []; // 연도에 해당하는 활동 배열이 없을 경우 빈 배열로 초기화

    return (
        <div>
            {yearActivities.length > 0 ? (
                <Cards>
                    {yearActivities.map((activity, index) => (
                        <ActivityCard key={index}>
                            <ActivityItem
                                imageSrc={activity.image}
                                name={activity.title}
                                startDate={activity.startDate}
                                endDate={activity.endDate}
                                url={activity.url}
                            />
                        </ActivityCard>
                    ))}
                </Cards>
            ) : (
                <NoActivityMessage>Activity가 없습니다.</NoActivityMessage>
            )}
        </div>
    );
};

export default ActivityList;
