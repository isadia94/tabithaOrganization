import React from "react";
import styled from "styled-components";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import ContactImage from "../images/img17.jpeg";

const Container = styled.div`
  background: #fff44f;
  height: 100%;
  padding: 4rem 4rem;

  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 1rem 0;
  }
`;

const Card = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media screen and (max-width: 768px) {
    width: 90%;
    height: 100%;
    padding: 1rem 1rem;
    grid-template-columns: 1fr;
  }
`;
const LeftSide = styled.div`
  padding: 2rem 4rem;
  background: white;

  @media screen and (max-width: 768px) {
    padding: 1rem 1rem;
  }
`;
const RightSide = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
const Address = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;

  h4 {
    color: darkgrey;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
const Location = styled.div`
  p {
    margin-top: 5px;
    margin-bottom: 5px;
    font-size: 14px;
  }
`;
const Email = styled.div`
  p {
    margin-top: 5px;
    margin-bottom: 5px;
    font-size: 14px;
  }

  @media screen and (max-width: 768px) {
    margin: 20px 0;
  }
`;
const Phone = styled.div`
  p {
    margin-top: 5px;
    margin-bottom: 5px;
    font-size: 14px;
  }
`;

const Socials = styled.div`
  margin-top: 80px;
  h4 {
    margin-bottom: 10px;
  }
  a {
    color: darkgrey;
    text-decoration: none;
    margin-right: 10px;
    font-size: 10px;
    text-transform: uppercase;
  }
`;
const Contact = () => {
  return (
    <Container>
      <Card>
        <LeftSide>
          <h3>Contact Us</h3>
          <p style={{ marginTop: "10px", marginBottom: "30px" }}>
            We are here for any suggestion or just to have a chat
          </p>
          <Address>
            <Location>
              <h4>Address:</h4>
              <p>Langa Langa</p>
              <p>P.O BOX 16904-100 20100 </p>
              <p>Nakuru,Kenya</p>
            </Location>
            <Email>
              <h4>Email:</h4>
              <p>mail@tabithaalms.org</p>
            </Email>
            <Phone>
              <h4>Phone:</h4>
              <p>(+254)740239992</p>
            </Phone>
          </Address>
          <form action="">
            <input
              required
              style={{
                width: "90%",
                padding: "10px 10px",
                border: "none",
                borderBottom: "1px solid darkgrey",
                outline: "none",
              }}
              type="text"
              placeholder="Name"
            />
            <input
              style={{
                width: "90%",
                padding: "10px 10px",
                border: "none",
                borderBottom: "1px solid darkgrey",
                outline: "none",
              }}
              type="email"
              placeholder="Email"
            />
            <input
              style={{
                width: "90%",
                padding: "10px 10px",
                border: "none",
                borderBottom: "1px solid darkgrey",
                outline: "none",
              }}
              type="text"
              placeholder="Subject"
            />
            <textarea
              required
              placeholder="Create Message here"
              style={{
                width: "90%",
                height: "100px",
                padding: "10px 10px",
                outline: "none",
                border: "none",
                borderBottom: "1px solid darkgrey",
              }}
            ></textarea>
            <Button
              style={{
                marginTop: "20px",

                background: "#00cd95",
              }}
            >
              Send Message
            </Button>
          </form>

          <Socials>
            <h4>Follow Us Here</h4>
            <Link>Facebook</Link>
            <Link>Twitter</Link>
            <Link>Instagram</Link>
            <Link>Youtube</Link>
          </Socials>
        </LeftSide>
        <RightSide src={ContactImage} alt="Contact Image"></RightSide>
      </Card>
    </Container>
  );
};

export default Contact;
