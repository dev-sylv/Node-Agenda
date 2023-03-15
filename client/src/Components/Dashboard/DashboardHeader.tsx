import React from "react";
import styled from "styled-components";
import DashboardSidebar from "./DashboardSidebar";
import { GiHamburgerMenu } from "react-icons/gi";
import { HiOutlinePlusSm } from "react-icons/hi";
import { IoNotificationsOutline, IoGridSharp } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";
import { RxEnvelopeClosed } from "react-icons/rx";
import face from "../Assets/face15.jpg";

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

          <ProfilePart>
            <NewProject>
              <Btn>
                <span>
                  <HiOutlinePlusSm />
                </span>{" "}
                Post New House
              </Btn>
            </NewProject>

            <Notification>
              <span>
                <IoGridSharp />
              </span>
              <div>
                <span>
                  <RxEnvelopeClosed />
                </span>
              </div>
              <span>
                <IoNotificationsOutline />
              </span>
            </Notification>

            <Profile>
              <Face>
                <img src={face} alt="" />
              </Face>
              <Name>
                Nic Sylvia{" "}
                <span>
                  <IoMdArrowDropdown />
                </span>
              </Name>
            </Profile>
          </ProfilePart>
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
  /* background-color: blue; */
  display: flex;
  align-items: center;
  justify-content: center;
`;
const NewProject = styled.div`
  width: 35%;
  height: 100%;
  /* background-color: red; */
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Btn = styled.div`
  width: 90%;
  height: 70%;
  background-color: green;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 16px;
  cursor: pointer;
  transition: all 350ms;
  :hover {
    background-color: #00ac4a;
  }
  span {
    font-weight: bolder;
    font-size: 16px;
    margin-right: 5px;
    height: 20px;
    width: 15px;
  }
`;
const Notification = styled.div`
  width: 25%;
  height: 100%;
  /* background-color: green; */
  display: flex;
  align-items: center;
  justify-content: center;
  span {
    margin-right: 12px;
    font-size: 20px;
    /* background-color: red; */
    cursor: pointer;
  }
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-right: 12px;
    font-size: 20px;
    /* background-color: red; */
    height: 40px;
    border-left: 1px solid #4f5373;
    border-right: 1px solid #4f5373;
    span {
      margin-left: 12px;
      margin-right: 12px;
      cursor: pointer;
    }
  }
`;
const Profile = styled.div`
  width: 35%;
  height: 100%;
  /* background-color: aqua; */
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
const Face = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
  /* background-color: orange; */
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
const Name = styled.div`
  width: 55%;
  height: 70%;
  /* background-color: red; */
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
  span {
    color: #4f5373;
    font-size: 25px;
    margin-left: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const SideBar = styled.div``;
