import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
// import SideBar from "./SideBar";
import SideNavbar from "./SideNavbar";

// tailwind layout container with header, footer, sidebar, and main content full height and width

const Layout = () => {
  return (
    <>
      <div className="flex flex-col h-screen">
        <Header />
        <div className="flex flex-row flex-grow">
          {/* <SideBar /> */}
          <SideNavbar />
          <Main />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
