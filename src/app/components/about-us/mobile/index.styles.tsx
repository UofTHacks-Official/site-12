import styled from "styled-components";
import { ModuleContainer } from "@/app/components/shared/containers/index.styles";
import Image from "next/image";

const AboutUsMobileContainer = styled(ModuleContainer)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  position: relative;
  margin: 0 auto;
  height: 100vh;
  overflow: visible;
`;

const SvgBackgroundContainer = styled.div`
  top: 0;
  left: 0;
  position: absolute;
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
  border: 15px solid #225C90;
  border-radius: 10px;
  background-color: #fff;
  padding: 30px 20px 30px 20px;
  margin-right: 15px;
  margin-bottom: 110px;
  align-items: center;
  justify-content: center;
`;

const AboutHeader = styled.div`
  letter-spacing: 0px;
  font-size: 20px;
  font-weight: 700px;
  line-height: 20px;
  padding-bottom: 1rem;
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

const StyledTopRightImage = styled(Image)`
  position: absolute;
  width: 400px;
  height: 200px;
  z-index: 5;
  top: 6%;
  left: 20%;
`;

const StyledBottomRightImage = styled(Image)`
  position: absolute;
  width: 250px;
  height: 250px;
  z-index: 5;
  bottom: 13%;
  right: -5%;
`;

const StyledBottomLeftImage = styled(Image)`
  position: absolute;
  width: 250px;
  height: 250px;
  z-index: 5;
  top: 75%;
  left: 0%;
`;

const StyledKeys = styled(Image)`
  position: absolute;
  width: 150px;
  height: 150px;
  z-index: 5;
  top: 63.5%;
  left: 0%;
`;

export {
  AboutUsMobileContainer,
  CenterContainer,
  AboutUsDescription,
  StyledIcon,
  AboutHeader,
  SvgBackgroundContainer,
  StyledTopRightImage,
  StyledBottomRightImage,
  StyledBottomLeftImage,
  StyledKeys
};