import {HeroBackground, HeroModuleContainer} from "@/app/modules/hero/index.styles";
import SpaceGrotesk from "@/app/components/shared/fonts/space-grotesk";
import Manrope from "@/app/components/shared/fonts/manrope";
import NavBar from "@/app/components/shared/navbar";

const Hero = () => {
    return (
        <HeroModuleContainer id="hero-module">
            <HeroBackground src="/background/hero.svg"/>
            <NavBar/>
            <SpaceGrotesk>hero section</SpaceGrotesk>
            <Manrope>UoftHacks 12</Manrope>
        </HeroModuleContainer>
    );
};

export default Hero;
