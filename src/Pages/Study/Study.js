import React from "react";
import Nav from "../../Components/Nav";
import Title from "../../Components/title/Title";
import styled from "styled-components";
import StudyCard from "../../Components/study/StudyCard";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../../Components/footer/Footer";


const Wrapper = styled.div`
  position: relative;

  display: block;
  justify-content: center;
  align-content: center;
  min-height: calc(80vh - 160px);
`;

const Year = styled.div`
  display: flex;
  font-size: 35px;
  font-weight: bold;
  padding-left: 3px;
  margin-left: auto;
  margin-right: auto;
  width: 784px;
  align-items: initial;
  justify-content: initial;
  margin-top: 40px;
  color: #559E8E;

  border-bottom: 3px double #559E8E;

`;

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 800px;
  margin-left: auto;
  margin-right: auto;

  margin-bottom: 100px;
`;


const Study = ({props}) => {


    function StudyRepeat() {
        const studyYear = {year: "0"};
        let studyArray = [];
        {/*for (let i = 0; i < studyAPI.length; i++) {
            {
                {
                    studyYear.year === studyAPI[i]["properties"]["Name"]["title"][0]["plain_text"].substring(0, 6) ?
                        studyArray.push() : studyArray.push(
                            <Year>{studyAPI[i]["properties"]["Name"]["title"][0]["plain_text"].substring(0, 6)}
                            </Year>)
                }
                {
                    studyYear.year === studyAPI[i]["properties"]["Name"]["title"][0]["plain_text"].substring(0, 6) ?
                        studyArray.push() : studyYear.year = studyAPI[i]["properties"]["Name"]["title"][0]["plain_text"].substring(0, 6)
                }
            }<Year>2023-1</Year>
            studyArray.push(<StudyCard
               ></StudyCard>);
        */
        }
        return studyArray;
    }

    return (
        <div>
            <Nav/>
            <Title props={"Study"} style={{"margin-bottom": "0px"}}/>
            <Wrapper>
                <Cards>
                    <Year>2023-1</Year>
                    <StudyCard></StudyCard>
                    <StudyCard></StudyCard>
                    <StudyCard></StudyCard>
                    <StudyCard></StudyCard>
                    <StudyCard></StudyCard>
                </Cards>
            </Wrapper>
            <Footer/>
        </div>
    );
};

export default Study;
