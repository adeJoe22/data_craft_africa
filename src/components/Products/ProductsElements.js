import styled from "styled-components";

export const ProductContainer = styled.div`
  @media screen and (max-width: 425px) {
    padding: 50px 0;
  }
  @media screen and (max-width: 320px) {
    padding: 50px 0;
  }
`;
export const ProductWrapper = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 1;
  width: 100%;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
`;
export const ProductCaption = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  @media screen and (max-width: 425px) {
  }
`;
export const ProductCaptionContent = styled.div`
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
export const ProductRow = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 50px 0;
  flex-wrap: wrap;
`;
export const ProductCard = styled.div`
  width: 350px;
  min-height: 336px;
  margin: 10px 24px;

  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 4px;
  @media screen and (max-width: 320px) {
    padding: 0 15px 25px 15px;
    width: 290px;
    margin: 2px 24px;
  }
`;

export const CardTitle = styled.div`
  width: 100%;
  padding: 10px;
  display: grid;
  place-items: center;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 24px;
  background-color: #c52d2f;
  color: #fff;
  border-radius: 4px 4px 0 0;
  @media screen and (max-width: 320px) {
    font-weight: 600;
    font-size: 17px;
  }
`;
export const Description = styled.div`
  text-align: center;
  padding: 18px;
  font-size: 15px;
  color: #b5c8e8;
  background-color: #f4f4f4;
`;
export const LinkWrap = styled.a`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Links = styled.span`
  padding: 14px;
  border-top: 1px solid #ccc;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  color: #5463b3;
  background-color: #f4f4f4;
  font-weight: 700;
  transition: all 350ms;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
  @media screen and (max-width: 320px) {
    font-weight: 600;
    font-size: 14px;
    text-align: center;
  }
`;
