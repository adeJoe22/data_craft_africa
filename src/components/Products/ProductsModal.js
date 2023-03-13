import React from "react";
import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";

const ProductsModal = () => {
  return (
    <>
      {" "}
      <Container open={open}>
        <Wrapper>
          <Form onSubmit={addDeptHandler}>
            <div>
              <Left>
                <Wrap>
                  <Input type="text" required placeholder="Departments Name" />
                </Wrap>
                <Wrap>
                  <Input type="text" required placeholder="Departments Head" />
                </Wrap>
                <Wrap>
                  <Input type="number" required min={0} />
                </Wrap>
              </Left>
            </div>
            <Submit type="submit">Add</Submit>
          </Form>
          <Close onClick={() => setOpen(false)}>
            <AiOutlineClose />
          </Close>
        </Wrapper>
      </Container>
    </>
  );
};

export default ProductsModal;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 200;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #00000060;
  transition: 1.3s ease-in;
  transform: translateY(${(props) => (props.open ? "0" : "-100vh")});
`;
const Wrapper = styled.div`
  position: relative;
`;
