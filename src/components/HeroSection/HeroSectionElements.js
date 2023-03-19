import styled from "styled-components";
import bg2 from "../../images/bg2.jpeg";

export const HeroContainer = styled.div`
  background: url(${bg2});
  background-repeat: no-repeat;
  background-position: center;
  object-fit: contain;
  display: flex;
  justify-content: center;
  align-items: center;
  top: -70px;
  height: 490px;
  width: 100%;
  z-index: 1;
`;

export const HeroContent = styled.div`
  z-index: 3;
  color: #fff;
  display: flex;

  align-items: center;
  height: 100%;
  width: 100%;
  @media screen and (max-width: 320px) {
    top: 80px;
  }
`;
export const HeroHeading = styled.div`
  color: #fff;
  font-size: 30px;
  width: 800px;

  margin-left: 50px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  div {
    font-size: 50px;
  }
  @media screen and (max-width: 768px) {
  }
  @media screen and (max-width: 425px) {
    width: 350px;
    h3 {
      text-align: center;
    }
    div {
      font-size: 40px;
      text-align: center;
    }
  }
  @media screen and (max-width: 320px) {
    width: 250px;
    h3 {
      text-align: center;
    }
    div {
      font-size: 40px;
      text-align: center;
    }
  }
`;
