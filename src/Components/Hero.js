import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components/macro";
//import { IoArrowForward, IoArrowBack } from "react-icons/io5";

const Herosection = styled.section`
  height: 100vh;
  max-height: 1100px;
  position: relative;
  overflow: hidden;
`;

const HeroWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
`;

const HeroSlide = styled.div`
  z-index: 1;
  width: 100%;
  height: 100%;
`;
const HeroSlider = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  overflow: hidden;

  transition: 0.3s ease-in-out;

  &::before {
    content: "";
    position: absolute;
    z-index: 2;
    width: 100%;
    height: 100vh;
    bottom: 0vh;
    left: 0;
    overflow: hidden;
    opacity: 0.5;
    background: black;
  }
`;
const HeroImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
`;
const HeroContent = styled.div`
position:relative;
z-index:10;
display;flex;
align-items: flex-start;
color:#fff;
max-width:500px;
padding: 0 2rem 0 1.2rem ; 


h1{

  font-family: 'Poppins', sans-serif;
  font-size: 4rem;
  line-height:60px;
  font-weight:700;
  text-transform:uppercase;
  text-shadow:0px 0px 20px rgba(0,0,0,0.4);

  @media screen and (max-width:768px){
    font-size: 2rem;
    
    line-height:40px;
    width:300px;
  }
 
}`;
// const SliderButtons = styled.div`
//   position: absolute;
//   bottom: 50px;
//   right: 10px;
//   display: flex;
//   z-index: 10;
//   padding-bottom: 10px;
// `;

// const arrowButtons = css`
//   width: 25px;
//   height: 25px;
//   color: #fff;
//   cursor: pointer;
//   background: #000d1a;
//   border-radius: 50px;
//   padding: 10px;
//   margin-right: 1rem;
//   user-select: none;
//   transition: 0.3s;

//   &:hover {
//     background: #cd853f;
//     transform: scale(1.05);
//   }
// `;

// const PrevButton = styled(IoArrowBack)`
//   ${arrowButtons}
// `;
// const NextButton = styled(IoArrowForward)`
//   ${arrowButtons}
// `;

function Hero({ slides }) {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const timeout = useRef(null);

  useEffect(() => {
    const nextSlide = () => {
      setCurrent((current) => (current === length - 1 ? 0 : current + 1));
    };

    timeout.current = setTimeout(nextSlide, 10000);

    return function () {
      if (timeout.current) {
        clearTimeout(timeout.current);
      }
    };
  }, [current, length]);

  // const nextSlide = () => {
  //   setCurrent(current === length - 1 ? 0 : current + 1);

  //   console.log(current);
  // };

  // const prevSlide = () => {
  //   setCurrent(current === 0 ? length - 1 : current - 1);

  //   console.log(current);
  // };

  return (
    <Herosection>
      <HeroWrapper>
        {slides.map((slide, index) => {
          return (
            <HeroSlide key={index}>
              {index === current && (
                <HeroSlider>
                  <HeroImage src={slide.image} alt={slide.alt} />

                  <HeroContent>
                    <h1>{slide.title}</h1>
                  </HeroContent>
                </HeroSlider>
              )}
            </HeroSlide>
          );
        })}
        {/* <SliderButtons>
          <PrevButton onClick={prevSlide}></PrevButton>
          <NextButton onClick={nextSlide}></NextButton>
        </SliderButtons> */}
      </HeroWrapper>
    </Herosection>
  );
}

export default Hero;
