import React from "react";
import styled from "styled-components";
import logo from "../Assets/relogo.webp";
import house from "../Assets/sylvia7.jpg";

const MainRegister = () => {
  return (
    <div>
      <Container>
        <Logo>
          <MyLogo src={logo} />
        </Logo>
        <MainAuth>
          <Wrap></Wrap>
        </MainAuth>
      </Container>
    </div>
  );
};

export default MainRegister;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #00000090;
`;
const Logo = styled.div`
  width: 100%;
  height: 15vh;
  background-color: red;
`;
const MyLogo = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  margin-left: 20px;
`;
const MainAuth = styled.div`
  width: 100%;
  height: 85vh;
  background-color: blue;
  /* background-image: url(${house});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain; */
`;
const Wrap = styled.div`
  background-color: green;
`;
