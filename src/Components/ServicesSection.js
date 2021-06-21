import React from "react";
import styled from "styled-components";

const Section = styled.section`
  height: 100%;
  padding: 2rem 2rem;
  text-align: center;

  h1 {
    font-family: "Courgette", cursive;
    font-size: 2rem;
  }

  h3 {
    font-weight: 300;
    margin-bottom: 2rem;
  }
`;
const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: repeat(4, 300px);
  gap: 10px;
  margin-bottom: 4rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(11, 300px);
  }
`;
const Services = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #f7ea00;
  align-items: center;

  @media screen and (max-width: 768px) {
    border-radius: 10px;
  }
`;
const ServicesContent = styled.div`
  padding: 1rem;

  h2 {
    font-size: 1.1rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 0.9rem;
    color: rgb(70, 70, 70);
  }
`;
const Icon = styled.div`
  display: flex;
  padding: 15px;
  align-itens: center;
  justify-content;center;
  text-align: center;
  font-size: 3rem !important;
  border: 2px solid black;
  border-radius: 50%;

  @media screen and (max-width:768px){
    font-size: 2rem !important;
    padding: 10px;
  }
`;

const ServicesSection = ({ services }) => {
  return (
    <Section>
      <h1>Our Services</h1>
      <h3>Tabitha Alms Focus areas</h3>
      <Container>
        {services.map((item, index) => (
          <Services key={index}>
            <Icon>{item.icon}</Icon>
            <ServicesContent>
              <h2>{item.title}</h2>
              <p>{item.text}</p>
            </ServicesContent>
          </Services>
        ))}
      </Container>
    </Section>
  );
};

export default ServicesSection;
