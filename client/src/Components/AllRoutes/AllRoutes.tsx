import React from "react";
import { useRoutes } from "react-router-dom";
import AdminSignUp from "../Auth/AdminSignUp";
import AgentSignUp from "../Auth/AgentSignUp";
import UserSignUp from "../Auth/UserSignUp";

const AllRoutes = () => {
  const element = useRoutes([
    {
      path: "/admin",
      element: <AdminSignUp />,
    },
    {
      path: "/agent",
      element: <AgentSignUp />,
    },
    {
      path: "/user",
      element: <UserSignUp />,
    },
  ]);
  return element;
};

export default AllRoutes;
