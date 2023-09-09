import React, {Suspense, useState} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import Nav from '../../Components/Nav';
import Title from '../../Components/title/Title';
import Footer from '../../Components/footer/Footer';
import styles from './styles/Activity.module.css'
import ErrorPage from "../error/ErrorPage";
import fetchActivity from "../../Datafetch/fetchActivity";
import ActivityList from "../../Components/activity/ActivityList";
import LoadingPage from "../Loading/LoadingPage";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: calc(80vh - 160px);
  margin: auto;
`;

const StoneLink = styled(Link)`
  display: inline-block;
  position: relative;
  text-align: center;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;

const StoneImage = styled.img`
  width: 100%;
  height: auto;
`;

const StoneItem = styled.div`
  display: inline-block;
  margin: 0 10px;
`;

const StoneNumber = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 58%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 2vw;
  font-weight: bold;
  color: white;
  transition: opacity 0.3s ease-in-out;
  opacity: ${({active}) => (active ? '1' : '0.5')};
`;

const StoneImageContainer = styled.div`
  position: relative;
  width: 10vw;
  height: 10vw;
`;

const CenteredContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  opacity: ${({visible}) => (visible ? 1 : 0)};
  transform: translateY(${({visible}) => (visible ? '0' : '20px')});
  transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
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


const Activity = () => {
    const [activeStone, setActiveStone] = useState('stone3');
    const [activeYear, setActiveYear] = useState('2023'); // 초기 연도 설정

    const handleStoneClick = (stone, year) => {
        if (activeStone === stone) {
            setActiveStone(null);
        } else {
            setActiveStone(stone);
            setActiveYear(year); // 스톤을 클릭할 때 연도 설정
        }
    };

    return (
        <div>

            <ErrorBoundary>
                <Nav/>
                <Suspense fallback={<LoadingPage></LoadingPage>}>
                <Title props={'Activity'}/>
                <Wrapper>
                    <div className={styles.arrowContainer}>
                        <StoneLink onClick={() => handleStoneClick('stone1', '2021')} className={styles.stoneItem}>
                            <StoneItem>
                                <StoneImageContainer>
                                    <StoneImage src="/img/stone-image.png" alt="Activity Page"/>
                                    <StoneNumber className={styles.stoneNumber}
                                                 active={activeStone === 'stone1'}>2021</StoneNumber>
                                </StoneImageContainer>
                            </StoneItem>
                        </StoneLink>
                        <div className={styles.arrow}></div>
                        <div className={styles.arrow}></div>
                        <div className={styles.arrow}></div>
                        <div className={styles.arrow}></div>
                        <StoneLink onClick={() => handleStoneClick('stone2', '2022')} className={styles.stoneItem}>
                            <StoneItem>
                                <StoneImageContainer>
                                    <StoneImage src="/img/stone-image.png" alt="Activity Page"/>
                                    <StoneNumber className={styles.stoneNumber}
                                                 active={activeStone === 'stone2'}>2022</StoneNumber>
                                </StoneImageContainer>
                            </StoneItem>
                        </StoneLink>
                        <div className={styles.arrow}></div>
                        <div className={styles.arrow}></div>
                        <div className={styles.arrow}></div>
                        <div className={styles.arrow}></div>
                        <StoneLink onClick={() => handleStoneClick('stone3', '2023')} className={styles.stoneItem}>
                            <StoneItem>
                                <StoneImageContainer>
                                    <StoneImage src="/img/stone-image.png" alt="Activity Page"/>
                                    <StoneNumber className={styles.stoneNumber}
                                                 active={activeStone === 'stone3'}>2023</StoneNumber>
                                </StoneImageContainer>
                            </StoneItem>
                        </StoneLink>
                    </div>
                    <CenteredContainer visible={activeStone !== null}>
                        <ActivityList year={activeYear} activity={fetchActivity(activeYear)} />
                    </CenteredContainer>
                </Wrapper>
            </Suspense>
            </ErrorBoundary>
            <Footer/>
        </div>
    );
};

export default Activity;


