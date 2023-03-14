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
                <Input
                  type="text"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  placeholder="Name"
                />
                <Input
                  type="email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  placeholder="Email"
                />
                <Input
                  type="text"
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
                  placeholder="Subject"
                />
                <Box
                  onChange={(e) => {
                    setSubject(e.target.value);
                  }}
                  placeholder="Message"
                />
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
