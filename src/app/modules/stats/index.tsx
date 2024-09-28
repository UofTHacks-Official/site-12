import {
    StatsModuleContainer,
    StatsModuleBackground,
    StatsImageWrapper,
} from "@/app/modules/stats/index.styles";
import BooksSVG from "../../../../public/assets/main-books.svg";
import Image from "next/image";
import {useMobileDetect} from "@/app/hooks/useMobileDetect";

const Stats = () => {
    const isMobile = useMobileDetect()
    return (
        <StatsModuleContainer isMobile={isMobile} id="Stats-module">
            <StatsModuleBackground src="/background/stats.svg"/>
            <StatsImageWrapper isMobile={isMobile}>
                <Image
                    src={BooksSVG}
                    alt="books"
                    layout="fill"
                    objectFit="contain"
                    objectPosition="left center"
                />
            </StatsImageWrapper>
        </StatsModuleContainer>
    );
};

export default Stats;
