import AboutUsDesktop from "@/app/components/about-us/desktop/index";
import AboutUsMobile from "@/app/components/about-us/mobile/index";
import {
  AboutUsModuleBackground,
  AboutUsModuleContainer,
} from "@/app/modules/about-us/index.styles";
import { useMobileDetect } from "@/app/hooks/useMobileDetect";

const AboutUs = () => {
  const isMobile = useMobileDetect();

  return (
    <AboutUsModuleContainer mobile={isMobile}>
      <AboutUsModuleBackground src="/background/about-us.svg" />
      {isMobile ? <AboutUsMobile /> : <AboutUsDesktop />}
    </AboutUsModuleContainer>
  )
};

export default AboutUs;
