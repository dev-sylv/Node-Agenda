import React from "react";
import styled from "styled-components";

const DashboardSidebar = () => {
  return (
    <div>
      <Container>DashboardSidebar</Container>
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
