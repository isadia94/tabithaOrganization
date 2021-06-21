import React from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { menuData } from "../data/Menudata";
import MenuIcon from "@material-ui/icons/Menu";
const Nav = styled.nav`
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;

  z-index: 100;

  @media screen and (max-width: 768px) {
    padding: 1rem 1rem;
  }
`;

const NavLink = css`
color:#000;
display:flex;
align-items:center;
padding 0 1rem;
height:100%;
cursor: pointer;
text-decoration:none;`;

const Logo = styled(Link)`
  font-size: 32px;
  text-decoration: none;
  color: #000;
  font-family: "Courgette", cursive;

  @media screen and (max-width: 768px) {
    font-size: 26px;
  }
`;

const MenuBars = styled(MenuIcon)`
  display: none !important;

  @media screen and (max-width: 768px) {
    display: block !important;
    color: #000 !important;

    font-size: 28px !important;
  }
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: 44px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavMenuLinks = styled.div`
  a {
    ${NavLink};
  }
`;
function Navbar({ toggle }) {
  return (
    <Nav>
      <Logo to="/">Tabitha Alms Organization</Logo>
      <MenuBars onClick={toggle} />
      <NavMenu>
        {menuData.map((item, index) => (
          <NavMenuLinks key={index}>
            <Link to={item.link}>{item.title}</Link>
          </NavMenuLinks>
        ))}
      </NavMenu>
    </Nav>
  );
}

export default Navbar;
