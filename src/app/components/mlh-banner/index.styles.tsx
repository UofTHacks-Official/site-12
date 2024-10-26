import styled from "styled-components";

type MLHContainerProps = {
  isMobile?: boolean | null;
};
const MLHContainer = styled.a<MLHContainerProps>`
  display: block;
  width: ${(props) => (props.isMobile ? "50px" : "80px")};
  position: fixed;
  right: ${(props) => (props.isMobile ? "25%" : "2%")};
  top: 0;
  z-index: 10000;
`;

const MLHWrapper = styled.img`
  width: 100%;
  height: 100%;
`;

export { MLHContainer, MLHWrapper };
