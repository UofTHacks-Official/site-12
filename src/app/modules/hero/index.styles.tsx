import styled from "styled-components";
import {ModuleContainer, ModuleBackground} from "@/app/components/shared/containers/index.styles";
import SpaceGrotesk from "@/app/components/shared/fonts/space-grotesk";
import Manrope from "@/app/components/shared/fonts/manrope";

const HeroModuleContainer = styled(ModuleContainer)``;

const HeroBackground = styled(ModuleBackground)``;


type MobileProps = {
    isMobile?: boolean | null;
}

const HeroContentContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const LedgeSVG = styled.div<MobileProps>`
    width: ${({isMobile}) => (isMobile ? '100vw' : '120vw')};
    height: 220px;
    position: absolute;
    bottom: ${({isMobile}) => (isMobile ? '-80px' : '-60px')};
    left: 50%;
    transform: translateX(-50%);
    background-image: url('/assets/flower-ledge.svg');
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    z-index: 10;
`;


const HeroContent = styled.div<MobileProps>`
    position: relative;
    width: ${({isMobile}) => (isMobile ? '100%' : '55%')};
    height: ${({isMobile}) => (isMobile ? '65%' : '60%')};
    border-width: 30px;
    border-style: solid;
    border-color: #5ACDFF #0DAEF1;
    background: url("/background/hero-container.svg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    align-items: center;
`;


const HeroHeader = styled(SpaceGrotesk)<MobileProps>`
    color: #225C90;
    font-size: ${({isMobile}) => (isMobile ? '3em' : '4.5em')};
    margin-top: ${({isMobile}) => (isMobile ? '20px' : '15px')};
    margin-bottom: 0px;
    text-align: center;
`;

const DescriptionContainer = styled.div<MobileProps>`
    display: flex;
    flex-direction: ${({isMobile}) => (isMobile ? 'column' : 'row')};
    justify-content: space-between;
    width: 100%;
`;

const GenericDescription = styled(Manrope)<MobileProps>`
    width: ${({isMobile}) => (isMobile ? '100%' : '45%')};
    font-size: ${({isMobile}) => (isMobile ? '0.9rem' : '1rem')};
    color: #225C90;
    padding: ${({isMobile}) => (isMobile ? '10px' : '30px')};
    text-align: left;
`;

const LeftDescription = styled(GenericDescription)<MobileProps>`
    margin-left: ${({isMobile}) => (isMobile ? undefined : '30px')};
`;

const RightDescription = styled(GenericDescription)<MobileProps>`
    margin-right: ${({isMobile}) => (isMobile ? undefined : '30px')};
`;

export {
    HeroModuleContainer,
    HeroBackground,
    HeroContentContainer,
    HeroContent,
    HeroHeader,
    DescriptionContainer,
    LeftDescription,
    RightDescription,
    LedgeSVG
};
