import {
  DescriptionContainer,
  HeroContent,
  HeroContentContainer,
  HeroHeader,
  HeroModuleContainer,
  LedgeSVG,
  GenericDescription,
  ScrollButton,
  ScrollButtonText,
} from "@/app/modules/hero/index.styles";
import { useMobileDetect } from "@/app/hooks/useMobileDetect";

const Hero = () => {
  const isMobile = useMobileDetect();

  const handleScroll = () => {
    const targetSection = document.getElementById("Subscribe-module");
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <HeroModuleContainer id="hero-module">
      <HeroContentContainer>
        <HeroContent isMobile={isMobile}>
          <DescriptionContainer isMobile={isMobile}>
            <GenericDescription isMobile={isMobile}>
              January 17-19, 2025 &nbsp;&nbsp;|&nbsp;&nbsp; In-person event
            </GenericDescription>
            <HeroHeader isMobile={isMobile}>UofTHacks 12</HeroHeader>
          </DescriptionContainer>
          <LedgeSVG isMobile={isMobile} />
        </HeroContent>
      </HeroContentContainer>
    </HeroModuleContainer>
  );
};

export default Hero;
