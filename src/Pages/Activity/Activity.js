import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Nav from '../../Components/Nav';
import Title from '../../Components/title/Title';
import Footer from '../../Components/footer/Footer';
import ActivityPage1 from './page1';
import ActivityPage2 from './page2';
import ActivityPage3 from './page3';
import styles from './styles/Activity.module.css'

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
  opacity: ${({ active }) => (active ? '1' : '0.5')};
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
`;


const Activity = () => {
  const [activeStone, setActiveStone] = useState('stone3');

  const handleStoneClick = (stone) => {
    if (activeStone === stone) {
      setActiveStone(null);
    } else {
      setActiveStone(stone);
    }
  };

  return (
      <div>
        <Nav />
        <Title props={'Activity'} />
        <Wrapper>
          <div className={styles.arrowContainer}>
            <StoneLink onClick={() => handleStoneClick('stone1')} className={styles.stoneItem}>
              <StoneItem>
                <StoneImageContainer>
                  <StoneImage src="/img/stone-image.png" alt="Activity Page" />
                  <StoneNumber className={styles.stoneNumber} active={activeStone==='stone1'}>2021</StoneNumber>
                </StoneImageContainer>
              </StoneItem>
            </StoneLink>
            <div className={styles.arrow}></div>
            <div className={styles.arrow}></div>
            <div className={styles.arrow}></div>
            <div className={styles.arrow}></div>
            <StoneLink onClick={() => handleStoneClick('stone2')} className={styles.stoneItem}>
              <StoneItem>
                <StoneImageContainer>
                  <StoneImage src="/img/stone-image.png" alt="Activity Page" />
                  <StoneNumber className={styles.stoneNumber}  active={activeStone==='stone2'}>2022</StoneNumber>
                </StoneImageContainer>
              </StoneItem>
            </StoneLink>
            <div className={styles.arrow}></div>
            <div className={styles.arrow}></div>
            <div className={styles.arrow}></div>
            <div className={styles.arrow}></div>
            <StoneLink onClick={() => handleStoneClick('stone3')} className={styles.stoneItem}>
              <StoneItem>
                <StoneImageContainer>
                  <StoneImage src="/img/stone-image.png" alt="Activity Page" />
                  <StoneNumber className={styles.stoneNumber}  active={activeStone==='stone3'}>2023</StoneNumber>
                </StoneImageContainer>
              </StoneItem>
            </StoneLink>
          </div>
          <CenteredContainer visible={activeStone !== null}>
              {activeStone === 'stone1' && <ActivityPage1 />}
              {activeStone === 'stone2' && <ActivityPage2 />}
              {activeStone === 'stone3' && <ActivityPage3 />}
          </CenteredContainer>
        </Wrapper>
        <Footer />
      </div>
  );
};

export default Activity;


