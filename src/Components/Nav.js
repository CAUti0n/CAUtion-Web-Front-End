import React from 'react'
import { Link } from 'react-router-dom'
import {FiArrowRight } from "react-icons/fi";
import styles from './styles/Nav.module.css'
import styled from "styled-components";

const RecruitBtn=styled.button`
    background-color: white;
    width:120px;
    height:40px;
    border:none;
    border-radius:5px;
    color:#00b992;
`

const Nav = () => {
    return (
        <div className={styles.navContainer}>

            {/* Logo */}
            <div className={styles.logo_container}>
                <Link to='/'><img src='img/CAUtion_logo.png' alt='CAUtion_logo'/></Link>
            </div>

            {/* Nav Links */}
            <div className={styles.nav_links_container}>
                <Link to='/management'>Management</Link>
                <Link to='/study' >Study</Link>
                <Link to='/activity'>Activity</Link>
                <a href="https://github.com"><RecruitBtn>Recurit <FiArrowRight/></RecruitBtn></a>
            </div>

        </div>
    )
}

export default Nav
