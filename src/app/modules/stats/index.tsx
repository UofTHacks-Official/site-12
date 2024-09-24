import {
  StatsModuleContainer,
  StatsModuleBackground,
  StatsImageWrapper,
} from "@/app/modules/stats/index.styles";
import SpaceGrotesk from "@/app/components/shared/fonts/space-grotesk";
import BooksSVG from "./Main Books.svg";
import Image from "next/image";

const Stats = () => {
  return (
    <StatsModuleContainer id="Stats-module">
      <StatsModuleBackground src="/background/stats.svg" />
      <StatsImageWrapper>
        <Image
          src={BooksSVG}
          alt="My Design"
          layout="fill"
          objectFit="contain"
          objectPosition="left center"
        />
      </StatsImageWrapper>
    </StatsModuleContainer>
  );
};

export default Stats;
