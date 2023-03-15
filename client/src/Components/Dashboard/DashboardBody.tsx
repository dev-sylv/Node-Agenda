import React from "react";
import styled from "styled-components";

const DashboardBody = () => {
  return (
    <div>
      <Container>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure explicabo
        dicta soluta. Provident maxime iure, amet corporis natus repudiandae
        esse dolorum animi reiciendis molestiae! Optio debitis quasi earum
        reprehenderit nisi?
      </Container>
    </div>
  );
};

export default DashboardBody;

const Container = styled.div`
  background-color: #000000;
  color: white;
  width: calc(100% - 250px);
  height: calc(100vh - 70px);
`;
