import styled from "styled-components";
import {
  ModuleBackground,
  ModuleContainer,
} from "@/app/components/shared/containers/index.styles";

const StatsModuleContainer = styled(ModuleContainer)`
  position: relative;
  overflow: hidden;
  height: 140vh;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    height: 100vh; // Reduce height on mobile
    align-items: flex-start; // Align content to top on mobile
    padding-top: 2rem; // Add some top padding on mobile
  }
`;

const StatsModuleBackground = styled(ModuleBackground)`
  height: 140vh;

  @media (max-width: 768px) {
    height: 100vh; // Match container height on mobile
  }
`;

const StatsImageWrapper = styled.div`
  position: relative;
  width: 90vw;
  height: 100%;
  margin-left: 0;

  @media (max-width: 768px) {
    width: 150vw; // mobile width
    height: 80%; // Reduce height to prevent overflow
    overflow: hidden;
  }
`;

export { StatsModuleContainer, StatsModuleBackground, StatsImageWrapper };
