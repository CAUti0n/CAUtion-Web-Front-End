import 'bootstrap/dist/css/bootstrap.min.css';
import styled from "styled-components";


const CardBox=styled.div`
    width : 190px;
    border: black;
  margin-top:20px;
  padding-right: 3px;
  padding-left:3px;
  margin-bottom: 10px;
  margin-left: 3px;
  margin-right: 3px;
  
`
const StudyTitle=styled.div`
font-weight: bold;
  font-size: 20px;
`
const Mentor=styled.div`
    font-size: 15px;
  font-color:grey;
    
`
const StudyImg=styled.img`
    width:100%;
`
const StudyCard=({img='./img/studyImg.png',studyTitle="welcome study",mentor="강명석"})=> {
    return (
        <CardBox>
            <StudyImg src={img}></StudyImg>
                <StudyTitle>{studyTitle}</StudyTitle>
                <Mentor>
                    Mentor : {mentor}
                </Mentor>

        </CardBox>
    );
}

export default StudyCard;