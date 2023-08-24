import React from "react";
import styled from "styled-components";
import profileimg from "./profile.png"
import gitIcon from "./git.png";

const ManageWrapper = styled.a`
  width: 200px;
  height: 250px;
  text-decoration: none;
  color: black;

  padding: 10px;
  justify-content: center;
  margin: 25px;
  margin-bottom: 0px;
  border-radius: 7px;
  transition: .3s;
  transform-style: preserve-3d;

  &:hover {
    box-shadow: 0px 2px 3px 4px lightgray;
    transform: rotateY(180deg);

  }

`

const ProfileImg = styled.img`
  width: 100%;
  border-radius: 10px;
`
const PositionWrapper = styled.div`
  text-decoration-line: none;
  height: 25px;
  font-size: 22px;
  text-align: center;
  justify-content: center;
  font-family: 'Do Hyeon', sans-serif;
`
const NameWrapper = styled.div`

  font-size: 25px;
 
  letter-spacing: 2px;
  text-align: center;
  font-family: 'Do Hyeon', sans-serif;

`


const NameContainer = styled.div`
  padding: 10px;
  padding-bottom: 0px;

`
const Front = styled.div`
  backface-visibility: hidden;

`
const Back = styled.div`

  position :relative;
  bottom : 40px;
  backface-visibility: hidden;

  transform: rotateY(180deg);

`

const GitImg = styled.img`
  width: 30px;
`

const ManageCard = ({
                        profImg = profileimg,
                        positions = '2기 회장',
                        name = "22학번 민윤기",
                        gitLink = "https://github.com/lims00"
                    }) => {
    return (

            <ManageWrapper href={gitLink}>
                <Front>
                    <ProfileImg src={profImg}/>
                    <NameContainer>
                        <PositionWrapper>{positions} </PositionWrapper>
                        <NameWrapper>{name}</NameWrapper>
                    </NameContainer>
                </Front>
                {/*<Back>
                    <GitImg src={gitIcon}> {gitLink}</GitImg>
                </Back>*/}
            </ManageWrapper>
        );
}

export default ManageCard;