import React from "react";
import { Outlet } from "react-router-dom";
// tailwind main content container
const Main = () => {
  return (
    <>
      <div className="bg-sky-300 md:w-2/3 lg:w-3/4 px-5 py-40">
        <h1 className="text-2xl md:text-4xl text-white">Main</h1>
        <Outlet />
      </div>
    </>
  );
};

export default Main;
