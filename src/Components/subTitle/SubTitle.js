import React from 'react'

import styled from "styled-components";

const Wrapper = styled.div`

text-align: left;
font-family: 'Montserrat';
font-style: normal;
margin-top:40px;
margin-bottom: 15px;

font-size: 25px;
line-height: 20px;
font-weight: 700;
color:#00b992;
`

const SubTitle = ({props})=>{
    return (
            <Wrapper>
                {props}
            </Wrapper>

    )
}
export default SubTitle