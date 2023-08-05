import React from 'react'
import {Link} from 'react-router-dom'
import {FiArrowRight} from "react-icons/fi";
import styled from "styled-components";

const NavContainer =styled.div`
    /* width: 100vw; */
    height: 90px;
    left:0px;
    top: 0px;

    background-color: #00b992;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
`

const RecruitBtn = styled.button`
  background-color: white;
  width: 140px;
  height: 45px;
  border: none;
  border-radius: 5px;
  color: #00b992;
`
const LogoContainer=styled.div`
  position: absolute;
  left: 200px;
  height: inherit;

  display: flex;
  align-items: center;`

const LogoImg=styled.img`
  width: 230px;
  left: 100px;`

const NavLinkContainer=styled.div`
  position: absolute;
  right: 200px;
  height: inherit;

  display: inline-flex;
  align-items:center;
  flex-flow : row wrap;
`
const NavLink=styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #fff;

  font-family: 'Do Hyeon', sans-serif;
  font-size: 24px;
  font-weight: 500;
  padding: 0 20px;
  transition: all 0.3s ease;
`

const Nav = () => {
    return (
        <NavContainer>

            {/* Logo */}
            <LogoContainer>
                <Link to='/'><LogoImg src='img/CAUtion_logo.png' alt='CAUtion_logo'/></Link>
            </LogoContainer>

            {/* Nav Links */}
            <NavLinkContainer >
                <NavLink to='/management'>Management</NavLink>
                <NavLink to='/study'>Study</NavLink>
                <NavLink to='/activity'>Activity</NavLink>
                <a href="https://github.com"><RecruitBtn>Recurit <FiArrowRight/></RecruitBtn></a>
            </NavLinkContainer>

</NavContainer>
    )
}

export default Nav
