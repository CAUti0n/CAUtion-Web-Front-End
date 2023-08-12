import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ActivityBox = styled.div`
  border: 2px solid grey;
  display: inline-block;
  margin: 10px;
  width: 250px; /* 원하는 박스 너비 */
  height: 300px; /* 원하는 박스 높이 */
  padding: 16px;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
`;

const Name = styled.div`
  font-weight: bold;
  margin-top: 10px;
`;

const Date = styled.div`
  margin-top: 5px;
`;

const ActivityItem = ({ imageSrc, name, date }) => {
    return (
        <ActivityBox>
            <Image src={imageSrc} alt={name} />
            <Name>{name}</Name>
            <Date>{date}</Date>
        </ActivityBox>
    );
};

ActivityItem.propTypes = {
    imageSrc: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
};

export default ActivityItem;
