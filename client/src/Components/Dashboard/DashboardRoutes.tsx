import React from "react";
import { useRoutes } from "react-router-dom";
import styled from "styled-components";
import DashboardBody from "./DashboardBody";
import DashboardHeader from "./DashboardHeader";

const DashboardRoutes = () => {
  const element = useRoutes([
    {
      path: "/dashboard",
      element: <DashboardBody />,
    },
  ]);
  return (
    <>
      <DashboardHeader />
      <Wrapper>{element}</Wrapper>
    </>
  );
};

export default DashboardRoutes;

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
