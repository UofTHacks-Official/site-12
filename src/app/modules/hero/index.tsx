import {
  DescriptionContainer,
  HeroContent,
  HeroContentContainer,
  HeroHeader,
  HeroModuleContainer,
  LedgeSVG,
  LeftDescription,
  RightDescription,
} from "@/app/modules/hero/index.styles";
import { useMobileDetect } from "@/app/hooks/useMobileDetect";

const Hero = () => {
  const isMobile = useMobileDetect();

  return (
    <HeroModuleContainer id="hero-module">
      <HeroContentContainer>
        <HeroContent isMobile={isMobile}>
          <HeroHeader isMobile={isMobile}>UofTHacks 12</HeroHeader>
          <DescriptionContainer isMobile={isMobile}>
            <LeftDescription isMobile={isMobile}>
              January 17-19, 2025 | In-person event
            </LeftDescription>
            <RightDescription isMobile={isMobile}>
              Redefine possibilities—explore new ideas at UofTHacks!
            </RightDescription>
          </DescriptionContainer>
          <LedgeSVG isMobile={isMobile} />
        </HeroContent>
      </HeroContentContainer>
    </HeroModuleContainer>
  );
};

export default Hero;
