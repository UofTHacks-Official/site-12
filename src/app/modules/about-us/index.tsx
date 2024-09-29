import AboutUsDesktop from "@/app/components/about-us/desktop/index";
import AboutUsMobile from "@/app/components/about-us/mobile/index";
import { AboutUsModuleBackground, AboutUsModuleContainer } from "@/app/modules/about-us/index.styles";
import { useMobileDetect } from "@/app/hooks/useMobileDetect";
import Manrope from "@/app/components/shared/fonts/manrope";
import Image from "next/image";
import SpaceGrotesk from "@/app/components/shared/fonts/space-grotesk";

const AboutUs = () => {
  const isMobile = useMobileDetect();

  return (
    <AboutUsModuleContainer mobile={isMobile}>
    <AboutUsModuleBackground src="/background/about-us.svg" />
      {isMobile ? (
          <AboutUsMobile/>
          ) : (
            <AboutUsDesktop/>
      )}
    </AboutUsModuleContainer>
  );
};

export default AboutUs;
