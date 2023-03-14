import React from "react";
import styled from "styled-components";
import logo from "../Assets/house-removebg-preview.png";
import bgauth from "../Assets/housebg-removebg-preview.png";
import { BsArrowRightShort } from "react-icons/bs";
import { Link } from "react-router-dom";

const MainRegister = () => {
  return (
    <div>
      <Container>
        <Logo>
          <MyLogo src={logo} />
        </Logo>
        <MainAuth>
          <Wrap>
            <h2>Sign Up</h2>
            <AuthBox to="/admin">
              <BoxWrap>
                <h3>Admin</h3>
                <span>
                  <BsArrowRightShort />
                </span>
              </BoxWrap>
            </AuthBox>

            <AuthBox to="/agent">
              <BoxWrap>
                <h3>Agent</h3>
                <span>
                  <BsArrowRightShort />
                </span>
              </BoxWrap>
            </AuthBox>

            <AuthBox to="/user">
              <BoxWrap>
                <h3>User</h3>
                <span>
                  <BsArrowRightShort />
                </span>
              </BoxWrap>
            </AuthBox>
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
  background-color: #00afff;
  display: flex;
  flex-direction: column;
  position: relative;
  @media screen and (max-width: 768px) {
    ::before {
      content: "";
      width: 100%;
      height: 100%;
      background-color: #171818da;
      position: absolute;
    }
  }
`;
const Logo = styled.div`
  width: 100%;
  height: 15vh;
  /* background-color: red; */
  z-index: 2;
`;
const MyLogo = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  margin: 20px;
  z-index: 2;
  @media screen and (max-width: 500px) {
    width: 50px;
    height: 50px;
  }
`;
const MainAuth = styled.div`
  width: 100%;
  height: 85vh;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
`;
const Wrap = styled.div`
  /* background-color: green; */
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-image: url(${bgauth});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: left 100% top -55%;
  h2 {
    font-size: 40px;
    margin-top: 0;
    font-weight: 600;
    color: white;
    @media screen and (max-width: 768px) {
      margin-top: -50px;
    }
    @media screen and (max-width: 500px) {
      margin-top: -100px;
    }
    @media screen and (max-width: 500px) {
      margin-top: -140px;
    }
    @media screen and (max-width: 320px) {
      margin-top: -150px;
    }
  }
`;
const AuthBox = styled(Link)`
  width: 500px;
  height: 130px;
  background-color: white;
  border-radius: 10px;
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 25px;
  cursor: pointer;
  span {
    font-size: 30px;
  }
  :hover {
    border: 1px solid red;
    span {
      color: red;
    }
  }
  @media screen and (max-width: 768px) {
    width: 700px;
  }
  @media screen and (max-width: 500px) {
    width: 400px;
    height: 110px;
  }
  @media screen and (max-width: 400px) {
    width: 350px;
    height: 100px;
  }
  @media screen and (max-width: 320px) {
    width: 300px;
    height: 100px;
  }
`;
const BoxWrap = styled.div`
  width: 400px;
  height: 50px;
  /* background-color: yellow; */
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 768px) {
    width: 600px;
  }
  @media screen and (max-width: 500px) {
    width: 300px;
    height: 40px;
  }
  @media screen and (max-width: 400px) {
    width: 250px;
    height: 30px;
  }
  @media screen and (max-width: 320px) {
    width: 200px;
    height: 30px;
  }
`;
