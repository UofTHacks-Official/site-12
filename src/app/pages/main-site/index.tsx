"use client";

import styled from "styled-components";
import Hero from "@/app/modules/hero";
import AboutUs from "@/app/modules/about-us";
import Stats from "@/app/modules/stats";
import PastHackathons from "@/app/modules/past-hackathons";
import WhyJoin from "@/app/modules/why-join";
import Testimonials from "@/app/modules/testimonials";
import Sponsors from "@/app/modules/sponsors";
import FAQ from "@/app/modules/faq";
import ContactUs from "@/app/modules/contact-us";
import Footer from "@/app/modules/footer";

const MainContainer = styled.div`
    background-color: #f9f9f9;
    opacity: 1;
    overflow: auto;
`;

const Site12 = () => {
    return (
        <MainContainer id="start">
            {/*<MLHBanner />*/}
            <Hero/>
            <AboutUs/>
            <Stats/>
            <PastHackathons/>
            <WhyJoin/>
            <Testimonials/>
            <Sponsors/>
            <FAQ/>
            <ContactUs/>
            <Footer/>
        </MainContainer>
    );
};

export default Site12


