import StudyCard from "./StudyCard";
import React from "react";
import styled from "styled-components";


const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin-left: auto;
  margin-right: auto;

  margin-bottom: 100px;
  @media screen and (max-width: 370px) {
    padding-left: 20%;
  }
  @media screen and (max-width: 437px) and (min-width: 370px) {
    padding-left: 20%;
  }
  @media screen and (max-width: 470px) and (min-width: 437px) {
    padding-left: 20%;
    padding-right: 5%;
  }
  @media screen and (max-width: 590px) and (min-width: 470px) {
    padding-left: 30%;
    padding-right: 15%;
  }
  @media screen and (max-width: 621px) and (min-width: 590px) {
    padding-left: 35%;
    padding-right: 15%;
  }
  @media screen and (min-width: 621px) and (max-width: 800px) {
    padding-left: 15%;
    padding-right: 5%;
  }
  @media screen and (min-width: 800px) and (max-width: 980px) {
    padding-left: 20%;
    padding-right: 5%;
  }
  @media screen and (min-width: 980px) and (max-width: 1243px) {
    padding-left: 15%;
    padding-right: 5%;
  }
  @media screen and (max-width: 1444px) and (min-width: 1243px) {
    padding-left: 25%;
    padding-right: 10%;
  }
  @media screen and (max-width: 1590px) and (min-width: 1444px) {
    padding-left: 25%;
    padding-right: 20%;
  }
  @media screen and (max-width: 1800px) and (min-width: 1590px) {
    padding-left: 30%;
    padding-right: 20%;
  }
  @media screen and (min-width: 1800px) {
    padding-left: 30%;
    padding-right: 20%;
  }

`;

const Year = styled.div`
  display: flex;
  font-size: 35px;
  font-weight: bold;
  padding-left: 3px;

  margin-left: 3px;
  margin-right: 15%;
  width: 100%;
  align-items: initial;
  justify-content: initial;
  margin-top: 40px;
  color: #559E8E;

  border-bottom: 3px double #559E8E;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none
`;


const StudyList = ({study}) => {

    function ShowStudy() {
        let studyList = study.studyData.read();
        console.log(studyList);
        let studyArray = []
        if (studyList) {

            const studyYear = {year: studyList[0]["title"].substring(0, 6)};
            //첫번째 year 마진 조절하기 위해서 한 작업
            studyArray.push(<Year style={{"margin-top": "0px"}}>{studyYear.year}</Year>);


            for (let i = 0; i < studyList.length; i++) {


                studyYear.year === studyList[i]["title"].substring(0, 6) ? studyArray.push() : studyArray.push(
                    <Year>{studyList[i]["title"].substring(0, 6)}
                    </Year>)


                studyYear.year === studyList[i]["title"].substring(0, 6) ? studyArray.push() : studyYear.year = studyList[i]["title"].substring(0, 6)


                studyArray.push(<StudyCard
                    img={studyList[i]["image"]}
                    studyTitle={studyList[i]["title"].substring(7,)}
                    mentor={studyList[i]["mento"]}
                    url={studyList[i]["url"]}
                ></StudyCard>);
            }

        }

        return studyArray;

    }

    return (
        <Cards>
            {ShowStudy()}
        </Cards>
    )
}

export default StudyList;