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

  @media screen and (max-width: 425px) {
    top: -70px;
  }
`;

export const HeroBg = styled.div`
  width: 100%;
  /* height: 100%; */
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
    font-size: 20px;
    width: 350px;
  }
`;

export const Form = styled.form`
  width: 400px;
  height: 220px;
  background-color: #fff;
  border-right: 2px solid red;
  border-left: 2px solid red;
  border-bottom: 2px solid red;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  @media screen and (max-width: 768px) {
  }
  @media screen and (max-width: 425px) {
    width: 300px;
    height: 280px;
  }
`;
export const Left = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 425px) {
    flex-wrap: wrap;
    width: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  div {
    margin: 7px;
    @media screen and (max-width: 425px) {
      display: flex;
      flex-direction: column;
      margin: 2px;
    }
  }

  label {
    font-size: 14px;
    color: #000;
  }
  input {
    border-radius: 4px;
    padding: 8px;
    border: 1px solid lightgrey;
    margin: 5px 0;
    :focus {
      outline: 1px solid cyan;
      border: none;
    }
  }
`;
export const Right = styled.div`
  color: #000;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
  @media screen and (max-width: 425px) {
    flex-wrap: wrap;
    display: flex;
    width: 300px;
    justify-content: center;
  }
  button {
    width: 182px;
    padding: 9px;
    margin: 5px;
    border-radius: 4px;
    border: none;
    font-size: 14px;
    font-weight: 700;
    color: #fff;
    background-color: #c52d2f;
  }

  div {
    margin: 5px;
    font-size: 14px;
  }
`;
