import React from "react";
import styled from "styled-components";
import aboutImage from "../images/about-hero.jpg";
const AboutContainer = styled.div`
  width: 100%;
  height: 80vh;
  background-image: url(${aboutImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
  margin-bottom: 100px;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #0c6d1c;
    opacity: 0.56;
  }
`;
const InnerText = styled.div`
  position: absolute;
  bottom: 200px;
  left: -90px;

  h1 {
    transform: rotate(-90deg);
    font-size: 4.8rem;
    font-family: "Poppins", sans-serif;
    color: white;

    @media screen and (max-width: 768px) {
      font-size: 4rem;
    }
  }
  & p {
    width: 250px;
    position: absolute;
    left: 210px;
    font-size: 1.5rem;
    font-weight: 200;
    bottom: -90px;
    color: white;

    @media screen and (max-width: 768px) {
      width: 150px;
      font-size: 1.2rem;
      bottom: -80px;
      left: 170px;
    }

    span {
      font-weight: 600;
    }
  }
`;
function AboutHero() {
  return (
    <AboutContainer>
      <InnerText>
        <h1>Curious</h1>
        <p>
          About us, our services and what makes us
          <span> stand out from other Organizations?</span>
        </p>
      </InnerText>
    </AboutContainer>
  );
}

export default AboutHero;
