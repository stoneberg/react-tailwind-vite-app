import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="container p-2 mx-auto">
      <Header />
      <div className="bg-white my-5 w-full flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0">
        <SideBar />
        <main className="bg-sky-300 md:w-2/3 lg:w-3/4 px-5 py-40">
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
