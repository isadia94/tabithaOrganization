import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

import { Button } from "@material-ui/core";

const Section = styled.section`
  width: 100%;
  height: 100%;
  padding: 4rem 0;
`;

const Container = styled.div`
  padding: 3rem calc((100vw - 1300px) / 2);
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 600px;

  @media screen and (max-width: 760px) {
    padding: 2rem calc((100vw - 1300px) / 2);
    grid-template-columns: 1fr;
    grid-template-rows: 500px;
  }
`;
const ColumnLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  line-height: 1.4;
  padding: 2rem 2rem;

  @media screen and (max-width: 760px) {
    margin-bottom: 2rem;
  }

  h1 {
    margin-bottom: 1rem;
    font-size: clamp(1.5rem, 6vw, 2rem);
    position: relative;
  }

  h1::before {
    content: "";
    position: absolute;
    bottom: 0;

    z-index: -1;
    left: 5px;
    width: 100px;
    background-color: yellow;
    height: 3px;
  }

  p {
    margin-bottom: 2rem;
  }
`;
const ColumnRight = styled.div`
  padding: 1rem 2rem;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const AboutSection = ({ heading, paragraphOne, paragraphTwo, image }) => {
  const history = useHistory();
  const NavigateToAbout = () => {
    history.push("/about");
  };
  return (
    <Section>
      <Container>
        <ColumnLeft>
          <h1>{heading}</h1>
          <p>{paragraphOne}</p>
          <p>{paragraphTwo}</p>
          <Button style={{ background: "#00cd95" }} onClick={NavigateToAbout}>
            READ MORE
          </Button>
        </ColumnLeft>
        <ColumnRight>
          <img src={image} alt="aboutus" />
        </ColumnRight>
      </Container>
    </Section>
  );
};

export default AboutSection;
