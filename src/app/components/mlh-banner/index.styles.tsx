import styled from "styled-components";
import Image from 'next/image'

type MLHContainerProps = {
  isMobile?: boolean | null;
};
const MLHContainer = styled.a<MLHContainerProps>`
  display: block;
  width: ${(props) => (props.isMobile ? "60px" : "80px")};
  position: fixed;
  right: ${(props) => (props.isMobile ? "28%" : "1.5%")};
  top: 0;
  z-index: 10000;
`;

const MLHWrapper = styled(Image)`
  width: 100%;
  height: 100%;
`;

export { MLHContainer, MLHWrapper };
