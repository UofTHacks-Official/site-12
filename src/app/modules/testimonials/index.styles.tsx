import styled from "styled-components";
import {
  ModuleBackground,
  ModuleContainer,
} from "@/app/components/shared/containers/index.styles";
import Image from "next/image";

const TestimonialsModuleContainer = styled(ModuleContainer)`
  width: 100vw;
  @media (min-width: 0px) {
    min-height: 650px;
  }
  @media (min-width: 600px) {
    min-height: 750px;
  }
  @media (min-width: 700px) {
    min-height: 800px;
  }
  background-color: #fffbff;
  display: flex;
  height: auto;
  overflow: hidden;
`;

const TestimonialsModuleBackground = styled(ModuleBackground)``;

const StyledContentContainer = styled.div<{ isMobile: boolean | null }>`
  padding: ${(props) => (props.isMobile ? "0.6rem 1rem" : "0.6rem 10vw")};
  display: flex;
  flex-direction: column;
  gap: ${(props) => (props.isMobile ? "1rem" : "2.5rem")};
  width: 100%;
  height: auto;

`;

const LampDesktop = styled(Image)`
  height: 90%;
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const LampMobile = styled(Image)`
  position: absolute;
  top: 45%;
  left: 70%;
  width: 100%;
  transform: translate(-50%, -50%);
  @media (min-width: 0px) {
    top: 65%;
    left: 65%;
    width: 200%;
  }
  @media (min-width: 500px) {
    left: 65%;
    top: 75%;
    width: 200%;
  }
  @media (min-width: 550px) {
    left: 65%;
    top: 80%;
    width: 200%;
  }
  @media (min-width: 600px) {
    left: 65%;
    top: 75%;
    width: 200%;
  }
  @media (min-width: 650px) {
    left: 65%;
    top: 75%;
    width: 180%;
  }
  @media (min-width: 700px) {
    left: 60%;
    top: 75%;
    width: 180%;
  }
  @media (min-width: 750px) {
    left: 60%;
    top: 80%;
    width: 180%;
  }

  @media (min-width: 800px) {
    left: 60%;
    top: 85%;
    width: 180%;
  }
`;

export {
  StyledContentContainer,
  TestimonialsModuleContainer,
  TestimonialsModuleBackground,
  LampDesktop,
  LampMobile,
};
