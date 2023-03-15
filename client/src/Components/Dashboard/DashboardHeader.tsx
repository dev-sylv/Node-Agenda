import React from "react";
import styled from "styled-components";
import DashboardSidebar from "./DashboardSidebar";
import { GiHamburgerMenu } from "react-icons/gi";

const DashboardHeader = () => {
  return (
    <div>
      <Header>
        <Wrapper>
          <Logo>JES ESTATE</Logo>

          <SearchPart>
            <Toggle>
              <GiHamburgerMenu />
            </Toggle>
            <Search>
              <Input placeholder="Search Agents..." />
            </Search>
          </SearchPart>

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
  /* background-color: red; */
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Logo = styled.div`
  width: 12%;
  height: 100%;
  /* background-color: blue; */
  font-size: 25px;
  font-weight: bold;
  display: flex;
  align-items: center;
  letter-spacing: 2px;
  cursor: pointer;
  /* justify-content: center; */
`;
const SearchPart = styled.div`
  width: 30%;
  height: 100%;
  /* background-color: blue; */
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Toggle = styled.div`
  width: 5%;
  height: 100%;
  /* background-color: pink; */
  display: flex;
  align-items: center;
  cursor: pointer;
  justify-content: center;
  color: #4f5373;
`;
const Search = styled.div`
  width: 90%;
  height: 100%;
  /* background-color: orange; */
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Input = styled.input`
  width: 100%;
  height: 80%;
  outline: none;
  border: none;
  border: 1px solid #4f537388;
  border-radius: 5px;
  background-color: transparent;
  padding-left: 20px;
  font-size: 15px;
  font-weight: 500;
  color: #4f5373;
  ::placeholder {
    color: #4f5373;
  }
`;
const ProfilePart = styled.div`
  width: 40%;
  height: 100%;
  background-color: blue;
`;
const SideBar = styled.div``;
