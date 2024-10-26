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
  height: ${(props) => (props.isMobile ? "min(700px, 120vw)" : "1000px")};
  overflow: hidden;
  display: flex;
  align-items: ${(props) => (props.isMobile ? "flex-start" : "center")};
  padding-top: ${(props) => (props.isMobile ? "2rem" : "0")};
  background-color: #dcf4fd;
`;

const StatsImage = styled("img")<MobileProps>`
  position: absolute;
  width: ${(props) =>
    props.isMobile ? "min(150%, 800px)" : "min(95%, 1400px)"};
  top: 50%;
  left: 48%;
  transform: translate(-50%, -50%);
`;

const TopBook = styled("img")`
  position: absolute;
  right: 0;
  top: 20px;
  width: min(25%, 400px);
  filter: blur(4px);
`;

const BottomBook = styled("img")`
  position: absolute;
  left: 0;
  bottom: 20px;
  width: min(30%, 450px);
  filter: blur(4px);
`;

export { StatsModuleContainer, StatsImage, TopBook, BottomBook };
