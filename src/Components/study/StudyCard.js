import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";


const CardBox = styled.div`
  width: 165px;
  height: 230px;

  border-radius: 5px;
  box-shadow: 0px 2px 3px 0.5px #d5d5d5;
  margin-top: 20px;
  margin-bottom: 10px;
  margin-left: 17px;
  margin-right: 17px;

  &:hover {
    box-shadow: 0px 2px 3px 4px lightgray;
  }
`;
const StudyTitle = styled.div`
  height: 54px;
  font-weight: bold;
  font-size: 18px;
  padding-left: 5px;
  padding-right: 5px;
  vertical-align: middle;
  color: black;
  -webkit-user-select:none;
  -moz-user-select:none;
  -ms-user-select:none;
  user-select:none
!important
`;
const Mentor = styled.div`
  font-size: 15px;

  padding-left: 5px;
  padding-right: 5px;
  color: grey;
  -webkit-user-select:none;
  -moz-user-select:none;
  -ms-user-select:none;
  user-select:none
!important
`;
const StudyImg = styled.img`
  width: 100%;
  height: 60%;
  -webkit-user-select:none;
  -moz-user-select:none;
  -ms-user-select:none;
  user-select:none
`;

const StudyCard = ({
                       img = "./img/studyImg.png",
                       studyTitle = "",
                       mentor = "", url = ""
                   }) => {


    return (
        <a href={url} style={{"textDecoration": "none"}}>
            <CardBox>
                <StudyImg src={img}></StudyImg>
                <StudyTitle>{studyTitle}</StudyTitle>
                <Mentor>Mentor : {mentor}</Mentor>
            </CardBox>
        </a>
    );
};

export default StudyCard;
