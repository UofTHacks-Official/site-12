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
      margin: 40px 10%;
  `}
  top: 0;
  width: 80%;
  transition: top 0.3s;
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
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
    border-radius: 16px;
    background: rgba(34, 92, 144, 0.50);
    backdrop-filter: blur(6px);
`;

const NavLink = styled.a`
    display: flex;
    padding: 16px 24px;
    justify-content: center;
    align-items: center;
    gap: 10px;
`;

export {
    NavigationContainer, 
    NavigationBar, 
    Logo, 
    NavLinks, 
    NavLinkItem, 
    NavLink
}