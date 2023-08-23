import React, { useState } from 'react';
import styled, { css } from 'styled-components';

const HexagonGridWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width:  800px; /* 각 육각형의 너비와 높이를 합한 값 */
  margin: 0 auto;
  
`;

const HexagonRow = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const HexagonWrapper = styled.div`
  position: relative;
  width: 200px;
  height: 200px;

  margin: 5px; /* 각 육각형 간의 간격 조절 */
  clip-path: polygon(
          50% 0%,
          100% 25%,
          100% 75%,
          50% 100%,
          0% 75%,
          0% 25%
  );
  transition: transform 0.3s;

  &:hover{
      transform: scale(1.1);
      
    }
`;

const Content = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: black;
  font-size: 25px;
  font-weight: bold;
  pointer-events: none;
`;

const About = () => {


    return (
        <HexagonGridWrapper>
            <HexagonRow>
                <HexagonWrapper

                    style={{"margin-left":"215px","margin-bottom":"-40px","background":"#D0B9E7"}}
                >
                    <Content>Welcome<br/>study</Content>
                </HexagonWrapper>
            </HexagonRow>
            <HexagonRow>
                <HexagonWrapper  style={{"margin-top":"0px","margin-bottom":"-40px","background":"#A5E0F9" }}>
                    <Content style={{"font-size":"22px"}}>내.외부 보안<br/> 컨퍼런스<br/>및<br/> 세미나 참여</Content>
                </HexagonWrapper>
                <HexagonWrapper  style={{"margin-top":"0px","margin-bottom":"-40px","background":"#A5BDF9"}}>
                    <Content>다양한 스터디</Content>
                </HexagonWrapper >
                <HexagonWrapper  style={{"margin-top":"0px","margin-bottom":"-40px","background":"#FEBFBF"}}>
                    <Content>보안 분야별 <br/>스터디</Content>
                </HexagonWrapper>
            </HexagonRow>
            <HexagonRow>
                <HexagonWrapper style={{ "margin-left":"-415px","margin-top": "0px", "margin-bottom": "-40px","background":"#D2E6B9"}}>
                    <Content>CTF 및<br/>Wargame<br/>문제풀이</Content>
                </HexagonWrapper>
                <HexagonWrapper style={{"margin-top": "0px", "margin-bottom": "-40px","background":"#FDFBC0"}}>
                    <Content>활동</Content>
                </HexagonWrapper>
            </HexagonRow>
            <HexagonRow>
                <HexagonWrapper style={{"margin-left":"-205px","margin-top": "0px", "margin-bottom": "-40px","background":"#EAF9AF"}}>
                    <Content>CTF개최</Content>
                </HexagonWrapper>
                <HexagonWrapper style={{"margin-top": "0px", "margin-bottom": "-40px","background":"#F9E4AF"}}>
                    <Content style={{"font-size":"22px"}}>BoB 및 각종<br/>보안 자격증 준비</Content>
                </HexagonWrapper>
            </HexagonRow>
        </HexagonGridWrapper>
    );
};

export default About;
