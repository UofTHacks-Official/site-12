import React, {useState, useEffect} from "react";
import styled from "styled-components";
import {useMobileDetect} from "@/app/hooks/useMobileDetect";
import Image from "next/image";
// import NavBarLogo from "public/assets/navbar_logo.svg";
import {
    HamburgerMenu,
    Logo,
    MobileMenu,
    MobileNavLinkItem,
    NavLink,
    NavLinkItem,
    NavLinks,
    NavigationBar,
    NavigationContainer,
} from "./index.styles";
import Manrope from "../fonts/manrope";

const NavBar = () => {
    const [isNavBarVisible, setNavBarVisible] = useState(true);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const isMobile = useMobileDetect();
    const [mobileMenuNode, setMobileMenuNode] = useState<HTMLSpanElement | null>(
        null
    );

    const [hamburgerNode, setHamburgerNode] = useState<HTMLDivElement | null>(
        null
    );

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const scrollToSection = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({behavior: "smooth"});
        }
    };

    const navManropeStyle = () => ({
        fontSize: "17px",
        display: "inline",
        letterSpacing: "0px",
        color: "white",
    });

    return (
        <>
            <NavigationContainer open={isNavBarVisible}>
                <NavigationBar>
                    <Logo onClick={() => scrollToSection("start")}>
                        {/* <Image src={NavBarLogo} alt="UofTHacks Logo" /> */}
                    </Logo>
                    <NavLinks>
                        <div style={{display: isMobile ? "none" : "flex", gap: 10}}>
                            <NavLinkItem>
                                <NavLink onClick={() => scrollToSection("Sponsors-module")}>
                                    <Manrope style={navManropeStyle()}>sponsors</Manrope>
                                </NavLink>
                            </NavLinkItem>
                            <NavLinkItem>
                                <NavLink onClick={() => scrollToSection("FAQ-module")}>
                                    <Manrope style={navManropeStyle()}>faq</Manrope>
                                </NavLink>
                            </NavLinkItem>
                            <NavLinkItem>
                                <NavLink onClick={() => scrollToSection("Contact-module")}>
                                    <Manrope style={navManropeStyle()}>contact</Manrope>
                                </NavLink>
                            </NavLinkItem>
                        </div>
                        {/* <HamburgerMenu
              ref={(node) => setHamburgerNode(node)}
              mobile={isMobile}
              onClick={toggleMenu}
            >
              <Manrope>☰</Manrope>
            </HamburgerMenu> */}
                    </NavLinks>
                </NavigationBar>
            </NavigationContainer>
            {/* {isMobile && (
        <span ref={(node) => setMobileMenuNode(node)}>
          <MobileMenu open={isMenuOpen}>
            <NavLinkItem>
              <NavLink onClick={() => scrollToSection("Sponsors-module")}>
                <Manrope style={navManropeStyle()}>sponsors</Manrope>
              </NavLink>
            </NavLinkItem>
            <NavLinkItem>
              <NavLink onClick={() => scrollToSection("FAQ-module")}>
                <Manrope style={navManropeStyle()}>faq</Manrope>
              </NavLink>
            </NavLinkItem>
            <NavLinkItem>
              <NavLink onClick={() => scrollToSection("Contact-module")}>
                <Manrope style={navManropeStyle()}>contact</Manrope>
              </NavLink>
            </NavLinkItem>
          </MobileMenu>
        </span>
      )} */}
        </>
    );
};

export default NavBar;
