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
        <></>
      ) : (
        <LampDesktop
          src="/assets/testimonies/lamp-desktop.svg"
          alt="lamp desk"
          width={1920}
          height={1080}
        />
      )}
      <StyledContentContainer isMobile={isMobile}>
        <SpaceGroteskSectionTitle isMobile={isMobile}>
          Testimonials
        </SpaceGroteskSectionTitle>

        <div style={{ height: "100%" }}>
          {isMobile ? (
            <div
              style={{
                display: "flex",
                height: "100%",
                justifyContent: "flex-start",
                alignItems: "flex-start",
              }}
            >
              <LampMobile
                src="/assets/testimonies/lamp-mobile.svg"
                alt="lamp desk"
                width={1500}
                height={1500}
              />
              <TestimonialsMobile />
            </div>
          ) : (
            <TestimonialsDesktop />
          )}
        </div>
      </StyledContentContainer>
    </TestimonialsModuleContainer>
  );
};

export default Testimonials;
