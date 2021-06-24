import React from "react";
import styled from "styled-components";
import aboutImage from "../images/about-hero.jpg";
import aboutSide from "../images/about-aside.jpg";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import visionImage from "../images/vision.jpg";
import LeaderShip from "../images/leadership.jpg";
import { TeamData } from "../data/TeamData";

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

const AboutIntroContainer = styled.div`
  padding: 0 0 0 2rem;
  display: grid;
  grid-template-columns: 1.5fr 1.2fr;
  grid-template-rows: 650px;
  gap: 50px;
  margin-bottom: 100px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1000px 200px;
    padding: 0 1rem;
  }
`;
const IntroText = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 0.4fr 4fr;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
  p {
    font-size: 0.9rem;
    width: 100%;
  }

  @media screen and (max-width: 768px) {
    p {
      width: 100%;
    }
  }
`;
const LineEffect = styled.div`
  width: 10px;
  height: 600px;
  background: yellow;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
const IntroImage = styled.div`
  background-image: url(${aboutSide});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #faff05;
    opacity: 0.4;
  }
`;
const AboutIntro = styled.div`
  .topIntro {
    font-weight: bold;
    margin-bottom: 40px;
  }
  .bottomIntro {
    @media screen and (max-width: 768px) {
      text-align: center;
    }
  }

  @media screen and (max-width: 768px) {
    text-align: center;
  }
`;

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
  h3 {
    font-size: 1rem;
    text-align: center;
    border-bottom: 1px solid black;
    margin-bottom: 5px;
  }
  h4 {
    text-align: center;
  }
`;

const LeaderShipText = styled.div`
  background: white;
  color: black;
  padding: 10px 10px;
  margin-top: -7px;
`;
const ImgCard = styled.img`
  height: 220px;
  width: 220px;
  object-fit: cover;
`;
const About = () => {
  const history = useHistory();

  const NavigateToPortfolio = () => {
    history.push("/portfolio");
  };
  return (
    <>
      <AboutContainer>
        <InnerText>
          <h1>Curious</h1>
          <p>
            About us, our services and what makes us
            <span> stand out from other Organizations?</span>
          </p>
        </InnerText>
      </AboutContainer>
      <AboutIntroContainer>
        <IntroText>
          <LineEffect></LineEffect>
          <AboutIntro>
            <p className="topIntro">
              Tabitha Alms Ministry Organization is a relief and development arm
              established as a ministry in JCC Nakuru Church with the purpose of
              reaching out to the needy and vulnerable with care and love of God
              to empower them lead wholesome and dignified lives. Tabitha Alms
              has mitigated human suffering and impacted lives of its
              beneficiaries through the following ongoing activities: Providing
              feeding program of needy children and families, economic
              empowerment and psychosocial support of widows, single mothers,
              and teenage mothers; education of identified needy learners pupils
              in primary schools and students in secondary schools through
              paying of school fees and providing necessary support for
              learners; talent development and support of needy youths to
              acquire vocational skills such as driving, welding ,hair dressing,
              cosmetics /beauty therapy etc. The department also carries out
              community outreach program which entails: spiritual nourishment -
              counseling and ministering to people in different communities,
              medical camps, outreach feeding program for street children ,
              street families and other needy people and cloth donation for
              needy people.
            </p>
            <p className="bottomIntro">
              The organization is also focusing on rehabilitating street
              families back into their families and helping them to leave
              streets for an improved and dignified life. It also does mobile
              beauty parlor services during outreach program to inspire and show
              love to the needy who do not have resources to access such
              services. Tabitha Alms as well supports various church
              leaders/laborers across churches in meeting their needs as they do
              the work of ministry and get involved in service to humanity. The
              ministry has done much to ensure an all-round approach of
              nourishment for the body and the soul. This takes after the Lords
              master plan of sharing not only the gospel but also our lives with
              the less privileged in the society.
            </p>
            <Button
              onClick={NavigateToPortfolio}
              style={{
                background: "#00cd95",
                color: "white",
                marginTop: "20px",
              }}
            >
              SEE US IN ACTION
            </Button>
          </AboutIntro>
        </IntroText>
        <IntroImage></IntroImage>
      </AboutIntroContainer>
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
      <LeaderShipContainer>
        <LeaderShipTitle>
          <h2>
            OUR<br></br> <span>LEADERSHIP</span>
          </h2>
        </LeaderShipTitle>
        <LeaderShipCardContainer>
          {TeamData.map((item, idx) => (
            <LeaderShipCard>
              <ImgCard src={item.image} />
              <LeaderShipText>
                <h3>{item.name}</h3>
                <h4>{item.title}</h4>
              </LeaderShipText>
            </LeaderShipCard>
          ))}
        </LeaderShipCardContainer>
      </LeaderShipContainer>
    </>
  );
};

export default About;
