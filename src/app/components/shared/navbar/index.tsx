import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useMobileDetect } from "@/app/hooks/useMobileDetect";
import Image from "next/image";
// import NavBarLogo from "public/assets/navbar_logo.svg";
import { Logo, NavLink, NavLinkItem, NavLinks, NavigationBar, NavigationContainer } from "./index.styles";
import Manrope from "../fonts/manrope";

const NavBar = () => {
    const [isNavBarVisible, setNavBarVisible] = useState(true);
    const [isMenuOpen, setIsMenuOpen] = useState(false);


    const isMobile = useMobileDetect();
    const [mobileMenuNode, setMobileMenuNode] = useState<HTMLSpanElement | null>(
      null
    );

    const scrollToSection = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      };

    const navManropeStyle = () => ({
        fontSize: "17px",
        display: "inline",
        letterSpacing: "0px",
        color: "white"
    });

    return (
        <>
            <NavigationContainer open={isNavBarVisible}>
                <NavigationBar>
                <Logo onClick={() => scrollToSection("start")}>
                    {/* <Image src={NavBarLogo} alt="UofTHacks Logo" /> */}
                </Logo>
                <NavLinks>
                    <div style={{ display: isMobile ? "none" : "flex" }}>
                        <NavLinkItem>
                            <NavLink onClick={() => scrollToSection("about-us")}>
                                <Manrope style={navManropeStyle()}>sponsors</Manrope>
                            </NavLink>
                        </NavLinkItem>
                    </div>
                </NavLinks>
                </NavigationBar>
            </NavigationContainer>
        </>
    )
}

export default NavBar
