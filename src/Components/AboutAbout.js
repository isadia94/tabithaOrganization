import React from "react";
import styled from "styled-components";
import img5 from "../images/img5.jpeg";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
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
  background-image: url(${img5});
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

const ImageText = styled.div`
  color: white;

  h3 {
    position: absolute;
    top: 60%;
    left: -15%;
    z-index: 10000;
    transform: rotate(-90deg);
    font-size: 4.8rem;
  }

  h4 {
    position: absolute;
    top: 76%;
    font-size: 4.8rem;
    font-weight: 200;
    left: 20%;
  }
`;

function AboutAbout() {
  const history = useHistory();

  const NavigateToPortfolio = () => {
    history.push("/portfolio");
  };
  return (
    <AboutIntroContainer>
      <IntroText>
        <LineEffect></LineEffect>
        <AboutIntro>
          <p className="topIntro">
            Tabitha Alms Ministry Organization is a relief and development arm
            established as a ministry in JCC Nakuru Church with the purpose of
            reaching out to the needy and vulnerable with care and love of God
            to empower them lead wholesome and dignified lives. Tabitha Alms has
            mitigated human suffering and impacted lives of its beneficiaries
            through the following ongoing activities: Providing feeding program
            of needy children and families, economic empowerment and
            psychosocial support of widows, single mothers, and teenage mothers;
            education of identified needy learners pupils in primary schools and
            students in secondary schools through paying of school fees and
            providing necessary support for learners; talent development and
            support of needy youths to acquire vocational skills such as
            driving, welding ,hair dressing, cosmetics /beauty therapy etc. The
            department also carries out community outreach program which
            entails: spiritual nourishment - counseling and ministering to
            people in different communities, medical camps, outreach feeding
            program for street children , street families and other needy people
            and cloth donation for needy people.
          </p>
          <p className="bottomIntro">
            The organization is also focusing on rehabilitating street families
            back into their families and helping them to leave streets for an
            improved and dignified life. It also does mobile beauty parlor
            services during outreach program to inspire and show love to the
            needy who do not have resources to access such services. Tabitha
            Alms as well supports various church leaders/laborers across
            churches in meeting their needs as they do the work of ministry and
            get involved in service to humanity. The ministry has done much to
            ensure an all-round approach of nourishment for the body and the
            soul. This takes after the Lords master plan of sharing not only the
            gospel but also our lives with the less privileged in the society.
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
      <IntroImage>
        <ImageText>
          <h3>ABOUT</h3>
          <h4>US</h4>
        </ImageText>
      </IntroImage>
    </AboutIntroContainer>
  );
}

export default AboutAbout;
