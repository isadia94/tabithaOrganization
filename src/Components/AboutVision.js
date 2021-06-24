import React from "react";
import styled from "styled-components";

import visionImage from "../images/vision.jpg";
const Vision = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  grid-template-rows: 550px;
  margin-bottom: 100px;
`;
const VisionImage = styled.div`
  background-image: url(${visionImage});
  background-position: center;
  background-size: cover;
  position: relative;

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
const VisionImageText = styled.div`
  position: absolute;
  top: 50%;
  right: -30px;
  transform: translateY(-50%);
  z-index: 1000;
`;
const VisionText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  h3 {
    font-size: 2.7rem;
    font-family: "Kaushan Script", cursive;
    margin: 0 60px;
  }
`;
function AboutVision() {
  return (
    <Vision>
      <VisionImage>
        <VisionImageText>
          <p
            style={{
              fontSize: "3.4rem",
              color: "white",
            }}
          >
            Our
          </p>
          <h2
            style={{
              transform: "rotate(-90deg)",
              fontSize: "5rem",
              color: "white",
            }}
          >
            Vision
          </h2>
        </VisionImageText>
      </VisionImage>
      <VisionText>
        <h3>
          Empowering the needy and vulnerable to lead wholesome and dignified
          lives.
        </h3>
      </VisionText>
    </Vision>
  );
}

export default AboutVision;
