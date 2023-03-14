import styled from "styled-components";

export const ServiceComponent = styled.div`
  @media screen and (max-width: 425px) {
    padding: 40px 15px;
  }
  @media screen and (max-width: 320px) {
    padding: 20px 10px;
  }
`;
export const ServiceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 1;
  width: 100%;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
  @media screen and (max-width: 425px) {
    width: 400px;
  }
  @media screen and (max-width: 320px) {
    width: 320px;
  }
`;

export const ServiceCaption = styled.div`
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
    @media screen and (max-width: 320px) {
      font-size: 24px;
    }
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
    @media screen and (max-width: 320px) {
      padding: 0 15px 25px 15px;
      width: 270px;
    }
  }
`;

export const ServiceRow = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 30px 0;
  @media screen and (max-width: 768px) {
    flex-wrap: wrap;
  }
  @media screen and (max-width: 425px) {
    flex-wrap: wrap;
  }
  @media screen and (max-width: 320px) {
    flex-wrap: wrap;
  }
`;

export const ServiceColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 640px;
  @media screen and (max-width: 425px) {
    width: 380px;
  }
`;
export const ServiceColumn2 = styled.div`
  img {
    width: 100%;
    @media screen and (max-width: 425px) {
      width: 390px;
    }
  }
`;
export const Items = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 15px 10px;
  span {
  }
  div {
    font-weight: 500;
    font-size: 18px;
    text-align: center;
    color: #676a6c;
    @media screen and (max-width: 320px) {
      font-size: 15px;
    }
  }
  p {
    font-weight: 400;
    font-size: 13px;
    text-align: center;
    color: #676a6c;
    line-height: 1.4;
    margin-top: 10px;
    @media screen and (max-width: 320px) {
      font-size: 12px;
    }
    @media screen and (max-width: 425px) {
      font-size: 12px;

      width: 370px;
      margin: 15px 0px;
    }
  }
`;
