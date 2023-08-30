import React, {Suspense} from 'react'

import styled from "styled-components";
import Nav from '../../Components/Nav'
import Title from "../../Components/title/Title";
import Footer from '../../Components/footer/Footer';
import ErrorPage from "../error/ErrorPage";
import LoadingPage from "../Loading/LoadingPage";
import ManageList from "../../Components/management/ManageList";
import fetchManage from "../../Datafetch/fetchManage";


const Wrapper = styled.div`
  display: flex;
  width: 100%;

  margin: auto;
  align-items: center;
  position: relative;

  flex-flow: row wrap;
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

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {hasError: false};
    }

    static getDerivedStateFromError(error) {
        // 다음 렌더링에서 폴백 UI가 보이도록 상태를 업데이트 합니다.
        return {hasError: true};
    }


    render() {
        if (this.state.hasError) {
            // 폴백 UI를 커스텀하여 렌더링할 수 있습니다.
            return <ErrorPage></ErrorPage>;
        }

        return this.props.children;
    }
}


const Management = () => {

    return (
        <div>
            <ErrorBoundary>
                <Nav/>
                <Suspense fallback={<LoadingPage></LoadingPage>}>
                <Title props={'Management'}/>
                <HallWrapper>


                    <Wrapper>
                        <ManageList manage={fetchManage()}></ManageList>
                    </Wrapper>

                </HallWrapper>
                </Suspense>
            </ErrorBoundary>
            <Footer/>
        </div>
    )
}


export default Management;
