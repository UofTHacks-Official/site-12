import styled from "styled-components";
import {
  ModuleContainer,
  ModuleBackground,
} from "@/app/components/shared/containers/index.styles";
import SpaceGrotesk from "@/app/components/shared/fonts/space-grotesk";
import Manrope from "@/app/components/shared/fonts/manrope";

const HeroModuleContainer = styled(ModuleContainer)`
  background: url("/background/hero.jpg") no-repeat center center;
  background-size: 100% 100%;
`;

type MobileProps = {
  isMobile?: boolean | null;
};

const HeroContentContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LedgeSVG = styled.div<MobileProps>`
  display: ${({ isMobile }) => (isMobile ? "none" : "block")};
  width: ${({ isMobile }) => (isMobile ? "100vw" : "120vw")};
  height: 170px;
  position: absolute;
  bottom: -50px;
  left: 50%;
  transform: translateX(-50%);
  background-image: url("/assets/flower-ledge.svg");
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  z-index: 10;
`;

const HeroContent = styled.div<MobileProps>`
  position: relative;
  width: ${({ isMobile }) =>
      isMobile ? "90%" : "min(800px, max(55%, 600px))"};
  height: ${({ isMobile }) =>
      isMobile ? "65%" : "min(500px, max(60%, 400px))"};
  border-width: 30px;
  border-style: solid;
  border-color: #5acdff #0daef1;
  background: url("/background/hero-container.svg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const HeroHeader = styled(SpaceGrotesk)<MobileProps>`
  color: #225c90;
  font-size: ${({ isMobile }) => (isMobile ? "3em" : "5.7em")};
  margin-bottom: 0px;
  text-align: center;
`;

const DescriptionContainer = styled.div<MobileProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const GenericDescription = styled(Manrope)<MobileProps>`
  width: ${({ isMobile }) => (isMobile ? "100%" : "100%")};
  font-size: ${({ isMobile }) => (isMobile ? "1rem" : "1.2rem")};
  color: #225c90;
  text-align: center;
  padding: ${({ isMobile }) => (isMobile ? "10px" : "10px")};
`;

const ScrollButton = styled.button<MobileProps>`
  padding: ${({ isMobile }) => (isMobile ? "8px 16px" : "10px 20px")};
  font-size: ${({ isMobile }) => (isMobile ? "0.8rem" : "1rem")};
  color: white;
  background-color: #225c90;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
  z-index: 11;
  margin-top: 30px;

  &:hover {
    background-color: #086ea0;
  }
`;

const ScrollButtonText = styled(Manrope)<MobileProps>`
  font-size: ${({ isMobile }) => (isMobile ? "0.9rem" : "1rem")};
  color: #fff;
  text-align: center;
  padding: 0;
  margin: 0;
`;

export {
  HeroModuleContainer,
  HeroContentContainer,
  HeroContent,
  HeroHeader,
  DescriptionContainer,
  GenericDescription,
  LedgeSVG,
  ScrollButton,
  ScrollButtonText
};
