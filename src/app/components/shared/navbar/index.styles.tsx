import styled from "styled-components";

type HamburgerProps = {
  mobile?: boolean | null;
};

type NavContainerProps = {
  open?: boolean | null;
};
type NavbarProps = {
  mobile?: boolean | null;
};

type MobileMenuProps = {
  open?: boolean | null;
};

const NavigationContainer = styled.div<NavContainerProps>`
  transform: translateY(${(props) => (props.open ? "0" : "-100%")});
  transition: transform 0.3s ease-in-out;
  width: 100%;
  height: 100px;
  background-color: transparent;
  position: fixed;
  z-index: 1000;
  overflow: hidden;
`;

const NavigationBar = styled.nav<NavbarProps>`
  display: flex;
  position: fixed;
  height: 40px;
  z-index: 1001;
  justify-content: space-between;
  align-items: center;
  ${(props) =>
    props.mobile
      ? `
    margin: 40px 0;
  `
      : `
      margin: 35px 8%;
  `}
  top: 0;
  width: 84%;
  transition: top 0.3s;
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;

  //   padding: 10px;
  background: rgba(34, 92, 144, 0.5);
  backdrop-filter: blur(6px);
  border-radius: 10px;

  &:hover {
    cursor: pointer;
  }
`;

const NavLinks = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
`;

const NavLinkItem = styled.li`
  cursor: pointer;
  border-radius: 16px;
  background: rgba(34, 92, 144, 0.5);
  margin: 10px;
  backdrop-filter: blur(6px);
`;

const NavLink = styled.a`
  display: flex;
  padding: 16px 24px;
  justify-content: center;
  align-items: center;
`;

const HamburgerMenu = styled.div<HamburgerProps>`
  cursor: pointer;
  ${(props) =>
    props.mobile
      ? `
        top: 0;
        display: block;
        padding: 10px 13px;
        justify-content: center;
        z-index: 1002;
        cursor: pointer;
        border-radius: 10px;
        background: rgba(34, 92, 144, 0.5);
        margin: 10px;
        backdrop-filter: blur(6px);
      `
      : `display: none;`}
`;

const MobileMenu = styled.div<MobileMenuProps>`
  transform: translateY(${(props) => (props.open ? "0" : "-200%")});
  transition: transform 0.3s ease-in-out;

  position: fixed;
  background-color: #f0f0f0;
  padding-top: 100px;
  left: 0;
  width: 100%;
  z-index: 999;
  overflow: hidden;
`;

const MobileNavLinkItem = styled(NavLinkItem)`
  margin-bottom: 20px;
  margin-top: 20px;
  margin-left: 10%;
  margin-right: 10%;
  width: 80%;
  padding: 10px 0;
  list-style-type: none;
`;

const PrimaryButtonContainer = styled.button`
  width: 100%;
  padding: 0.5rem;
  align-self: center;
  justify-content: center;
  margin-top: -10px;
  margin-bottom: auto;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  border-radius: 15px;
  border: 2px solid var(--black, #282828);
  background: var(--black, #282828);
  border-radius: 5px;
  border: 2px solid var(--Black, #282828);
  background: var(--Blue, #2850a0);
  /* Default Shadow */
  box-shadow: 0px 4px 0px 0px #282828;

  &:hover {
    transform: scale(1.05);
  }
`;

const PrimaryButtonTextContainer = styled.div`
  display: inline;
  text-transform: uppercase;
  color: var(--white, #f9f9f9);
`;

export {
  NavigationContainer,
  NavigationBar,
  Logo,
  NavLinks,
  NavLinkItem,
  NavLink,
  MobileMenu,
  MobileNavLinkItem,
  PrimaryButtonContainer,
  PrimaryButtonTextContainer,
  HamburgerMenu,
};
