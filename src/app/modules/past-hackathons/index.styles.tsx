import styled from "styled-components";
import {
  ModuleBackground,
  ModuleContainer,
} from "@/app/components/shared/containers/index.styles";
import { IconButton } from "@mui/material";
import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";

const PastHackathonsModuleContainer = styled(ModuleContainer)`
  background-color: #225c90;
  height: 100vh;
  min-height: 600px;
  width: 100vw;
  max-width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding-top: 5vh;
  padding-bottom: 5vh;
`;
const PastHackathonsModuleTitle = styled.h1`
  color: white;
  font-size: 50px;
  padding-left: 10vw;
  padding-right: 10vw;
`;

const PastHackathonsModuleCardsContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CarouselContainer = styled.div`
  width: 100%;
  height: 80vh;
`;

const IntroCardContainer = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const IntroCardWrapper = styled.div`
  width: 850px;
  height: 380px;
  position: relative;
`;

const ArrowBackButton = styled(IconButton)`
  position: absolute;
`;

const ArrowForwardButton = styled(IconButton)`
  position: absolute;
`;

const TopBook = styled("img")`
  position: absolute;
  right: 0;
  top: -10%;
  width: 18%;
`;

export {
  PastHackathonsModuleContainer,
  PastHackathonsModuleTitle,
  PastHackathonsModuleCardsContainer,
  IntroCardContainer,
  CarouselContainer,
  IntroCardWrapper,
  TopBook,
};
