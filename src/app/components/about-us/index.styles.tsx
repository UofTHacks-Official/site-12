import styled from "styled-components";
import { ModuleContainer } from "@/app/components/shared/containers/index.styles";
import Image from 'next/image'

interface MobileProps {
  isMobile: boolean | null;
}

const AboutUsContainer = styled(ModuleContainer)<MobileProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  height: ${(props) => (props.isMobile ? "1250px" : "1100px")};
  ${(props) => (props.isMobile ? "padding-bottom: 50px;" : "")}
  background: linear-gradient(to bottom, rgba(34, 92, 144, 1) 0%, #dcf4fd 100%);
`;

const SvgBackgroundContainer = styled.div<MobileProps>`
  z-index: -1;
  position: absolute;
  width: ${(props) => (props.isMobile ? "500px" : "min(130%, 1500px)")};
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const StyledIcon = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  overflow: visible;
`;

const CenterContainer = styled.div<MobileProps>`
  width: ${(props) => (props.isMobile ? "95%" : "70%")};
  max-width: 800px;
  position: relative;
  border: ${(props) => (props.isMobile ? "15px" : "20px")} solid #225c90;
  border-radius: 10px;
  background-color: #fff;
  padding: ${(props) =>
    props.isMobile ? "30px 20px 20px 20px" : "50px 40px 40px 40px"};
`;

const AboutHeader = styled.div<MobileProps>`
  letter-spacing: 0px;
  font-size: ${(props) => (props.isMobile ? "30px" : "50px")};
  font-weight: 700;
  margin-bottom: 1.5rem;
  background: linear-gradient(90deg, #225c90, #ec6d7f);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: left;
`;

const AboutUsDescription = styled.div`
  font-size: 15px;
  text-align: left;
  letter-spacing: 0px;
  color: #191a1b;
`;

const StyledLeftImage = styled(Image)<MobileProps>`
  position: absolute;
  z-index: 5;

  ${(props) =>
    props.isMobile
      ? `
    width: 250px;
    bottom: -400px;
    left: -30px;
    `
      : `
    width: max(40%, 270px);
    bottom: -140px;
    left: -32%;
    `}

  height: auto;
`;

const StyledMobileImage = styled(Image)`
  position: absolute;
  z-index: 5;
  width: 260px;
  bottom: -230px;
  right: -100px;

  height: auto;
`;

const StyledRightImage = styled(Image)<MobileProps>`
  position: absolute;
  z-index: 5;

  ${(props) =>
    props.isMobile
      ? `
    width: 250px;
    top: -210px;
    right: -70px;
    transform: rotate(-35deg);
    `
      : `
    width: max(40%, 270px);
    top: -140px;
    right: -200px;
    `}

  height: auto;
`;

const StyledKeys = styled(Image)<MobileProps>`
  position: absolute;
  width: 200px;
  height: 200px;
  z-index: 5;
  bottom: -198px;
  left: ${(props) => (props.isMobile ? "-30px" : "50px")};
  transition: transform 0.5s ease-in-out; 
  transform-origin: 125px 5px; 

  &:hover {
    transform: rotate(10deg);
  }
`;

export {
  AboutUsContainer,
  CenterContainer,
  AboutUsDescription,
  StyledIcon,
  AboutHeader,
  SvgBackgroundContainer,
  StyledLeftImage,
  StyledMobileImage,
  StyledRightImage,
  StyledKeys,
};
