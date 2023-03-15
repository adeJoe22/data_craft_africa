import styled from "styled-components";

export const MemberComponent = styled.div`
  @media screen and (max-width: 425px) {
    padding: 40px 15px;
  }
  @media screen and (max-width: 320px) {
    padding: 20px 10px;
  }
`;
export const MemberWrapper = styled.div`
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
    width: 300px;
  }
`;

export const MemberCaption = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  margin: 30px;
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

export const MemberRow = styled.div`
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
    width: 300px;
  }
`;

export const MemberCard = styled.div`
  width: 350px;
  margin: 15px;

  display: flex;

  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 425px) {
  }
  @media screen and (max-width: 320px) {
    width: 290px;
    margin: 2px;
  }
`;
export const ImageWrap = styled.div`
  border-radius: 50%;
  width: 120px;
  height: 120px;
  /* border: 1px solid; */
  margin: 10px;
  img {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    object-fit: cover;
  }
`;
export const Title = styled.div`
  span {
    color: #c52d2f;
  }
`;
export const Desc = styled.p`
  font-size: 13px;
  text-align: center;
  margin-bottom: 10px;
`;
export const SocialIcons = styled.div`
  display: flex;
  span {
    width: 27px;
    height: 27px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #00acee;
    transition: all 350ms;
    margin: 7px;
    :hover {
      background-color: #c52d2f;
    }
  }
`;
