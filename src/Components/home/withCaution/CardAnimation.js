import React from 'react';
import styled from 'styled-components';
import styles from "../../../Pages/Home/styles/Home.module.css";

const CardWrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px 10px;
  width: 220px;
  height: 301px;

  background: white;

  box-shadow: 0px 13px 19px rgba(0, 0, 0, 0.07);

  margin: 10px;`

const Card = ({title="",date=""}) => {

    return (
        <CardWrapper>
            <img src={require(`./image/${title}.png`)} alt={title}
                 style={{"width": "200px", "height": "auto", "margin": "0 auto"}}></img>
            <h4>{title}</h4>
            {date}
        </CardWrapper>
    );
}


const CardAnimation = () => {
    return (
        <div>
            <Card title="D2 CAMPUS PARTNER" date="2022~"/>
            <Card title="HSpace" date="2022~"/>
            <Card title="INCOGNITO" date="2022~"/>
            <Card title="CCA" date="2022~"/>
            <Card title="BoB 총동문회 MOU" date="2023~"/>
        </div>

    );

}

export default CardAnimation;