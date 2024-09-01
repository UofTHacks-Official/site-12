import SpaceGrotesk from "@/app/components/shared/fonts/space-grotesk";
import {AboutUsModuleBackground, AboutUsModuleContainer} from "@/app/modules/about-us/index.styles";
import Manrope from "@/app/components/shared/fonts/manrope";

const AboutUs = () => {
    return (
        <AboutUsModuleContainer>
            <AboutUsModuleBackground src="/background/about-us.svg"/>
            <Manrope>about us section</Manrope>
        </AboutUsModuleContainer>
    );
};

export default AboutUs;
