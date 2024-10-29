import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import SpaceGrotesk from "@/app/components/shared/fonts/space-grotesk";
import { ModuleContainer } from "@/app/components/shared/containers/index.styles";
import Image from 'next/image'

interface MobileProps {
  isMobile?: boolean | null;
}

export const Board = styled(Image)<MobileProps>`
  position: absolute;
  z-index: 1;
  width: ${(props) =>
    props.isMobile
      ? "max(min(160%, 950px), 750px)"
      : "max(min(80%, 970px), 890px)"};
  top: -35px;
  left: 50%;
  transform: translate(-50%, 0);
`;

export const BackgroundGrid = styled(Image)<MobileProps>`
  position: absolute;
  top: -10px;
  height: 90%;
  z-index: 0;
`;

export const BottomBook = styled(Image)`
  position: absolute;
  left: 0;
  top: -20%;
  width: 20%;
  z-index: 5;
`;

export const WhyJoinModuleContainer = styled(ModuleContainer)`
  height: 100%;
  min-height: 600px;
`;

export const ImageBackgroundContainer = styled(Box)<MobileProps>`
  width: 100%;
  height: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: linear-gradient(to bottom, #0796d330, #fcf9fe);
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  box-sizing: border-box;
`;

export const Title = styled(SpaceGrotesk)<MobileProps>`
  font-size: ${(props) => (props.isMobile ? "20px" : "50px")};
  color: white;
  text-align: center;
  margin-top: ${(props) => (props.isMobile ? "17%" : "10px")};
  margin-bottom: 20px;
  z-index: 10;
`;

export const NoteWrapper = styled(Box)`
  background-color: rgba(255, 255, 255, 0.9);
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  color: #000000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  font-size: 16px;
`;

export const ImageWrapper = styled(Box)`
  img {
    width: 100%;
    border-radius: 8px;
    object-fit: cover;
  }

  display: flex;
  align-items: center;
  justify-content: center;
`;
