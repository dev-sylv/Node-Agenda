import React from "react";
import { useRoutes } from "react-router-dom";
import AdminSignUp from "../Auth/AdminSignUp";
import AgentSignUp from "../Auth/AgentSignUp";
import MainRegister from "../Auth/MainRegister";
import UserSignUp from "../Auth/UserSignUp";
import HomeScreen from "../Home/HomeSreen";

const AllRoutes = () => {
  const element = useRoutes([
    // {
    //   path: "/",
    //   element: <MainRegister />,
    // },
    // {
    //   path: "/admin",
    //   element: <AdminSignUp />,
    // },
    // {
    //   path: "/agent",
    //   element: <AgentSignUp />,
    // },
    // {
    //   path: "/user",
    //   element: <UserSignUp />,
    // },
    {
      path: "/",
      element: <HomeScreen />,
    },
  ]);
  return element;
};

export default AllRoutes;
