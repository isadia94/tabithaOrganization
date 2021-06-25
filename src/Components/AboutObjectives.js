import React from "react";
import styled from "styled-components";
import img4 from "../images/img4.jpeg";
import tick from "../images/tick.svg";

const ObjectivesContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 450px;
  margin-bottom: 100px;
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
    background: rgba(0, 0, 0, 0.6);
  }
`;
const ObjectivesList = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 3rem;

  li {
    font-size: 14px;
    list-style: url(${tick});
    margin-bottom: 5px;
  }
`;

const ImageText = styled.div`
  color: white;
  h3 {
    position: absolute;
    z-index: 100;

    top: 40%;
    right: -10%;
    font-size: 3.4rem;
    transform: rotate(-90deg);
  }

  h4 {
    position: absolute;
    z-index: 100;

    top: 10%;
    right: 25%;
    font-size: 3.4rem;
    font-weight: 200;
  }
`;

function AboutObjectives() {
  return (
    <ObjectivesContainer>
      <ImageContainer>
        <ImageText>
          <h4>OUR</h4>
          <h3>OBJECTIVES</h3>
        </ImageText>
      </ImageContainer>
      <ObjectivesList>
        <ul>
          <li>
            To mitigate suffering of the needy children, women and families and
            give them hope.
          </li>
          <li>
            To provide early child education of needy children and sponsor needy
            learners
          </li>
          <li>To nurture talents and provide vocational skills to the needy</li>
          <li>
            To provide economic empowerment and psychosocial support of widows,
            single mothers, and teenage mothers
          </li>
          <li>
            To reach out to the needy in communities to inspire and show God’s
            love through provision of food, clothing, healthcare, spiritual
            nourishment and charity work.
          </li>
          <li>
            To support church leaders/laborers meet their needs as they do the
            work of ministry and get involved in service to humanity.
          </li>
        </ul>
      </ObjectivesList>
    </ObjectivesContainer>
  );
}

export default AboutObjectives;
