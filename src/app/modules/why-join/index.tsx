import {WhyJoinModuleBackground, WhyJoinModuleContainer} from "@/app/modules/why-join/index.styles";
import SpaceGrotesk from "@/app/components/shared/fonts/space-grotesk";

const WhyJoin = () => {
    return (
        <WhyJoinModuleContainer id="WhyJoin-module">
            <WhyJoinModuleBackground src="/background/why-join.svg"/>
            <SpaceGrotesk>WhyJoin section</SpaceGrotesk>
        </WhyJoinModuleContainer>
    );
};

export default WhyJoin;
