import React from 'react'
import Nav from '../../Components/Nav'
import Title from "../../Components/title/Title";
import styled from "styled-components";
import StudyCard from "../../Components/study/StudyCard";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "../../Components/footer/Footer";

const Wrapper = styled.div`
  position: relative;

  display: block;
  justify-content: center;
  align-content: center;
`
const Year = styled.div`
  display:flex;
  font-size: 35px;
  font-weight: bold;
  padding-left: 3px;
  margin-left:auto;
  margin-right: auto;
  width:784px;
  align-items:initial;
  justify-content: initial;  
  
`
const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 784px;
  margin-left:auto;
  margin-right: auto;

  margin-bottom: 100px;
  

`
const Study = ({props}) => {
    return (
        <div>

            <Nav/>
            <Title props={'Study'} style={{"margin-bottom":"0px"}}/>

            <Wrapper>
                <Year>2023-1</Year>
                <Cards>
                    <StudyCard></StudyCard>
                    <StudyCard></StudyCard>
                    <StudyCard></StudyCard>
                    <StudyCard></StudyCard>
                    <StudyCard></StudyCard>
                </Cards>
                <Year>2023-1</Year>
                <Cards>
                    <StudyCard></StudyCard>
                    <StudyCard></StudyCard>
                    <StudyCard></StudyCard>
                    <StudyCard></StudyCard>
                    <StudyCard></StudyCard>
                </Cards>
            </Wrapper>
            <Footer/>
        </div>
    )
}

export default Study
