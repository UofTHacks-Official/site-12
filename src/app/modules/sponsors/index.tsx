import {SponsorsModuleBackground, SponsorsModuleContainer} from "@/app/modules/sponsors/index.styles";
import SpaceGrotesk from "@/app/components/shared/fonts/space-grotesk";

const Sponsors = () => {
    return (
        <SponsorsModuleContainer id="Sponsors-module">
            <SponsorsModuleBackground src="/background/sponsors.svg" alt="sponsor module background"/>
            <SpaceGrotesk>Sponsors section</SpaceGrotesk>
        </SponsorsModuleContainer>
    );
};

export default Sponsors;
