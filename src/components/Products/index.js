import React, { useState } from "react";
import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";

import {
  ProductCaption,
  ProductContainer,
  ProductWrapper,
  ProductCaptionContent,
  ProductCard,
  ProductCard2,
  ProductCard3,
  ProductRow,
  CardTitle,
  Description,
  LinkWrap,
  Links,
} from "./ProductsElements";
import { cardOne, cardTwo, cardThree } from "./productData";
const Products = () => {
  const [open, setOpen] = useState(false);
  const [details, setDetails] = useState([]);
  const displayDesc = (link) => {
    setDetails([link]);
  };
  return (
    <>
      <ProductContainer>
        <ProductWrapper>
          <ProductCaption>
            <ProductCaptionContent>
              <div>Our Products</div>
              <p>
                We have a wide range of products, classified in 3 different
                sectors we need some intros for
              </p>
            </ProductCaptionContent>
          </ProductCaption>
          <ProductRow>
            {cardOne.map(({ id, title, desc, link }) => (
              <ProductCard key={id}>
                <CardTitle>{title}</CardTitle>
                <Description>{desc}</Description>
                {link.map(({ id, name, desc }) => (
                  <LinkWrap key={id}>
                    <Links onClick={() => displayDesc(link)}>{name}</Links>
                  </LinkWrap>
                ))}
              </ProductCard>
            ))}
            {cardTwo.map(({ id, link, title, desc }) => (
              <ProductCard2 key={id}>
                <CardTitle>{title}</CardTitle>
                <Description>{desc}</Description>
                {link.map(({ id, name, desc }) => (
                  <LinkWrap key={id}>
                    <Links>{name}</Links>
                  </LinkWrap>
                ))}
              </ProductCard2>
            ))}
            {cardThree.map(({ id, title, link, desc }) => (
              <ProductCard3 key={id}>
                <CardTitle>{title}</CardTitle>
                <Description>{desc}</Description>
                {link.map(({ id, desc, name }) => (
                  <LinkWrap key={id}>
                    <Links>{name}</Links>
                  </LinkWrap>
                ))}
              </ProductCard3>
            ))}
          </ProductRow>
          {/* <ProductsModal>
            <ModalWrap>
              {details.map((props) => (
                <ModalCard key={props.id}>
                  <ModalTitle>{props.name}</ModalTitle>
                  <ModalDescription>{props.desc}</ModalDescription>
                  <Close>
                    <button onClick={() => setOpen(false)}>Close</button>
                  </Close>
                </ModalCard>
              ))}
            </ModalWrap>
          </ProductsModal> */}
        </ProductWrapper>
      </ProductContainer>
    </>
  );
};

export default Products;

const ProductsModal = styled.div`
  width: 100%;
  height: 100vh;
  /* position: fixed;
  top: 0;
  left: 0;
  z-index: 200; */
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #00000060;

  transition: 1.3s ease-in;
  /* transform: translateY(${(props) => (props.open ? "0" : "-100vh")}); */
`;

const ModalWrap = styled.div`
  position: relative;
  width: 100%;
  /* height: 100%; */
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 80px;
`;
const ModalCard = styled.div`
  width: 800px;
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ModalTitle = styled.div`
  width: 100%;
  padding: 12px;
`;
const ModalDescription = styled.div`
  width: 100%;
  padding: 12px;
  border-top: 1px solid #d1d1d1;
  border-bottom: 1px solid #d1d1d1;
`;
const Close = styled.div`
  width: 100%;
  padding: 12px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  button {
    padding: 7px 15px;
    border: none;
    border-radius: 4px;
  }
`;
