"use client";

import styled from "styled-components";
import Hero from "@/app/modules/hero";
import AboutUsModule from "@/app/modules/about-us";
import Stats from "@/app/modules/stats";
import PastHackathons from "@/app/modules/past-hackathons";
import WhyJoin from "@/app/modules/why-join";
import Subscribe from "@/app/modules/subscribe";
import FAQ from "@/app/modules/faq";
import ContactUs from "@/app/modules/contact-us";
import Footer from "@/app/modules/footer";
import { ReactNode } from "react";
import Testimonials from "@/app/modules/testimonials";
import Sponsors from "@/app/modules/sponsors";

const MainContainer = styled.div`
  background-color: #f9f9f9;
  opacity: 1;
  overflow: auto;
  overflow-x: hidden;
  overscroll-behavior: none;
`;

interface Site12Props {
  children?: ReactNode;
}

const Site12 = ({ children }: Site12Props) => {
  return (
    <MainContainer id="start">
      {children}
      <Hero />
      <AboutUsModule />
       {/*<Subscribe />*/}
      <Stats />
      <PastHackathons />
      {/* <WhyJoin /> */}
      <Testimonials />
      <Sponsors />
      <FAQ />
      <ContactUs />
      <Footer />
    </MainContainer>
  );
};

export default Site12;
