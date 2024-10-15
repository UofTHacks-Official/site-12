import styled from "styled-components";
import {
  ModuleBackground,
  ModuleContainer,
} from "@/app/components/shared/containers/index.styles";

type MobileProps = {
  mobile?: boolean | null;
};

const AboutUsModuleContainer = styled(ModuleContainer)<MobileProps>`
  display: ${(props) => (props.mobile ? "block" : "flex")};
  justify-content: space-between;
  align-items: center;
  padding: ${(props) => (props.mobile ? "0.5rem" : "2rem")};
  position: relative;
  margin: 0 auto;
  height: auto;
`;

const AboutUsModuleBackground = styled(ModuleBackground)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background-size: cover;
  background-position: center;
`;

export { AboutUsModuleBackground, AboutUsModuleContainer };
