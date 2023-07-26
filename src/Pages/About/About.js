import React from 'react'

import Nav from '../../Components/Nav'
import Title from '../../Components/title/Title'
import SubTitle from "../../Components/subTitle/SubTitle";
import MainWrapper from "../../Components/MainWrapper/MainWrapper";

const About = () => {


  return (
      <>
          <Nav/>
          <Title props={'About'}/>
          <MainWrapper>
              {
                  <>
                    <SubTitle props={'\'CAUtion\'은..'}/>
                      <div>
                    <div>컴퓨터 보안 및 정보 보안을 공부하는 학생들이 활동하는</div>
                    <div>중앙대학교 소프트웨어학부 학과 동아리입니다.</div>
                    <div>동아리 명칭인 ‘CAUtion’은 주의/경고/예방/조심을 의미하는 ‘caution’ 단어에서</div>
                    <div>중앙대학교를 의미하는 ‘CAU’를 강조하여 만들어졌습니다.</div>
                      </div>
                    <SubTitle props={'주요활동'}/>
                </>
              }
          </MainWrapper>
          </>
  )
}

export default About
