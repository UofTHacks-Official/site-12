import React from "react";
import {useMobileDetect} from "@/app/hooks/useMobileDetect";
import WhyJoinMobile from "@/app/components/why-join/mobile"
import WhyJoinDesktop from "@/app/components/why-join/desktop"

const WhyJoin = () => {
    const isMobile = useMobileDetect()
    return isMobile ? <WhyJoinMobile/> : <WhyJoinDesktop/>
};

export default WhyJoin;
