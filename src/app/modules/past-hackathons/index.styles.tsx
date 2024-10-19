import styled from "styled-components";
import { ModuleBackground, ModuleContainer } from "@/app/components/shared/containers/index.styles";
import { IconButton } from "@mui/material"
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import {StyledIcon} from "@/app/components/about-us/mobile/index.styles";

const PastHackathonsModuleContainer = styled(ModuleContainer)`
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
    background-color: #225C90;
    overflow: visible;
    position: relative;
`;

const PastHackathonsModuleBackground = styled(ModuleBackground)`
    position: absolute;
    top: -50px;
    left: -50px;
    width: 160%; 
    height: auto;
    z-index: 0; 
    pointer-events: none; 
`

const PastHackathonsModuleTitle = styled.h1`
    color: white;
    font-size: 50px;
    padding-left: 10vw;
    padding-right: 10vw;
`

const PastHackathonsModuleCardsContainer = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

const CarouselContainer = styled.div`
    width: 100%;
    height: 80vh;
`

const IntroCardContainer = styled.div`
    width: 100%;
    height: 80vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

const TopRightImage = styled(StyledIcon)<{ isMobile?: boolean | null }>`
    position: absolute;
    top: 0;
    right: 0;
    width: ${({ isMobile }) => (isMobile ? '100px' : '200px')};
    height: ${({ isMobile }) => (isMobile ? '100px' : '200px')};
`;

const BottomLeftImage = styled(StyledIcon)<{ isMobile?: boolean | null }>`
    position: absolute;
    bottom: 0;
    left: 0;
    width: ${({ isMobile }) => (isMobile ? '100px' : '200px')};
    height: ${({ isMobile }) => (isMobile ? '100px' : '200px')};
`;

export {
    PastHackathonsModuleContainer,
    PastHackathonsModuleBackground,
    PastHackathonsModuleTitle,
    PastHackathonsModuleCardsContainer,
    IntroCardContainer,
    CarouselContainer,
    TopRightImage,
    BottomLeftImage,
};
