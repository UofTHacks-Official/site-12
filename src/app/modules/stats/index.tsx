import {
  StatsModuleContainer,
  StatsModuleBackground,
  StatsImageWrapper,
} from "@/app/modules/stats/index.styles";
import FullBooksSVG from "../../../../public/assets/main-books.svg";
import Image from "next/image";
import { useMobileDetect } from "@/app/hooks/useMobileDetect";

const Stats = () => {
  const isMobile = useMobileDetect();

  return (
    <StatsModuleContainer isMobile={isMobile} id="Stats-module">
      <StatsModuleBackground src="/background/stats.svg" />
      <StatsImageWrapper isMobile={isMobile}>
        <Image
          src={FullBooksSVG} // Use the full SVG on larger screens
          alt="books"
          layout="fill"
          objectFit="contain"
          objectPosition={"center"} // Center the image on larger screens
        />
      </StatsImageWrapper>
    </StatsModuleContainer>
  );
};

export default Stats;
