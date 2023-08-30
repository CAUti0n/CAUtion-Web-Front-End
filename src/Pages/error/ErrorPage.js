import styled from "styled-components";
import Nav from "../../Components/Nav";

const LogoWrapper = styled.div`
  margin: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
const LogoImg = styled.img`
  width: 350px;

`


const TextWrapper = styled.div`

  justify-items: center;
  align-items: center;
  font-size: 30px;
  height: 350px;
  font-family: 'Montserrat';
  font-style: normal;
  margin: 10px;

`


const ErrorPage = () => {
    return (
        <div>
            <Nav/>
            <LogoWrapper>

                <LogoImg src='img/CAUtion_logo.png' alt='CAUtion_logo'></LogoImg>


                <TextWrapper>잘못된 접근이에요!</TextWrapper>
            </LogoWrapper>

        </div>

    );
}
export default ErrorPage;