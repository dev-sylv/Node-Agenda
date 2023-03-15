import React from "react";
import { useRoutes } from "react-router-dom";
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
      {element}
    </>
  );
};

export default DashboardRoutes;
