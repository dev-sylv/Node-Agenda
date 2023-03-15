import React from "react";
import styled from "styled-components";
import DashboardSidebar from "./DashboardSidebar";

const DashboardHeader = () => {
  return (
    <div>
      <Header>
        <Wrapper>
          <Logo>JES ESTATE</Logo>
          <SearchPart></SearchPart>
          <ProfilePart></ProfilePart>
        </Wrapper>
      </Header>
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
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 95%;
  height: 50px;
  background-color: red;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Logo = styled.div`
  width: 10%;
  height: 100%;
  background-color: blue;
  font-size: 20px;
  font-weight: bold;
  display: flex;
  align-items: center;
  /* justify-content: center; */
`;
const SearchPart = styled.div`
  width: 30%;
  height: 100%;
  background-color: blue;
`;
const ProfilePart = styled.div`
  width: 40%;
  height: 100%;
  background-color: blue;
`;
const SideBar = styled.div``;
