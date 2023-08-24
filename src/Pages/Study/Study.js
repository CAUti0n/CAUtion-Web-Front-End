import React, {useEffect, useState} from "react";
import Nav from "../../Components/Nav";
import Title from "../../Components/title/Title";
import styled from "styled-components";
import StudyCard from "../../Components/study/StudyCard";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../../Components/footer/Footer";
import axios from 'axios';

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
    const [studyList, setStudyList] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const LoadData = async () => {

        try {
            //studyList 비우고
            setStudyList(null);
            //오류도 비우고
            setError(null);
            //loading중임을 표시
            setLoading(true);
            const response = await axios.get("http://localhost:8080/study");
            //날짜 내림차순으로 정렬하고 studyList에 받은 response 넣기
            setStudyList(response.data.sort(function (a, b) {
                return new Date(b.startDate) - new Date(a.startDate);
            }));


        } catch (error) {
            console.log(error);
            setError(error);
        }
        setLoading(false);
    };

    useEffect(() => {
        //studyList 비우고
        LoadData();

    }, []);

    //로딩중 일때 화면

    if (error) return (<h1>ERROR</h1>);
    if (!studyList) return (<h1> nothing</h1>);


    function ShowStudy() {

        const studyYear = {year: studyList[0]["title"].substring(0, 6)};
        //첫번째 year 마진 조절하기 위해서 한 작업 
        let studyArray = [<Year style={{"margin-top": "0px"}}>{studyYear.year}</Year>];



        for (let i = 0; i < studyList.length; i++) {

            {
                studyYear.year === studyList[i]["title"].substring(0, 6) ? studyArray.push() : studyArray.push(
                    <Year>{studyList[i]["title"].substring(0, 6)}
                    </Year>)
            }
            {
                studyYear.year === studyList[i]["title"].substring(0, 6) ? studyArray.push() : studyYear.year = studyList[i]["title"].substring(0, 6)
            }

            studyArray.push(<StudyCard
                img={studyList[i]["image"]}
                studyTitle={studyList[i]["title"].substring(7,)}
                mentor={studyList[i]["mento"]}
                url={studyList[i]["url"]}
            ></StudyCard>);
        }

        return studyArray;
    }


    return (<div>
        <Nav/>
        <Title props={"Study"} style={{"margin-bottom": "0px"}}/>
        <Wrapper>
            <Cards>
                {ShowStudy()}

            </Cards>
        </Wrapper>
        <Footer/>
    </div>);
};

export default Study;
