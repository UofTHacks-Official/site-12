import styled from "styled-components";
import {
  ModuleBackground,
  ModuleContainer,
} from "@/app/components/shared/containers/index.styles";

const TestimonialsModuleContainer = styled(ModuleContainer)`
  height: 100vh;
  min-height: 600px;
  background-color: #fffbff;
`;

const TestimonialsModuleBackground = styled(ModuleBackground)``;

const StyledContentContainer = styled.div<{ isMobile: boolean | null }>`
  padding: ${(props) => (props.isMobile ? "0.6rem 1rem" : "0.6rem 5rem")};
  display: flex;
  flex-direction: column;
  gap: ${(props) => (props.isMobile ? "1rem" : "2.5rem")};
`;

const LampDesktop = styled("img")`
  height: 90%;
  position: absolute;
  right: calc(-1000px + 30%);
  bottom: 0;
`;

const LampMobile = styled("img")`
  height: 90%;
  position: absolute;
  left: -160px;
  bottom: 0;
`;

export {
  StyledContentContainer,
  TestimonialsModuleContainer,
  TestimonialsModuleBackground,
  LampDesktop,
  LampMobile,
};
