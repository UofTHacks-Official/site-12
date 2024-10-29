import styled from "styled-components";
import {
  ModuleBackground,
  ModuleContainer,
} from "@/app/components/shared/containers/index.styles";

const FAQModuleContainer = styled(ModuleContainer)`
  height: 100%;
  min-height: 600px;
`;

const FAQModuleBackground = styled(ModuleBackground)`
  height: 100%;
`;

const StyledContentContainer = styled.div<{ isMobile: boolean | null }>`
  display: flex;
  flex-direction: column;
  gap: ${(props) => (props.isMobile ? "1rem" : "2.5rem")};
  padding-bottom: 20px;
  width: ${(props) => (props.isMobile ? "95%" : "min(80%, 1040px)")};
  margin: 0 auto;
`;
const StyledAccordionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export {
  FAQModuleContainer,
  FAQModuleBackground,
  StyledContentContainer,
  StyledAccordionContainer,
};
