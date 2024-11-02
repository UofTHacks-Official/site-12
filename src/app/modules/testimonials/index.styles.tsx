import styled from "styled-components";
import {
  ModuleBackground,
  ModuleContainer,
} from "@/app/components/shared/containers/index.styles";
import Image from "next/image";

const TestimonialsModuleContainer = styled(ModuleContainer)`
    width: 100vw;
    min-height: 1000px;
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
    left: 65%;
    width: 200%;
  }
  @media (min-width: 500px) {
    left: 65%;
    top: 55%;
    width: 200%;
  }
  @media (min-width: 600px) {
    left: 65%;
    top: 65%;
    width: 200%;
  }
  @media (min-width: 700px) {
    left: 65%;
    top: 70%;
    width: 200%;
  }

  @media (min-width: 800px) {
    left: 65%;
    top: 80%;
    width: 200%;
  }
`;

export {
  StyledContentContainer,
  TestimonialsModuleContainer,
  TestimonialsModuleBackground,
  LampDesktop,
  LampMobile,
};
