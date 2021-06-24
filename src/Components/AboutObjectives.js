import React from "react";
import styled from "styled-components";
import img4 from "../images/img4.jpeg";

const ObjectivesContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 450px;
`;
const ImageContainer = styled.div`
  background: url(${img4});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.4);
  }
`;
const ObjectivesList = styled.div``;

function AboutObjectives() {
  return (
    <ObjectivesContainer>
      <ImageContainer></ImageContainer>
      <ObjectivesList>
        <ul>
          <li></li>
        </ul>
      </ObjectivesList>
    </ObjectivesContainer>
  );
}

export default AboutObjectives;
