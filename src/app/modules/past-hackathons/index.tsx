import {
    PastHackathonsModuleContainer,
    PastHackathonsModuleBackground
} from "@/app/modules/past-hackathons/index.styles";
import SpaceGrotesk from "@/app/components/shared/fonts/space-grotesk";

const PastHackathons = () => {

    const spaceGroteskStyles = {
        color: "white",
    }
    return (
        <PastHackathonsModuleContainer id="PastHackathons-module">
            <PastHackathonsModuleBackground src="/background/past-hackathons.svg"/>
            <SpaceGrotesk style={spaceGroteskStyles}>PastHackathons section</SpaceGrotesk>
        </PastHackathonsModuleContainer>
    );
};

export default PastHackathons;
