import React from "react";
import styled from "styled-components";

const AdminSignUp = () => {
  return (
    <div>
      <Container>
        <Logo></Logo>
        <MainSign></MainSign>
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
`;
const Logo = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #00afff;
`;
const MainSign = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #00afff;
`;
const Empty = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #00afff;
`;
