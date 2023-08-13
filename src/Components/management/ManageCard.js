import React from "react";
import styled from "styled-components";
import profileimg from "./profile.png"
import gitIcon from "./git.png"

const ManageWrapper = styled.div`
  width: 200px;
  
  height: 300px;
  padding: 10px;
  justify-content: center;
  margin:25px;

  border-radius: 7px;
  &:hover{
    box-shadow: 0px 2px 3px 4px lightgray;
  }
  
`

const ProfileImg = styled.img`
  width:100%;
  border-radius: 10px;
`
const PositionWrapper = styled.div`
  height: 25px;
  font-size: 22px;
  text-align: center;
  justify-content: center;
  font-family: 'Do Hyeon', sans-serif;
`
const NameWrapper = styled.div`
  
  font-size: 25px;
  font-weight: bold;
  letter-spacing: 2px;
  text-align: center;
  font-family: 'Do Hyeon', sans-serif;
  
`
const GitImg = styled.img`
  width: 30px;
`

const NameContainer = styled.div`
  padding: 10px;

`


const ManageCard = ({
                        profImg = profileimg,
                        positions = '2기 회장',
                        name = "22학번 민윤기",
                        gitLink = "https://github.com/lims00"
                    }) => {
    return (
        <ManageWrapper>
            <ProfileImg src={profImg}></ProfileImg>
            <NameContainer>
                <PositionWrapper>{positions} </PositionWrapper>
                <NameWrapper>{name}</NameWrapper>
                <a href={gitLink}><GitImg src={gitIcon}></GitImg></a>
            </NameContainer>

        </ManageWrapper>);
}

export default ManageCard;