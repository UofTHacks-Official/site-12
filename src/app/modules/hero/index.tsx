import {HeroModuleContainer} from "@/app/modules/hero/index.styles";
import SpaceGrotesk from "@/app/components/shared/fonts/space-grotesk";
import Manrope from "@/app/components/shared/fonts/manrope";

const Hero = () => {
    return (
        <HeroModuleContainer id="hero-module">
            <SpaceGrotesk>hero section</SpaceGrotesk>
            <Manrope>UoftHacks 12</Manrope>
        </HeroModuleContainer>
    );
};

export default Hero;
