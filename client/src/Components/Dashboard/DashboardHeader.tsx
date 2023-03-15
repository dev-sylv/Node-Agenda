import React from "react";
import styled from "styled-components";
import DashboardSidebar from "./DashboardSidebar";

const DashboardHeader = () => {
  return (
    <div>
      <Header>Dashheader</Header>
      <SideBar>
        <DashboardSidebar />
      </SideBar>
    </div>
  );
};

export default DashboardHeader;

const Header = styled.div`
  width: 100%;
  height: 70px;
  background-color: #191c24;
  color: white;
`;
const SideBar = styled.div``;
