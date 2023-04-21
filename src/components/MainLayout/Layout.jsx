import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header";

const Layout = () => {
  return (
    <div>
      <Header></Header>
      <div className="container mt-5">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Layout;
