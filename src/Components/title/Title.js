import React from 'react'

import styled from "styled-components";

const Wrapper = styled.div`
display: block;
text-align: center;
font-family: 'Montserrat';
font-style: normal;
margin:40px;
  margin-top:60px;
font-size: 45px;
line-height: 20px;
font-weight: 700;
color:#00b992;
`

const Title = ({props})=>{
    return (
    <Wrapper>
            {props}

    </Wrapper>
    )
}
export default Title