"use client";

import styled from "styled-components";
import Hero from "@/app/modules/hero";
import AboutUs from "@/app/modules/about-us";
import Stats from "@/app/modules/stats";
import PastHackathons from "@/app/modules/past-hackathons";
import WhyJoin from "@/app/modules/why-join";
import Subscribe from "@/app/modules/subscribe";
import Sponsors from "@/app/modules/sponsors";
import FAQ from "@/app/modules/faq";
import ContactUs from "@/app/modules/contact-us";
import Footer from "@/app/modules/footer";
import {ReactNode} from "react";
import Testimonials from "@/app/modules/testimonials";

const MainContainer = styled.div`
    background-color: #f9f9f9;
    opacity: 1;
    overflow: auto;
    overflow-x: hidden;
`;

interface Site12Props {
    children?: ReactNode
}

const Site12 = ({children}: Site12Props) => {
    return (
        <MainContainer id="start">
            {/*<MLHBanner />*/}
            {children}
            <Hero/>
            <AboutUs/>
            <Stats/>
            {/*<PastHackathons/>*/}
            <WhyJoin/>
            <Subscribe/>
            {/*<Sponsors/>*/}
            <Testimonials/>
            <FAQ/>
            <ContactUs/>
            <Footer/>
        </MainContainer>
    );
};

export default Site12


