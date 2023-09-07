import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// Link 컴포넌트를 스타일링하기 위한 커스텀 스타일 컴포넌트 생성
const StyledLink = styled(Link)`
  text-decoration: none; /* 밑줄 제거 */
  color: inherit; /* 파란색 텍스트를 상속하지 않도록 설정 */
  &:hover {
    text-decoration: none; /* 호버 시에도 밑줄 제거 */
  }
`;

const ActivityBox = styled(StyledLink)`
  border: 2px solid grey;
  display: flex;
  margin: 10px;
  width: 250px;
  height: 300px;
  padding: 16px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden; /* 이미지가 컨테이너를 벗어나지 않도록 설정 */
  &:hover {
    background-color: lightgrey;
    cursor: pointer;
  }
`;

const Image = styled.img`
  width: 100%;
  max-height: 60%; /* 이미지의 최대 높이를 설정합니다. */
  object-fit: contain; /* 이미지가 컨테이너에 맞게 비율을 유지하도록 합니다. */
`;

const Name = styled.div`
  font-weight: bold;
  margin-top: 10px;
`;

const Date = styled.div`
  margin-top: 5px;
`;

const ActivityItem = ({ imageSrc, name, startDate, endDate, url }) => {
    const displayDate = () => {
        if (startDate && endDate) {
            return `${startDate} ~ ${endDate}`;
        } else if (startDate || endDate) {
            return startDate || endDate;
        } else {
            return "No date available";
        }
    };

    return (
        <ActivityBox to={url}>
            <Image src={imageSrc} alt={name} />
            <Name>{name}</Name>
            <Date>{displayDate()}</Date>
        </ActivityBox>
    );
};

ActivityItem.propTypes = {
    imageSrc: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    startDate: PropTypes.string,
    endDate: PropTypes.string,
    url: PropTypes.string.isRequired,
};

export default ActivityItem;
