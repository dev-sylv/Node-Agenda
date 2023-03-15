import React from "react";
import styled from "styled-components";

const MinimizedDashboard = () => {
  return (
    <div>
      <Container>Small Side</Container>
    </div>
  );
};

export default MinimizedDashboard;

const Container = styled.div`
  width: 80px;
  height: 100vh;
  background-color: #191c24;
  position: fixed;
  color: white;
`;
