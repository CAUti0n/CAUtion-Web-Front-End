import React from 'react'

// Component
import Nav from '../../Components/Nav'

// Styles
import styles from './styles/Home.module.css'

function HomeImg() {
  return <img src={require(`./images/main_img.png`)} alt="main_img" className={styles.main_img}></img>
}

function HomeContents() {
  return <div className={styles.contents}>
      <h2>'CAUtion'은..</h2>
      <div className={styles.text}>컴퓨터 보안 및 정보 보안을 공부하는 학생들이 활동하는 중앙대학교 소프트웨어학부 학과 동아리입니다. 동아리 명칭인 ‘CAUtion’은 주의/경고/예방/조심을 의미하는 ‘caution’ 단어에서 중앙대학교를 의미하는 ‘CAU’를 강조하여 만들어졌습니다.</div>
      <div className={styles.text}>CAUtion의 주요 활동은 보안 분야별(System Hacking, Web Hacking, Reverse Engineering, Cryptography 등) 스터디, 내·외부 보안 컨퍼런스 및 세미나 참여, CTF 및 Wargame 문제 풀이, CTF 개최, BoB(Best of the Best) 및 각종 보안 자격증 준비 등을 진행과 기획하고 있습니다.</div>
      <br></br>
      <h2>With CAUtion</h2>
      <div className={styles.card_wrapper}>
        <Card title="D2 CAMPUS PARTNER"/>
        <Card title="HSpace"/>
        <Card title="INCOGNITO"/>
        <Card title="CCA"/>
      </div>
    </div>
}

function Card(props) {
  return <div className={styles.card}>
    <img src={require(`./images/${props.title}.png`)} alt={props.title} className={styles.card_img}></img>
    <h4>{props.title}</h4>
    2022~

  </div>
}

const Home = () => {
  return (
    <div>
      {/* Nav bar */}
      <Nav />
      <HomeImg />
      <div className={styles.home_container}>
        <HomeContents />
      </div>
    </div>
  )
}

export default Home