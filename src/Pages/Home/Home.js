import React from 'react'

// Component
import Nav from '../../Components/Nav'

// Styles
import styles from './styles/Home.module.css'
import Footer from "../../Components/footer/Footer";
import About from "../../Components/home/about/About";

// for autoSlide
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

function HomeImg() {
    return <img src={require(`./images/main_img.png`)} alt="main_img" className={styles.main_img}></img>
}

const settingSlick = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3100,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: false,
};

function HomeContents() {
    return <div className={styles.contents}>
        <div class={styles.title}>'CAUtion'은..</div>
        <div className={styles.text} >
            {`컴퓨터 보안 및 정보 보안을 공부하는 학생들이 활동하는\n중앙대학교 소프트웨어학부 학과 동아리입니다.\n‘CAUtion’은 주의/경고/예방/조심을 의미하는 ‘caution’ 단어에서\n중앙대학교를 의미하는 ‘CAU’를 강조하여 만들어졌습니다.`}
        </div>

        <br></br>
        <div class={styles.title}>Main Activity</div>
        <div className={styles.contents}>
            <About/>
        </div>

        <br></br>
        <div style={{marginBottom:"30px"}}class={styles.title}>With CAUtion</div>

        <Slider {...settingSlick}>

            <div><Card title="D2 CAMPUS PARTNER" date="2022~"/></div>
            <div><Card title="HSpace" date="2022~"/></div>
            <div><Card title="INCOGNITO" date="2022~"/></div>
            <div><Card title="CCA" date="2022~"/></div>
            <div><Card title="BoB 총동문회 MOU" date="2023~"/></div>
        </Slider>

    </div>
}



function Card(props) {
    return <div className={styles.card}>
        <img src={require(`./images/${props.title}.png`)} alt={props.title} className={styles.card_img}></img>
        <h4>{props.title}</h4>
        {props.date}

    </div>
}

const Home = () => {
    return (
        <div>
            {/* Nav bar */}
            <Nav/>
            <HomeImg/>
            <div className={styles.home_container}>
                <HomeContents/>
            </div>
            <Footer/>
        </div>
    )
}

export default Home