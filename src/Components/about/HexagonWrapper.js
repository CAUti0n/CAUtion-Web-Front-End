import styled, {css} from "styled-components";
import {useState} from "react";

const HexagonWrapper = styled.div`
  position: relative;
  width: 200px;
  height: 200px;

  margin: 5px; /* 각 육각형 간의 간격 조절 */
  clip-path: polygon(
          50% 0%,
          100% 25%,
          100% 75%,
          50% 100%,
          0% 75%,
          0% 25%
  );
  transition: transform 0.3s;

  ${props =>
    props.isHovered &&
    css`
      transform: scale(1.1);
    `}
`;
const Hexagon=(isHovered)=>{
    const [isHovered, setIsHovered] = useState(false);

    const handleHover = () => {
        setIsHovered(true);
    };

    const handleHoverEnd = () => {
        setIsHovered(false);
    };


}

export default Hexagon;