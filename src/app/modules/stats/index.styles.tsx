import styled from "styled-components";
import {
    ModuleBackground,
    ModuleContainer,
} from "@/app/components/shared/containers/index.styles";

interface MobileProps {
    isMobile?: boolean | null;
}

const StatsModuleContainer = styled(ModuleContainer)<MobileProps>`
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: ${(props) => (props.isMobile ? 'flex-start' : 'center')};
    padding-top: ${(props) => (props.isMobile ? '2rem' : '0')};
`;

const StatsModuleBackground = styled(ModuleBackground)`
    height: 100vh;
`;

const StatsImageWrapper = styled.div<MobileProps>`
    position: relative;
    width: ${(props) => (props.isMobile ? '150vw' : '90vw')};
    height: ${(props) => (props.isMobile ? '80%' : '100%')};
    margin-left: 0;
    overflow: ${(props) => (props.isMobile ? 'hidden' : 'visible')};
`;

export {StatsModuleContainer, StatsModuleBackground, StatsImageWrapper};
