import React from "react";
import styled from "styled-components";
import logo from "../Assets/relogo.webp";
import house from "../Assets/sylvia7.jpg";
// import { BsArrowRightShort } from "react-icons/bs";

const MainRegister = () => {
  return (
    <div>
      <Container>
        <Logo>
          <MyLogo src={logo} />
        </Logo>
        <MainAuth>
          <BgImage></BgImage>
          <Wrap>
            <h2>Sign Up</h2>
            <AuthBox></AuthBox>
          </Wrap>
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
  display: flex;
  flex-direction: column;
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
  display: flex;
  align-items: center;
  justify-content: center;
  /* background-image: url(${house});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain; */
`;
const BgImage = styled.div`
  background-color: cyan;
  width: 30%;
  height: 100%;
`;
const Wrap = styled.div`
  background-color: green;
  width: 40%;
  height: 100%;
`;
const AuthBox = styled.div`
  width: 450px;
  height: 140px;
  background-color: white;
  border-radius: 5px;
  border: 1px solid black;
`;
