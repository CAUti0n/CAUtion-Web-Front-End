import React from "react";
import styled from "styled-components";
import profileimg from "./profile.png"
import {SlEnvolope} from "react-icons/sl";
import {FiGithub} from "react-icons/fi";

const ManageWrapper = styled.a`
  width: 200px;
  height: 270px;
  text-decoration: none;
  color: black;

  padding: 10px;
  justify-content: center;
  margin: 25px;
  margin-bottom: 20px;
  border-radius: 7px;
  transition: .3s;
  transform-style: preserve-3d;
  box-shadow: 0px 2px 3px 3px lightgray;
  &:hover {
    
    transform: rotateY(180deg);

  }

`

const ProfileImg = styled.img`
 width: 100%;
  height: 180px;
  border-radius: 10px;
  object-fit: cover;
  -webkit-user-select:none;
  -moz-user-select:none;
  -ms-user-select:none;
  user-select:none
  
`
const PositionWrapper = styled.div`
  text-decoration-line: none;
  height: 25px;
  font-size: 22px;
  text-align: center;
  justify-content: center;
  font-family: 'Do Hyeon', sans-serif;
  -webkit-user-select:none;
  -moz-user-select:none;
  -ms-user-select:none;
  user-select:none
`
const NameWrapper = styled.div`

  font-size: 25px;
 
  letter-spacing: 2px;
  text-align: center;
  font-family: 'Do Hyeon', sans-serif;
  -webkit-user-select:none;
  -moz-user-select:none;
  -ms-user-select:none;
  user-select:none
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
  bottom : 250px;
  backface-visibility: hidden;

  transform: rotateY(180deg);

`


const GitID=styled.div`
  text-align: justify;
  position: absolute;
  font-size: 20px;
  display: inline;
  margin-top: 15px;
  color:grey;
  font-family: 'Do Hyeon', sans-serif;
  -webkit-user-select:none;
  -moz-user-select:none;
  -ms-user-select:none;
  user-select:none
`
const EmailAdd=styled.div`
  text-align: justify;
  position: absolute;
  font-size: 15px;
  display: inline;
color:grey;
  font-family: 'Do Hyeon', sans-serif;
  
`
const ManageCard = ({
                        profImg = profileimg,
                        positions = '학번',
                        name = "학번 이름",
                        gitLink = "https://github.com",
    email=""
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
                <Back>
                    <ProfileImg src={profImg} style={{"filter": "blur(2px) brightness(90%)","-webkit-filter": "blur(2px)"}}/>
                    <FiGithub  style={ {"color":"grey","width": "30px", "height": "25px","margin-right":"10px","margin-top":"18px"}}></FiGithub>
                    <GitID>{gitLink.substring(19,)}</GitID>
                    <br/>
                    <SlEnvolope style={{ "color":"grey","width": "30px", "height": "25px","margin-right":"10px","margin-bottom": "5px"}}/>
                    <EmailAdd>{email}</EmailAdd>
                </Back>
            </ManageWrapper>
        );
}

export default ManageCard;