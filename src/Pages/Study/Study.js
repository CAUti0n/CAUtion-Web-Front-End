import React, {Suspense} from "react";
import Nav from "../../Components/Nav";
import Title from "../../Components/title/Title";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../../Components/footer/Footer";

import ErrorPage from "../error/ErrorPage";
import LoadingPage from "../Loading/LoadingPage";
import fetchStudy from "../../Datafetch/fetchStudy";
import StudyList from "../../Components/study/StudyList";

const Wrapper = styled.div`
  position: relative;

  display: block;
  justify-content: center;
  align-content: center;
  min-height: calc(80vh - 160px);





`;





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

const Study = ({props}) => {


    return (
        <div>

            <ErrorBoundary>
                <Nav/>
                <Suspense fallback={<LoadingPage></LoadingPage>}>
                    <Title props={"Study"} style={{"margin-bottom": "0px"}}/>
                    <Wrapper>
                        <StudyList study={fetchStudy()}></StudyList>
                    </Wrapper>
                </Suspense>
            </ErrorBoundary>

            <Footer/>
        </div>
    );
};

export default Study;
