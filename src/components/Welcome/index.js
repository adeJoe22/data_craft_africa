import React from "react";
import {
  WelcomeContainer,
  WelcomeRow,
  WelcomeWrapper,
  Heading,
  Column1,
  Column2,
  TextWrapper,
  Subtitle,
  BtnWrap,
  ImgWrap,
  Img,
  Button,
  WelcomeCaption,
  CaptionContent,
} from "./WelcomeElement";
const Welcome = ({ imgStart, img, alt, title, description, description2 }) => {
  return (
    <>
      <WelcomeContainer id="about">
        <WelcomeWrapper>
          <WelcomeCaption>
            <CaptionContent>
              <div>Welcome to Data Craft</div>
              <p>
                Data Craft also known as “Fulcrum” translates into our core
                philosophy that centers on providing relevant, flexible,
                scalable, intelligent, and forward thinking solutions to our
                customers.
              </p>
            </CaptionContent>
          </WelcomeCaption>
          <WelcomeRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <Heading>{title}</Heading>
                <Subtitle>{description}</Subtitle>
                <Subtitle>{description2}</Subtitle>
                <BtnWrap>
                  <Button to="/team">Our Team</Button>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} alt={alt} />
              </ImgWrap>
            </Column2>
          </WelcomeRow>
        </WelcomeWrapper>
      </WelcomeContainer>
    </>
  );
};

export default Welcome;
