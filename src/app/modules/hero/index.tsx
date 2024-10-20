import {
  DescriptionContainer,
  HeroBackground,
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
      <HeroBackground src="/background/hero.svg" />
      <HeroContentContainer>
        <HeroContent isMobile={isMobile}>
          <HeroHeader isMobile={isMobile}>UofTHacks 12</HeroHeader>
          <DescriptionContainer isMobile={isMobile}>
            <LeftDescription isMobile={isMobile}>
              At UofTHacks, we strive to provide a space where everyone feels
              supported, empowered, and encouraged to transform their dreams
              into reality!
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
