import {StyledContentContainer, TestimonialsModuleContainer} from "@/app/modules/testimonials/index.styles";
import SpaceGrotesk, {SpaceGroteskSectionTitle} from "@/app/components/shared/fonts/space-grotesk";
import {useMobileDetect} from "@/app/hooks/useMobileDetect";
import TestimonialsMobile from "@/app/components/testimonials/mobile";
import TestimonialsDesktop from "@/app/components/testimonials/desktop";

const Testimonials = () => {
    const isMobile = useMobileDetect()
    return (
        <TestimonialsModuleContainer id="Testimonials-module">
            <StyledContentContainer isMobile={isMobile}>
            <SpaceGroteskSectionTitle isMobile={isMobile}>Testimonials</SpaceGroteskSectionTitle>
            {isMobile ? <TestimonialsMobile/> : <TestimonialsDesktop/>}
            </StyledContentContainer>
        </TestimonialsModuleContainer>
    );
};

export default Testimonials;
