import React from "react";
import styled from "styled-components";

const DashboardSidebar = () => {
  return (
    <div>
      {/* <Container>DashboardSidebar</Container> */}
      <Container2>Small Side</Container2>
    </div>
  );
};

export default DashboardSidebar;

const Container = styled.div`
  width: 250px;
  height: 100vh;
  background-color: #191c24;
  position: fixed;
  color: white;
`;
const Container2 = styled.div`
  width: 80px;
  height: 100vh;
  background-color: yellow;
  position: fixed;
  color: white;
`;
