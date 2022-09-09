import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import LeftSideBar from "./LeftSideBar";
import Main from "./Main";

const Layout = () => {
  return (
    <>
      <Header />
      <LeftSideBar />
      <Main />
      <Footer />
    </>
  );
};

export default Layout;
