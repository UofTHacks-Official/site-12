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
  height: 1500px;
  overflow: visible;
`;

const SvgBackgroundContainer = styled.div`
  top: -8px;
  position: absolute;
  width: 100%;
  max-width: 500px;
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
  width: 350px;
  position: absolute;
  border: 15px solid #225c90;
  border-radius: 10px;
  background-color: #fff;
  padding: 30px 20px 30px 20px;
`;

const AboutHeader = styled.div`
  letter-spacing: 0px;
  font-size: 20px;
  font-weight: 700px;
  line-height: 20px;
  padding-bottom: 1rem;
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

const StyledTopRightImage = styled(Image)`
  position: absolute;
  width: 400px;
  height: 200px;
  z-index: 5;
  top: -40%;
  right: -40%;
`;

const StyledBottomRightImage = styled(Image)`
  position: absolute;
  width: 250px;
  height: 250px;
  z-index: 5;
  bottom: -55%;
  right: -25%;
`;

const StyledBottomLeftImage = styled(Image)`
  position: absolute;
  width: 250px;
  height: 250px;
  z-index: 5;
  bottom: -105%;
  left: -20%;
`;

const StyledKeys = styled(Image)`
  position: absolute;
  width: 150px;
  height: 150px;
  z-index: 5;
  bottom: -43.5%;
  left: -10%;
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
  StyledKeys,
};
