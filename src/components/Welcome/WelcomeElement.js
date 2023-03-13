import styled from "styled-components";

export const WelcomeContainer = styled.div`
  @media screen and (max-width: 768px) {
    padding: 20px 0;
  }
  @media screen and (max-width: 425px) {
    padding: 30px 10px;
    height: 900px;
  }
`;

export const WelcomeWrapper = styled.div`
  display: grid;
  z-index: 1;
  width: 100%;
  height: 650px;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
  @media screen and (max-width: 768px) {
    height: 880px;
  }
`;

export const WelcomeCaption = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CaptionContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  ::before {
    position: absolute;
    content: "";
    height: 2px;
    width: 60px;
    background-color: red;
    top: -10px;
    text-align: center;
  }
  div {
    color: #676a6c;
    font-size: 30px;
    margin-bottom: 15px;
  }
  p {
    color: #676a6c;
    font-size: 13px;
    text-align: center;
    @media screen and (max-width: 768px) {
      padding: 0 15px 25px 15px;
      width: 590px;
    }
    @media screen and (max-width: 425px) {
      padding: 0 15px 25px 15px;
      width: 390px;
    }
  }
`;
export const WelcomeRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'col2 col1'` : `'col1 col2'`};

  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: center;
    flex-direction: column;
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col2 col1'` : `'col1 col1' 'col2 col2'`};
  }
  @media screen and (max-width: 425px) {
    display: flex;
    justify-content: center;
    flex-direction: column;
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col2 col1'` : `'col1 col1' 'col2 col2'`};
  }
`;

export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`;
export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`;

export const TextWrapper = styled.div`
  max-width: 580px;
  padding-top: 0;
  padding-bottom: 60px;
`;

export const Heading = styled.div`
  margin-bottom: 24px;
  font-size: 24px;
  line-height: 1.1;
  font-weight: 500;
  color: #676a6c;
  @media screen and (max-width: 425px) {
    font-size: 20px;
    text-align: center;
  }
`;

export const Subtitle = styled.p`
  max-width: 560px;
  margin-bottom: 35px;
  font-size: 13px;
  line-height: 24px;
  color: #676a6c;
  line-height: 20px;
  @media screen and (max-width: 425px) {
    text-align: center;
    width: 380px;
  }
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const Button = styled.button`
  color: #fff;
  border-radius: 4px;
  padding: 10px 20px;
  border: none;
  font-weight: 500;
  font-size: 18px;
  background-color: red;
`;
export const ImgWrap = styled.div`
  max-width: 600px;
  height: 100%;
  @media screen and (max-width: 768px) {
    width: 570px;
  }
  @media screen and (max-width: 425px) {
    width: 370px;
  }
`;

export const Img = styled.img`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
`;
