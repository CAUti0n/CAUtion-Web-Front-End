
import React, {useEffect, useState} from 'react'

import styled from "styled-components";
import Nav from '../../Components/Nav'
import Title from "../../Components/title/Title";
import ManageCard from '../../Components/management/ManageCard';
import Footer from '../../Components/footer/Footer';
import axios from "axios";
import profileimg from "../../Components/management/profile.png";


const Wrapper = styled.div`
  display: flex;
  width: 100%;
 
  margin:auto;
align-items: center;
  position: relative;
  
  flex-flow : row wrap;
`
const HallWrapper = styled.div`
  align-items: center;
  margin-left: 0px;
  justify-content: center;
  min-height: calc(80vh - 160px);
  width: 100%;
  @media screen and (max-width: 370px) {
    padding-left: 20%;
  }
  @media screen and (max-width: 437px) and (min-width: 370px) {
    padding-left: 20%;
  }
  @media screen and (max-width: 470px) and (min-width: 437px) {
    padding-left: 20%;
    padding-right: 5%;
  }
  @media screen and (max-width: 590px) and (min-width: 470px) {
    padding-left: 30%;
    padding-right: 15%;
  }
  @media screen and (max-width: 621px) and (min-width: 590px) {
    padding-left: 35%;
    padding-right: 15%;
  }
  @media screen and (min-width: 621px) and (max-width: 760px) {
    padding-left: 15%;
    padding-right: 5%;
  }
  @media screen and (min-width: 760px) and (max-width: 941px) {
    padding-left: 20%;
    padding-right: 5%;
  }
  @media screen and (min-width: 941px) and (max-width: 1100px) {
    padding-left: 15%;
    padding-right: 5%;
  }
  @media screen and (max-width: 1365px) and (min-width: 1100px) {
    padding-left: 20%;
    padding-right: 10%;
  }
  @media screen and (max-width: 1500px) and (min-width: 1365px) {
    padding-left: 25%;
    padding-right: 20%;
  }
  @media screen and (max-width: 1800px) and (min-width: 1500px) {
    padding-left: 30%;
    padding-right: 20%;
  }
  @media screen and (min-width: 1800px) {
    padding-left: 30%;
    padding-right: 20%;
  }

`




const Management = () => {
    {/*
    const [manageList, setManageList] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const LoadData = async () => {

        try {
            //studyList 비우고
            setManageList(null);
            //오류도 비우고
            setError(null);
            //loading중임을 표시
            setLoading(true);
            const response = await axios.get("http://localhost:8080/management");
            //날짜 내림차순으로 정렬하고 studyList에 받은 response 넣기
            setManageList(response.data.sort(function (a, b) {
                return Number(b.manage.substring(0,1)) - Number(a.manage.substring(0,1));
            }));
            console.log("hi");
            console.log(manageList);



        } catch (error) {
            console.log(error);
            setError(error);
        }
        setLoading(false);
    };
    useEffect(() => {
        //studyList 비우고
        LoadData();

    }, []);

    if (error) return (<h1>ERROR</h1>);
    if (!manageList) return (<h1> nothing</h1>);

    function ShowManage() {
        let manageArray = [];



        for (let i = 0; i < manageList.length; i++) {

            manageArray.push(<ManageCard
                        //이미지 없음
profImg={manageList[i]["image"]}
                        positions ={manageList[i]["manage"]}
                            name ={manageList[i]["grade"]+"학번 "+manageList[i]["title"]}
                            gitLink ={manageList[i]["githubURL"]}
email={manageList[i]["email"]}
            ></ManageCard>);
        }

        return manageArray;

    };
*/}

    return (
        <div>

            <Nav/>
            <Title props={'Management'} />
            <HallWrapper>



                <Wrapper>
                    {/*서버 킬때 여기 실행하면 됨*/}
                    {/*{ShowManage()}*/}
                    <ManageCard/>

                    <ManageCard/>
                    <ManageCard/>

                    <ManageCard/>
                </Wrapper>

            </HallWrapper>
            <Footer/>
        </div>
    )
}


export default Management;
