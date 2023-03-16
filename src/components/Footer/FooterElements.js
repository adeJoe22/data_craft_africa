import styled from "styled-components";
import footerBg from "../../images/asset10.png";
export const FooterContainer = styled.div`
  height: 520px;
  width: 100%;
  background: url(${footerBg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;

  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
  @media screen and (max-width: 425px) {
    padding: 50px 0;
    height: 655px;
  }
  @media screen and (max-width: 320px) {
  }
`;

export const FooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 1;
  width: 100%;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
  height: 100%;
  @media screen and (max-width: 768px) {
  }
  @media screen and (max-width: 425px) {
    height: 100%;
  }
  @media screen and (max-width: 320px) {
    height: 100%;
    width: 310px;
  }
`;

export const FooterCaption = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
`;

export const FooterCaptionContent = styled.div`
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
`;
export const FooterRow = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 50px 0;
  flex-wrap: wrap;

  @media screen and (max-width: 320px) {
    margin: 10px 0;
  }
`;

export const ContactSection = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
`;
export const Address = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
  padding: 0px 25px;

  div {
    font-weight: 700;
    font-size: 13px;
    color: #c52d2f;
  }
  p {
    font-size: 13px;
    width: 120px;
    color: #676a6c;
    letter-spacing: 0.7px;
  }
`;
export const ContactForm = styled.form`
  width: 320px;
  height: 200px;
  padding: 0px 25px;
  div {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  input {
    width: 100%;
    height: 40px;
    padding: 12px;
    border-radius: 4px;
    border: 1px solid #cccccc;
    :focus {
      border: none;
      outline: 1px solid cyan;
    }
  }

  textarea {
    width: 100%;
    padding: 12px;
    resize: none;
    height: 100px;
    margin: 7px 0;
    border-radius: 4px;
    border: 1px solid #cccccc;
    :focus {
      border: none;
      outline: 1px solid cyan;
    }
  }

  button {
    width: 100%;
    padding: 10px 0;
    background-color: #c52d2f;
    border-radius: 4px;
    border: none;
    font-weight: 600;
    font-size: 14px;
    color: #fff;
    transition: all 350ms;
    :hover {
      background-color: #000;
      color: #fff;
    }
  }
`;
export const SocialSection = styled.div`
  margin-top: 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    font-size: 13px;
    color: #676a6c;
    letter-spacing: 0.7px;
    padding: 10px;
  }
  span {
    width: 27px;
    height: 27px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #00acee;
    transition: all 350ms;
    :hover {
      background-color: #c52d2f;
    }
    svg {
      font-size: 14px;
      color: #fff;
    }
  }

  div {
    font-size: 13px;
    font-weight: 700;
    margin-top: 25px;
  }
`;
