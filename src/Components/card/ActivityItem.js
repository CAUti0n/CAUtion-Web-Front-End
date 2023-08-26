import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ActivityBox = styled.div`
  border: 2px solid grey;
  display: flex;
  margin: 10px;
  width: 250px;
  height: 300px;
  padding: 16px;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: lightgrey;
    cursor: pointer;
  }
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

const ActivityItem = ({ imageSrc, name, startDate, endDate }) => {
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
        <ActivityBox>
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
};

export default ActivityItem;
