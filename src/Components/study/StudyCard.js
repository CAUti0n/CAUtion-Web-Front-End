import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";

const CardBox = styled.div`
  width: 180px;
  height: 250px;

  border-radius: 5px;
  box-shadow: 0px 2px 3px 0.5px #d5d5d5;
  margin-top: 20px;
  margin-bottom: 10px;
  margin-left: 5px;
  margin-right: 5px;
`;
const StudyTitle = styled.div`
  font-weight: bold;
  font-size: 20px;
  padding-left: 5px;
  padding-right: 5px;
`;
const Mentor = styled.div`
  font-size: 15px;
  font-color: grey;

  padding-left: 5px;
  padding-right: 5px;
`;
const StudyImg = styled.img`
  width: 100%;
`;

const StudyCard = ({
  img = "./img/studyImg.png",
  studyTitle = "welcome study뒤로말이엄청길어지면",
  mentor = "강명석",
}) => {
  return (
    <CardBox>
      <StudyImg src={img}></StudyImg>
      <StudyTitle>{studyTitle}</StudyTitle>
      <Mentor>Mentor : {mentor}</Mentor>
    </CardBox>
  );
};

export default StudyCard;
