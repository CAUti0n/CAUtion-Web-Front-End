import styled from "styled-components";
import {Spinner} from "react-bootstrap";

const LogoWrapper = styled.div`
  margin: 30px;
  display: flex;
  height: 390px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`


const TextWrapper = styled.div`
  display: block;
  margin: 10px;
  justify-items: center;
  align-items: center;
  font-size: 35px;
  color: #00b992;
  -webkit-user-select:none;
  -moz-user-select:none;
  -ms-user-select:none;
  user-select:none
`


const LoadingPage = () => {
    return (
        <div>
            <LogoWrapper>
                <Spinner animation="border" role="status" style={{"color": "#00b992"}}>
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
                <TextWrapper>loading...</TextWrapper>
            </LogoWrapper>

        </div>

    );
}
export default LoadingPage;