import React, { useState, useEffect } from "react";
import { useMobileDetect } from "@/app/hooks/useMobileDetect";
import Image from "next/image";
import {
  Logo,
  MobileMenu,
  NavLink,
  NavLinkItem,
  NavLinks,
  NavigationBar,
  NavigationContainer,
  HamburgerMenu,
  MobileNavLinkItem,
} from "./index.styles";
import Manrope from "../fonts/manrope";

const NavBarLogo = "/assets/navbar-logo.svg";

const NavBar = () => {
  const [isNavBarVisible, setNavBarVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isMobile = useMobileDetect();
  const [mobileMenuNode, setMobileMenuNode] = useState<HTMLSpanElement | null>(
    null
  );

  const [hamburgerNode, setHamburgerNode] = useState<HTMLDivElement | null>(
    null
  );

  useEffect(() => {
    const timeout = setTimeout(() => {
      setNavBarVisible(true);
    }, 100);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  const hackerPortalLink = "https://portal.uofthacks.com";
  const onHackerPortalClick = () => {
    window.open(hackerPortalLink);
  };

  const [prevScrollY, setPrevScrollY] = useState(0); // Track previous scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const scrollDirection = scrollY > prevScrollY ? "down" : "up";
      if (scrollY < 70) {
        setNavBarVisible(true);
        return;
      }

      // Determine visibility based on scroll direction
      if (scrollDirection === "down") {
        setNavBarVisible(false);
        setIsMenuOpen(false);
      } else {
        setNavBarVisible(true);
      }

      setPrevScrollY(scrollY); // Update previous scroll position
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollY]);

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (
        isMenuOpen &&
        mobileMenuNode &&
        !mobileMenuNode.contains(event.target) &&
        !hamburgerNode?.contains(event.target)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 0) {
        setNavBarVisible(false);
      } else {
        setNavBarVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
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
            <Image
              src={NavBarLogo}
              alt="UofTHacks Logo"
              width={isMobile ? 70 : 100}
              height={isMobile ? 35 : 50}
            />
          </Logo>
          <NavLinks>
            <div style={{ display: isMobile ? "none" : "flex", gap: 10 }}>
              <NavLinkItem>
                <NavLink onClick={() => scrollToSection("Why-join-module")}>
                  <Manrope style={navManropeStyle()}>Why Join?</Manrope>
                </NavLink>
              </NavLinkItem>
              <NavLinkItem>
                <NavLink onClick={() => scrollToSection("FAQ-module")}>
                  <Manrope style={navManropeStyle()}>FAQ</Manrope>
                </NavLink>
              </NavLinkItem>
              <NavLinkItem>
                <NavLink onClick={() => scrollToSection("Contact-module")}>
                  <Manrope style={navManropeStyle()}>Contact Us</Manrope>
                </NavLink>
              </NavLinkItem>
            </div>
            <HamburgerMenu
              ref={(node) => setHamburgerNode(node)}
              mobile={isMobile}
              onClick={toggleMenu}
            >
              <Manrope style={navManropeStyle()}>☰</Manrope>
            </HamburgerMenu>
          </NavLinks>
        </NavigationBar>
      </NavigationContainer>
      {isMobile && (
        <span ref={(node) => setMobileMenuNode(node)}>
          <MobileMenu open={isMenuOpen}>
            <MobileNavLinkItem>
              <NavLink onClick={() => scrollToSection("Why-join-module")}>
                <Manrope style={navManropeStyle()}>Why Join?</Manrope>
              </NavLink>
            </MobileNavLinkItem>
            <MobileNavLinkItem>
              <NavLink onClick={() => scrollToSection("FAQ-module")}>
                <Manrope style={navManropeStyle()}>
                  Frequently Asked Questions
                </Manrope>
              </NavLink>
            </MobileNavLinkItem>
            <MobileNavLinkItem>
              <NavLink onClick={() => scrollToSection("Contact-module")}>
                <Manrope style={navManropeStyle()}>Contact Us</Manrope>
              </NavLink>
            </MobileNavLinkItem>
          </MobileMenu>
        </span>
      )}
    </>
  );
};

export default NavBar;
