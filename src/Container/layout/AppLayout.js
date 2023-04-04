import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../navbar/NavBar";

const AppLayout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};

export default AppLayout;
