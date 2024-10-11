import styled from "styled-components";
import { ModuleContainer } from "@/app/components/shared/containers/index.styles";
import Image from "next/image";

const AboutUsDesktopContainer = styled(ModuleContainer)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  position: relative;
  margin: 0 auto;
  background-image: url("about-icons-bkg.svg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

const SvgBackgroundContainer = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  overflow: visible;
`;

const StyledIcon = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  overflow: visible;
`;

const CenterContainer = styled.div`
  max-width: 50vw;
  position: absolute;
  border: 20px solid #225C90;
  border-radius: 10px;
  background-color: #fff;
  padding: 50px 40px 40px 40px;
`;

const AboutHeader = styled.div`
  letter-spacing: 0px;
  font-size: 50px;
  font-weight: 700;
  margin-bottom: 1.5rem;
  line-height: 50px;
  background: linear-gradient(90deg, #225C90, #EC6D7F);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: left;
`;

const AboutUsDescription = styled.div`
  font-size: 15px;
  text-align: left;
  letter-spacing: 0px;
  color: #191A1B;
`;

const StyledLeftImage = styled(Image)`
  position: absolute;
  width: 300px;
  height: 300px;
  z-index: 5;
  top: 50%;
  left: -30%;
`;

const StyledRightImage = styled(Image)`
  position: absolute;
  width: 300px;
  height: 300px;
  z-index: 5;
  top: -40%;
  right: -33%;
`;

const StyledKeys = styled(Image)`
  position: absolute;
  width: 200px;
  height: 200px;
  z-index: 5;
  top: 100%;
  left: 0%;
`;

export {
  AboutUsDesktopContainer,
  CenterContainer,
  AboutUsDescription,
  StyledIcon,
  AboutHeader,
  SvgBackgroundContainer,
  StyledLeftImage,
  StyledRightImage,
  StyledKeys
};
