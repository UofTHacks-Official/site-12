import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import SpaceGrotesk from "@/app/components/shared/fonts/space-grotesk";
import { ModuleContainer } from "@/app/components/shared/containers/index.styles";

interface MobileProps {
  isMobile?: boolean | null;
}

export const Board = styled("img")<MobileProps>`
  position: absolute;
  top: ${(props) => (props.isMobile ? "-10px" : "-30px")};
  width: ${(props) => (props.isMobile ? "130vw" : "100%")};
  height: auto;
  z-index: 1;
  max-width: 1500px;
`;

export const BackgroundGrid = styled("img")<MobileProps>`
  position: absolute;
  top: -10px;
  height: 90%;
  z-index: 0;
`;

export const BottomBook = styled("img")`
  position: absolute;
  left: 0;
  top: -20%;
  width: 20%;
`;

export const WhyJoinModuleContainer = styled(ModuleContainer)`
  height: 100%;
  min-height: 600px;
`;

export const ImageBackgroundContainer = styled(Box)<MobileProps>`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(to bottom, #0796d330, #fcf9fe);
  background-position: center center;
  background-repeat: no-repeat;
  padding: ${(props) => (props.isMobile ? "20px" : "40px")};
  background-size: cover;
  box-sizing: border-box;
`;

export const Title = styled(SpaceGrotesk)<MobileProps>`
  font-size: ${(props) => (props.isMobile ? "20px" : "50px")};
  color: white;
  text-align: center;
  margin-top: ${(props) =>
    props.isMobile ? "12%" : "min(calc(10% - 30px), 110px)"};
  margin-bottom: 20px;
  z-index: 10;
`;

export const NoteWrapper = styled(Box)<{ customHeight?: string }>`
  background-color: rgba(255, 255, 255, 0.9);
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  height: ${(props) => props.customHeight || "auto"};
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;

export const ImageWrapper = styled(Box)<{ isMobile?: boolean | null }>`
  img {
    width: 100%;
    height: auto;
    border-radius: 8px;
    object-fit: cover;
  }

  display: flex;
  align-items: center;
  justify-content: center;
`;
