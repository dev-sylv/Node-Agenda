import React from "react";
import styled from "styled-components";
import logo from "../Assets/house-removebg-preview.png";
import bgauth from "../Assets/housebg-removebg-preview.png";
import { BsArrowRightShort } from "react-icons/bs";

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
            <AuthBox>
              <BoxWrap>
                <h3>Admin</h3>
                <span>
                  <BsArrowRightShort />
                </span>
              </BoxWrap>
            </AuthBox>

            <AuthBox>
              <BoxWrap>
                <h3>Agent</h3>
                <span>
                  <BsArrowRightShort />
                </span>
              </BoxWrap>
            </AuthBox>

            <AuthBox>
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
`;
const Logo = styled.div`
  width: 100%;
  height: 15vh;
  /* background-color: red; */
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
`;
const AuthBox = styled.div`
  width: 500px;
  height: 130px;
  background-color: white;
  border-radius: 10px;
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
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
`;
const BoxWrap = styled.div`
  width: 400px;
  height: 50px;
  /* background-color: yellow; */
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
