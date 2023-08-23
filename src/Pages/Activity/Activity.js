import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './styles/Activity.module.css';
import Nav from '../../Components/Nav';
import Title from '../../Components/title/Title';
import Footer from '../../Components/footer/Footer';

const Wrapper = styled.div`
  padding-right: 100px;
  padding-left: 100px;
  min-height: calc(80vh - 160px);
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
  position: relative;
  display: inline-block;
  margin: 0 20px;
`;

const StoneNumber = styled.div`
  position: absolute;
  top: 58%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0.5;
  font-size: 20px;
  font-weight: bold;
  color: white;
  transition: opacity 0.3s ease-in-out;

  &:hover {
  }
`;

const StoneImageContainer = styled.div`
  position: relative;
  width: 150px; /* 원하는 크기로 조절 */
  height: 150px; /* 원하는 크기로 조절 */
  &:hover ${StoneNumber} {
    opacity: 1;
  }
`;

const Activity = () => {
  return (
      <div>
        <Nav />
        <Title props={'Activity'} />
        <Container>
          <Row>
            <Col xs={1} md={2}></Col>
            <Col md={8}>
              <Wrapper>
                <div className={styles.arrowContainer}>
                  <StoneLink to="/activity/page1" className={styles.stoneItem}>
                    <StoneItem>
                      <StoneImageContainer>
                        <StoneImage src="/img/stone-image.png" alt="Activity Page" />
                        <StoneNumber className={styles.stoneNumber}>2021</StoneNumber>
                      </StoneImageContainer>
                    </StoneItem>
                  </StoneLink>
                  <div className={styles.arrow}></div>
                  <div className={styles.arrow}></div>
                  <div className={styles.arrow}></div>
                  <div className={styles.arrow}></div>
                  <StoneLink to="/activity/page2" className={styles.stoneItem}>
                    <StoneItem>
                      <StoneImageContainer>
                        <StoneImage src="/img/stone-image.png" alt="Activity Page" />
                        <StoneNumber className={styles.stoneNumber}>2022</StoneNumber>
                      </StoneImageContainer>
                    </StoneItem>
                  </StoneLink>
                  <div className={styles.arrow}></div>
                  <div className={styles.arrow}></div>
                  <div className={styles.arrow}></div>
                  <div className={styles.arrow}></div>
                  <StoneLink to="/activity/page3" className={styles.stoneItem}>
                    <StoneItem>
                      <StoneImageContainer>
                        <StoneImage src="/img/stone-image.png" alt="Activity Page" />
                        <StoneNumber className={styles.stoneNumber}>2023</StoneNumber>
                      </StoneImageContainer>
                    </StoneItem>
                  </StoneLink>
                </div>
              </Wrapper>
            </Col>
          </Row>
        </Container>
        <Footer />
      </div>
  );
};

export default Activity;
