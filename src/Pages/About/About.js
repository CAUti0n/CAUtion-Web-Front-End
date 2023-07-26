import React from 'react'

import Nav from '../../Components/Nav'
import Title from '../../Components/title/Title'
import SubTitle from "../../Components/subTitle/SubTitle";
import MainWrapper from "../../Components/MainWrapper/MainWrapper";
import styled from "styled-components";

const Wrapper = styled.div`
    margin : 5px;
    font-family: 'Montserrat';
    font-size: 15px;
    line-height: 20px;
    font-weight: 700;
    color:black;
`
const Container=styled.div`
  margin-top:20px;
  margin-bottom:80px;
`
const About = () => {


  return (
      <>
          <Nav/>
          <Title props={'About'}/>
          <MainWrapper>
              {
                  <>
                    <SubTitle props={'\'CAUtion\'은..'}/>
                      <Container>
                        <Wrapper>컴퓨터 보안 및 정보 보안을 공부하는 학생들이 활동하는</Wrapper>
                        <Wrapper>중앙대학교 소프트웨어학부 학과 동아리입니다.</Wrapper>
                        <Wrapper>동아리 명칭인 ‘CAUtion’은 주의/경고/예방/조심을 의미하는 ‘caution’ 단어에서</Wrapper>
                        <Wrapper>중앙대학교를 의미하는 ‘CAU’를 강조하여 만들어졌습니다.</Wrapper>
                      </Container>
                    <SubTitle props={'주요활동'}/>
                      <Container>
                        <Wrapper>보안 분야별 (System Hacking, Web Hacking, Reverse Engineering, ryptography 등)</Wrapper>
                        <Wrapper>내·외부 보안 컨퍼런스 및 세미나 참여, CTF 및 Wargame 문제 풀이, CTF 개최,</Wrapper>
                      <Wrapper>BoB(Best of the Best) 및 각종 보안 자격증 준비 등을 진행과 기획하고 있습니다.</Wrapper>
                      </Container>
                </>
              }
          </MainWrapper>
          </>
  )
}

export default About
