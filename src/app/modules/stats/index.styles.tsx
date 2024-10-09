import styled from "styled-components";
import {
  ModuleBackground,
  ModuleContainer,
} from "@/app/components/shared/containers/index.styles";

interface MobileProps {
  isMobile?: boolean | null;
  isLargeScreen?: boolean; // Add this prop for large screen detection
}

const StatsModuleContainer = styled(ModuleContainer)<MobileProps>`
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: ${(props) => (props.isMobile ? "flex-start" : "center")};
  padding-top: ${(props) => (props.isMobile ? "2rem" : "0")};
`;

const StatsModuleBackground = styled(ModuleBackground)`
  height: 100vh;
`;

const StatsImageWrapper = styled.div<MobileProps>`
  position: relative;
  width: ${(props) =>
    props.isMobile ? "150vw" : props.isLargeScreen ? "100vw" : "90vw"};
  height: ${(props) => (props.isMobile ? "80%" : "100%")};
  margin-left: ${(props) =>
    props.isLargeScreen ? "auto" : "0"}; // Center on large screens
  margin-right: ${(props) =>
    props.isLargeScreen ? "auto" : "0"}; // Center on large screens
  overflow: ${(props) => (props.isMobile ? "hidden" : "visible")};
`;

export { StatsModuleContainer, StatsModuleBackground, StatsImageWrapper };
