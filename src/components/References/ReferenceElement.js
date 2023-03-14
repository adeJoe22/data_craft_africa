import styled from "styled-components";

export const ReferenceContainer = styled.div``;
export const ReferenceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 1;
  width: 100%;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
`;
export const ReferenceCaption = styled.div`
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
export const ReferenceRow = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 30px 0;
  flex-wrap: wrap;
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

export const ReferenceCol = styled.div`
  width: 470px;
  display: flex;
  margin: 10px 15px;
  @media screen and (max-width: 425px) {
    width: 370px;
  }
`;
export const RefCompany = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  font-size: 13px;
  @media screen and (max-width: 425px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  @media screen and (max-width: 320px) {
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    justify-content: space-between;
    width: 280px;
  }
`;
export const Company = styled.div`
  div {
    font-size: 18px;
    font-weight: 500;
  }
  p {
    font-size: 13px;
    line-height: 1.4;
    margin: 15px 0;
    width: 350px;
    @media screen and (max-width: 425px) {
      width: 260px;
      font-size: 13px;
    }
    @media screen and (max-width: 320px) {
      width: 250px;
      font-size: 12px;
      margin: 10px 5px;
    }
  }
  span {
    font-size: 13px;
    @media screen and (max-width: 320px) {
      width: 240px;
      font-size: 12px;
    }
  }
`;
export const Logo = styled.div`
  img {
    height: 120px;
    width: 100px;
    @media screen and (max-width: 320px) {
      height: 100px;
      width: 80px;
    }
  }
`;
