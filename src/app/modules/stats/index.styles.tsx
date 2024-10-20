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
  ${(props) => (props.isMobile ? "height: 400px;" : "")}
  overflow: hidden;
  display: flex;
  align-items: ${(props) => (props.isMobile ? "flex-start" : "center")};
  padding-top: ${(props) => (props.isMobile ? "2rem" : "0")};
  background-color: #dcf4fd;
`;

const StatsImageWrapper = styled.div<MobileProps>`
  position: relative;
  left: ${(props) => (props.isMobile ? "0" : "-50px")};
  width: ${(props) => (props.isMobile ? "100%" : "110vw")};
  height: ${(props) => (props.isMobile ? "90%" : "100%")};
  overflow: ${(props) => (props.isMobile ? "hidden" : "visible")};
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

export { StatsModuleContainer, StatsImageWrapper, TopBook, BottomBook };
