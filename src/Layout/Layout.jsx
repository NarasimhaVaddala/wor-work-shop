import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="w-full h-full flex flex-col">
      <Header />
      <main className="w-full relative top-[80px] z-10 min-h-[calc(100vh-90px)] ">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
