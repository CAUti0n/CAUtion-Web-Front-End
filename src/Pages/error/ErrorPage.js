import styled from "styled-components";
import Nav from "../../Components/Nav";

const LogoWrapper = styled.div`
  margin:100px;
  display: flex;
  justify-content: center;
  align-items: center;
`
const LogoImg = styled.img`
  width: 350px;
  
`
const ErrorPage = () => {
    return (
        <div>
            <Nav/>
            <LogoWrapper>
                <LogoImg src='img/CAUtion_logo.png' alt='CAUtion_logo'></LogoImg>
                <div>잘못된 접근이에요!</div></LogoWrapper>

        </div>

    );
}
export default ErrorPage;