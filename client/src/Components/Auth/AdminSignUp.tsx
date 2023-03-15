import React from "react";
import styled from "styled-components";
import admin from "../Assets/agents.webp";

const AdminSignUp = () => {
  return (
    <div>
      <Container>
        <Logo></Logo>
        <MainSign>
          <Form>
            <Wrap>
              <Right>
                <Input type="text" placeholder="Name" />
                <Input type="email" placeholder="Email" />
                <Input type="text" placeholder="Subject" />
                <Box placeholder="Message" />
                <Button type="submit">Submit</Button>
              </Right>
            </Wrap>
          </Form>
          <Image></Image>
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
  /* background-color: red; */
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Empty = styled.div`
  width: 10%;
  height: 100vh;
`;
const Form = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrap = styled.div`
  width: 75%;
  height: 75vh;
  background-color: pink;
`;
const Image = styled.div`
  width: 40%;
  height: 100%;
  overflow: hidden;
  background-image: url(${admin});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 200%;
`;
const Button = styled.button`
  height: 50px;
  width: 150px;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  cursor: pointer;
  transition: all 350ms;
  font-weight: bold;
  margin-top: 15px;
  color: white;
  :hover {
    transform: scale(0.9);
    background-color: #f5f5f5;
    color: blue;
    border: 1px solid purple;
  }
`;
const Box = styled.textarea`
  /* width: 200px; */
  display: flex;
  padding-left: 15px;
  padding-top: 20px;
  height: 90px;
  border: 1px solid #ced4da;
  outline: none;
  resize: none;
  ::placeholder {
    font-size: 17px;
  }
`;
const Input = styled.input`
  /* width: 100%; */
  height: 45px;
  display: flex;
  align-items: center;
  padding-left: 15px;
  border: 1px solid #ced4da;
  margin-bottom: 10px;
  ::placeholder {
    font-size: 17px;
  }
`;
const Right = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  /* align-items: center;
    justify-content: center; */
  background-color: red;
  @media screen and (max-width: 768px) {
    width: 100%;
    margin-top: 15px;
  }
`;
