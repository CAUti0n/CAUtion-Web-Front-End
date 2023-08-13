import React from 'react'
import { Link, Route, Routes } from 'react-router-dom';

import Nav from '../../Components/Nav'
import Title from "../../Components/title/Title";
import styled from "styled-components";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './styles/Activity.module.css'

import Footer from "../../Components/footer/Footer";
import ActivityPage1 from "./page1";
import ActivityPage2 from "./page2";
import ActivityPage3 from "./page3";

const Wrapper = styled.div`
  padding-right: 100px;
  padding-left: 100px;
`


const Activity = () => {
  return (
    <div>
      <Nav />
        <Title props={'Activity'}/>
        <Container>
          <Row>
            <Col xs={1} md={2}></Col>
            <Col md={8}>
                <Wrapper>
                  <div className={styles.arrowContainer}>
                    <Link to="/activity/page1" className={styles.stoneItem}>
                      <img className={styles.stoneImage} src="/img/stone-image.png" alt="Activity Page" />
                      <div className={styles.stoneNumber}>2021</div>
                    </Link>
                    <div className={styles.arrow}></div>
                    <div className={styles.arrow}></div>
                    <div className={styles.arrow}></div>
                    <div className={styles.arrow}></div>
                    <Link to="/activity/page2" className={styles.stoneItem}>
                      <img className={styles.stoneImage} src="/img/stone-image.png" alt="Activity Page" />
                      <div className={styles.stoneNumber}>2022</div>
                    </Link>
                    <div className={styles.arrow}></div>
                    <div className={styles.arrow}></div>
                    <div className={styles.arrow}></div>
                    <div className={styles.arrow}></div>
                    <Link to="/activity/page3" className={styles.stoneItem}>
                      <img className={styles.stoneImage} src="/img/stone-image.png" alt="Activity Page" />
                      <div className={styles.stoneNumber}>2023</div>
                    </Link>
                  </div>
                </Wrapper>
            </Col>
          </Row>
        </Container>
        <Footer/>
    </div>

  )
}

export default Activity
