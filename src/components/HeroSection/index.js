import React from "react";
import {
  HeroBg,
  HeroContainer,
  ImageBg,
  HeroContent,
  HeroHeading,
  Form,
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
      <HeroContainer>
        <HeroBg>
          <ImageBg src={bg2} alt="bgImage2" />
        </HeroBg>

        <HeroContent>
          <Form></Form>
          <HeroHeading>
            Our core values: <br />
            Creativity, efficiency and quality.
          </HeroHeading>
        </HeroContent>
      </HeroContainer>
      {/* </Slider> */}
    </>
  );
};

export default HeroSection;
