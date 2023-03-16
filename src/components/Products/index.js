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
import { prodData } from "./productData";
const Products = () => {
  const [open, setOpen] = useState(false);
  const [details, setDetails] = useState(null);

  return (
    <>
      <ProductContainer id="product">
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
            {prodData.map(({ id, title, desc, link }) => (
              <ProductCard key={id}>
                <CardTitle>{title}</CardTitle>
                <Description>{desc}</Description>
                {link.map(({ id, name, desc }) => (
                  <LinkWrap
                    key={id}
                    onClick={() => {
                      setDetails({ name, desc, id });
                      setOpen(true);
                    }}
                  >
                    <Links>{name}</Links>
                  </LinkWrap>
                ))}
              </ProductCard>
            ))}
          </ProductRow>
          {open ? <Modal data={details} setOpen={setOpen} open={open} /> : null}
        </ProductWrapper>
      </ProductContainer>
    </>
  );
};

export default Products;

const Modal = ({ data: { id, desc, name }, setOpen, open }) => {
  return (
    <ProductsModal open={open && "open"}>
      <ModalWrap>
        <ModalCard key={id}>
          <ModalTitle>{name}</ModalTitle>
          <ModalDescription>{desc}</ModalDescription>
          <Close>
            <button onClick={() => setOpen(false)}>Close</button>
          </Close>
        </ModalCard>
      </ModalWrap>
    </ProductsModal>
  );
};

const ProductsModal = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 200;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #00000070;

  transition: 1.3s ease-in;
  transform: translateY(${(props) => (props.open ? "0" : "-100vh")});
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
  @media screen and (max-width: 320px) {
    width: 300px;
    padding: 0px;
  }
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
  @media screen and (max-width: 320px) {
    font-size: 11px;
    width: 280px;
  }
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
    background-color: #c52d2f;
    color: #fff;
  }
`;
