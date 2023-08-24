
import React, {useEffect, useState} from 'react'

import styled from "styled-components";
import Nav from '../../Components/Nav'
import Title from "../../Components/title/Title";
import ManageCard from '../../Components/management/ManageCard';
import Footer from '../../Components/footer/Footer';
import axios from "axios";
import profileimg from "../../Components/management/profile.png";
import management from "./Management";

const Wrapper = styled.div`
  display: flex;
  width: 800px;
  margin:auto;
  flex-flow : row wrap;
`
const HallWrapper = styled.div`
  min-height: calc(100% - 240px);
  align-items: center;

  justify-content: center;
  min-height: calc(80vh - 160px);
`




const Management = () => {
    {/*const [manageList, setManageList] = useState(null);
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
                return Number(b.year.substring(0,1)) - Number(a.year.substring(0,1));
            }));

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
                        positions ={manageList[i]["manage"].substring(0,2)+" "+manageList[i]["manage"].substring(3,)}
                            name ={manageList[i]["grade"]+"학번 "+manageList[i]["title"]}
                            gitLink ={manageList[i]["githubURL"]}
            ></ManageCard>);
        }

        return manageArray;

    };
    */}


    return (
        <div>

            <Nav/>
            <HallWrapper>

                <Title props={'Management'} />

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
