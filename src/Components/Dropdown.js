import React from "react";
import styled from "styled-components";
import { menuData } from "../data/Menudata";
import { Link } from "react-router-dom";
import CloseIcon from "@material-ui/icons/Close";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";

const DropdownContainer = styled.div`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: #cd853f;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`;

const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 1.2rem;
  cursor: pointer;
  outline: none;
`;

const DropdownWrapper = styled.div``;
const DropdownMenu = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, 80px);
  text-align: center;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(4, 70px);
  }
`;
const DropdownLink = styled(Link)`
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  text-decoration: none;

  @media screen and (max-width: 480px) {
    font-size: 1.1rem;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

function Dropdown({ isOpen, toggle }) {
  return (
    <DropdownContainer isOpen={isOpen} onClick={toggle}>
      <Icon>
        <CloseIcon onClick={toggle} />
      </Icon>
      <DropdownWrapper>
        <DropdownMenu>
          {menuData.map((item, index) => (
            <DropdownLink to={item.link} key={index}>
              {item.title}
            </DropdownLink>
          ))}
        </DropdownMenu>
      </DropdownWrapper>
      <SocialIcons>
        <FacebookIcon
          style={{
            fontSize: "40px",
          }}
        />
        <TwitterIcon
          style={{
            marginLeft: "15px",
            marginRight: "15px",
            fontSize: "40px",
          }}
        />
        <InstagramIcon
          style={{
            fontSize: "40px",
          }}
        />
      </SocialIcons>
    </DropdownContainer>
  );
}

export default Dropdown;
