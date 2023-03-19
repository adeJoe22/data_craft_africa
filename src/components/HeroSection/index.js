import React from "react";
import {
  HeroContainer,
  HeroContent,
  HeroHeading,
  Form,
  Left,
  Right,
} from "./HeroSectionElements";
import bg1 from "../../images/bg1.jpeg";
import bg2 from "../../images/bg2.jpeg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroSection = () => {
  return (
    <>
      {/* <Slider> */}
      <HeroContainer id="home">
        <HeroContent>
          <HeroHeading>
            <h3> Our core values:</h3>

            <div> Creativity, efficiency and quality.</div>
          </HeroHeading>
        </HeroContent>
      </HeroContainer>
      {/* </Slider> */}
    </>
  );
};

export default HeroSection;
