import React from "react";
import styled from "styled-components";
import LeaderShip from "../images/leadership.jpg";
import { TeamData } from "../data/TeamData";

const LeaderShipContainer = styled.div`
  height: 500px;
  background-image: url(${LeaderShip});
  background-position: center;
  background-size: cover;
  position: relative;
  padding: 4rem 4rem;
  color: white;
  margin-bottom: 100px;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #000000;
    opacity: 0.56;
  }
`;
const LeaderShipTitle = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);

  h2 {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-weight: 300;
    font-size: 3rem;

    span {
      font-size: 4rem;
      font-weight: 700;
    }
  }
`;
const LeaderShipCardContainer = styled.div`
  width: 100%;
  backround: yellow;

  position: absolute;
  top: 42%;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
`;
const LeaderShipCard = styled.div`
  width: 220px;
  height: 300px;
  background: white;
  margin-right: 10px;
  position: relative;
  color: black;

 
  }
`;

const LeaderShipText = styled.div`
  margin: 10px 10px;
  h3 {
    text-align: center;
    font-size: 16px;
    border-bottom: 1px solid;
    margin-bottom: 6px;
  }
  h4 {
    text-align: center;
    font-weight: 300;
  }
`;
const ImgCard = styled.img`
  height: 220px;
  width: 220px;
  object-fit: cover;
`;
function AboutLeadership() {
  return (
    <LeaderShipContainer>
      <LeaderShipTitle>
        <h2>
          OUR<br></br> <span>LEADERSHIP</span>
        </h2>
      </LeaderShipTitle>
      <LeaderShipCardContainer>
        {TeamData.map((item, idx) => (
          <LeaderShipCard key={idx}>
            <ImgCard src={item.image} />
            <LeaderShipText>
              <h3>{item.name}</h3>
              <h4>{item.title}</h4>
            </LeaderShipText>
          </LeaderShipCard>
        ))}
      </LeaderShipCardContainer>
    </LeaderShipContainer>
  );
}

export default AboutLeadership;
