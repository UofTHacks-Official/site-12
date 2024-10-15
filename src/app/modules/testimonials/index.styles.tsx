import styled from "styled-components";
import {ModuleBackground, ModuleContainer} from "@/app/components/shared/containers/index.styles";

const TestimonialsModuleContainer = styled(ModuleContainer)`
    height: 100vh;
    min-height: 600px;
`;

const TestimonialsModuleBackground = styled(ModuleBackground)``;

const StyledContentContainer = styled.div<{ isMobile: boolean | null }>`
    padding: ${(props) => (props.isMobile ? "0.6rem 1rem" : "0.6rem 5rem")};
    display: flex;
    flex-direction: column;
    gap: ${(props) => (props.isMobile ? "1rem" : "2.5rem")};
`;

export {StyledContentContainer, TestimonialsModuleContainer, TestimonialsModuleBackground};
