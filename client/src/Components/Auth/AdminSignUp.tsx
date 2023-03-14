import React from "react";
import styled from "styled-components";
import admin from "../Assets/pexels-rodnae-productions-8293740.jpg";

const AdminSignUp = () => {
  return (
    <div>
      <Container>
        <Logo></Logo>
        <MainSign>
          <Form></Form>
          <Image>{/* <img src={admin} alt="" /> */}</Image>
        </MainSign>
        <Empty></Empty>
      </Container>
    </div>
  );
};

export default AdminSignUp;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #00afff;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Logo = styled.div`
  width: 10%;
  height: 100vh;
  background-color: #00afff;
`;
const MainSign = styled.div`
  width: 80%;
  height: 100vh;
  background-color: red;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Empty = styled.div`
  width: 10%;
  height: 100vh;
  background-color: #00afff;
`;
const Form = styled.div`
  width: 45%;
  height: 100%;
  background-color: pink;
`;
const Image = styled.div`
  width: 40%;
  height: 100%;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
