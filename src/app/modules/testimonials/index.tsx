import {
  StyledContentContainer,
  TestimonialsModuleBackground,
  LampDesktop,
  LampMobile,
  TestimonialsModuleContainer,
} from "@/app/modules/testimonials/index.styles";
import { SpaceGroteskSectionTitle } from "@/app/components/shared/fonts/space-grotesk";
import { useMobileDetect } from "@/app/hooks/useMobileDetect";
import TestimonialsMobile from "@/app/components/testimonials/mobile";
import TestimonialsDesktop from "@/app/components/testimonials/desktop";

const Testimonials = () => {
  const isMobile = useMobileDetect();
  return (
    <TestimonialsModuleContainer id="Testimonials-module">
      {isMobile ? (
        <LampMobile src="/assets/testimonies/lamp-mobile.svg" />
      ) : (
        <LampDesktop src="/assets/testimonies/lamp-desktop.svg" />
      )}
      {/* {isMobile ? <TestimonialsModuleBackground src="/background/testimonies-mobile.svg"/> :
                <TestimonialsModuleBackground src="/background/testimonies-desktop.svg"/>} */}
      <StyledContentContainer isMobile={isMobile}>
        <SpaceGroteskSectionTitle isMobile={isMobile}>
          Testimonials
        </SpaceGroteskSectionTitle>
        {isMobile ? <TestimonialsMobile /> : <TestimonialsDesktop />}
      </StyledContentContainer>
    </TestimonialsModuleContainer>
  );
};

export default Testimonials;
