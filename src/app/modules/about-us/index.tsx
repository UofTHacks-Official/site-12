import AboutUsDesktop from "@/app/components/about-us/desktop/index";
import AboutUsMobile from "@/app/components/about-us/mobile/index";
import { AboutUsModuleBackground, AboutUsModuleContainer } from "@/app/modules/about-us/index.styles";
import { useMobileDetect } from "@/app/hooks/useMobileDetect";
import Manrope from "@/app/components/shared/fonts/manrope";
import Image from "next/image";
import SpaceGrotesk from "@/app/components/shared/fonts/space-grotesk";

const AboutUs = () => {
  const isMobile = useMobileDetect();

  const aboutUsDescription = (
    <>
      <p>
        At UofTHacks, we strive to provide a space where everyone feels
        supported, empowered, and encouraged to transform their dreams into
        reality!
      </p>
      <br></br>
      <p>
        Our event brings together over 500 innovators, developers, designers,
        and entrepreneurs for a memorable 36-hour in-person hackathon, where
        they collaboratively craft unique and meaningful projects.
      </p>
    </>
  );

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
