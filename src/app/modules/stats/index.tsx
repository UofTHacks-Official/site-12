import {
  StatsModuleContainer,
  StatsModuleBackground,
  StatsImageWrapper,
} from "@/app/modules/stats/index.styles";
import BooksSVG from "../../../../public/assets/main-books.svg";
import FullBooksSVG from "../../../../public/assets/uncut-Books.svg"; // Importing the full SVG
import Image from "next/image";
import { useMobileDetect } from "@/app/hooks/useMobileDetect";
import { useEffect, useState } from "react";

const Stats = () => {
  const isMobile = useMobileDetect();
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1200); // Adjust the width threshold as needed
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial check

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <StatsModuleContainer isMobile={isMobile} id="Stats-module">
      <StatsModuleBackground src="/background/stats.svg" />
      <StatsImageWrapper isMobile={isMobile} isLargeScreen={isLargeScreen}>
        <Image
          src={isLargeScreen ? FullBooksSVG : BooksSVG} // Use the full SVG on larger screens
          alt="books"
          layout="fill"
          objectFit="contain"
          objectPosition={isLargeScreen ? "center" : "left center"} // Center the image on larger screens
        />
      </StatsImageWrapper>
    </StatsModuleContainer>
  );
};

export default Stats;
