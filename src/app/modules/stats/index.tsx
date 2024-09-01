import {StatsModuleContainer, StatsModuleBackground} from "@/app/modules/stats/index.styles";
import SpaceGrotesk from "@/app/components/shared/fonts/space-grotesk";

const Stats = () => {
    return (
        <StatsModuleContainer id="Stats-module">
            <StatsModuleBackground src="/background/stats.svg"/>
            <SpaceGrotesk>Stats section</SpaceGrotesk>
        </StatsModuleContainer>
    );
};

export default Stats;
