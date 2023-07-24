import React from 'react'

import Nav from '../../Components/Nav'

import Title from '../../Components/title/Title'
import SubTitle from "../../Components/subTitle/SubTitle";
import AboutContentContent from "../../Components/about/AboutContent";
import AboutContent from "../../Components/about/AboutContent";


const About = () => {
  return (
      <div>
          <Nav/>
          <Title props={'About'}/>
          <SubTitle props={'\'CAUtion\'은..'}/>
          <AboutContent props={['컴퓨터 보안 및 정보 보안을 공부하는 학생들이 활동하는','중앙대학교 소프트웨어학부 학과 동아리입니다.']}/>
          <SubTitle props={'주요활동         '}/>
      </div>

  )
}

export default About
