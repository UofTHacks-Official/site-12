import React from "react";
import { WhyJoinModuleContainer } from "@/app/modules/why-join/index.styles";
import { useMobileDetect } from "@/app/hooks/useMobileDetect";
import WhyJoinMobile from "@/app/components/why-join/mobile";
import WhyJoinDesktop from "@/app/components/why-join/desktop";

const WhyJoin = () => {
  const isMobile = useMobileDetect();
  return (
    <WhyJoinModuleContainer id="Why-join-module">
      {isMobile ? <WhyJoinMobile /> : <WhyJoinDesktop />}
    </WhyJoinModuleContainer>
  );
};

export default WhyJoin;
