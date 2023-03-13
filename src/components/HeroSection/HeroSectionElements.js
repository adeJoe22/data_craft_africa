import styled from "styled-components";

export const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  top: -70px;
  height: 490px;
  position: relative;
  z-index: 1;
`;

export const HeroBg = styled.div`
  position: relative;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const ImageBg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const HeroContent = styled.div`
  z-index: 3;
  position: absolute;
  color: #fff;
  top: 0;
  left: 50px;
  bottom: 0;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const HeroHeading = styled.div`
  color: #fff;
  font-size: 30px;
  width: 480px;
  margin-bottom: 100px;
  @media screen and (max-width: 768px) {
    font-size: 26px;
  }
  @media screen and (max-width: 425px) {
    font-size: 22px;
  }
`;

export const Form = styled.form`
  width: 400px;
  height: 220px;
  background-color: #fff;
  border-right: 2px solid red;
  border-left: 2px solid red;
  border-bottom: 2px solid red;
  @media screen and (max-width: 768px) {
  }
  @media screen and (max-width: 425px) {
    width: 300px;
    height: 280px;
  }
`;
