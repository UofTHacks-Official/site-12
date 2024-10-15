import styled from "styled-components";
import SpaceGrotesk from "@/app/components/shared/fonts/space-grotesk";
import Manrope from "@/app/components/shared/fonts/manrope";

const CarouselContainer = styled.div`
  .slick-slide {
    padding: 10px;
    width: 100%;
    box-sizing: border-box; 
    overflow: hidden;
    justify-content: center;
    align-items: center;
    align-content: center;
    align-self: center;
    display: flex;
  }

  .slick-arrow.slick-next,
  .slick-arrow.slick-prev {
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
  }
  .slick-prev::before,
  .slick-next::before {
    display: none;
  }
`;

interface MobileProps {
    isMobile?: boolean | null;
}


const CarouselHeader = styled(SpaceGrotesk)<MobileProps>`
    color: black;
    font-size: ${({isMobile}) => (isMobile ? '1.8em' : '2.5em')};
    margin-top: ${({isMobile}) => (isMobile ? '20px' : '15px')};
    margin-bottom: 0px;
    text-align: left;
    letter-spacing: 0rem;
`;

const CarouselSubHeader = styled(Manrope)<MobileProps>`
    color: #225C90;
    font-size: ${({isMobile}) => (isMobile ? '1.0em' : '1.2em')};
    margin-top: ${({isMobile}) => (isMobile ? '10px' : '5px')};
    margin-bottom: 0px;
    text-align: left;
`;

const CarouselDescription = styled(Manrope)<MobileProps>`
    color: black;
    font-size: ${({isMobile}) => (isMobile ? '0.6em' : '1.0em')};
    margin-top: ${({isMobile}) => (isMobile ? '10px' : '5px')};
    margin-bottom: 0px;
    text-align: left;
    
`;

export {
    CarouselContainer,
    CarouselHeader,
    CarouselSubHeader,
    CarouselDescription
}