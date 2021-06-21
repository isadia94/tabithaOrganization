import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import { menuData } from "../data/Menudata";

const Section = styled.section`
  width: 100%;
  height: 100%;
  background-color: black;
  color: white;
`;
const Container = styled.div`
  padding: 1rem 2rem;
  max-width: 1300px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: 300px;
  }
`;
const AboutContainer = styled.div`
  @media screen and (max-width: 768px) {
    text-align: center;
  }

  p {
    margin-top: 2rem;
  }
`;
const Logo = styled(Link)`
  text-decoration: none;
  color: #fff;
  font-size: 2rem;
  font-weight: 600;

  @media screen and (max-width: 768px) {
    font-size: 1.2rem;
    margin-bottom: 2rem;
  }
`;
const NavigationLinks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;

  h3 {
    margin-bottom: 3rem;
  }
`;
const NavMenuLinks = styled(Link)`
  color: #fff;
  text-decoration: none;
  margin-bottom: 1rem;
  cursor: pointer;
`;
const SocialLinks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  h3 {
    margin-bottom: 1rem;
  }
`;

const SocialIcons = styled.div`
  cursor: pointer;
`;

const ContactSection = () => {
  return (
    <Section>
      <Container>
        <AboutContainer>
          <Logo to="/">Tabitha Alms Organization</Logo>
          <p>
            Tabitha Alms Ministry Organization is a relief and development arm
            established as a ministry in JCC church Nakuru with the purpose of
            reaching out to the needy and vulnerable with care and love of God
            to empower them lead wholesome and dignified lives.
          </p>
        </AboutContainer>
        <NavigationLinks>
          <h3>Useful Links</h3>
          {menuData.map((item, index) => (
            <NavMenuLinks to={item.link} key={index}>
              {item.title}
            </NavMenuLinks>
          ))}
        </NavigationLinks>
        <SocialLinks>
          <h3>Follow Us</h3>
          <SocialIcons>
            <FacebookIcon style={{ fontSize: "50px" }} />
            <InstagramIcon style={{ fontSize: "50px" }} />
            <TwitterIcon style={{ fontSize: "50px" }} />
          </SocialIcons>
        </SocialLinks>
      </Container>
    </Section>
  );
};

export default ContactSection;
