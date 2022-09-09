import React from "react";
import { Link } from "react-router-dom";
// tailwind center header and nav link
const Header = () => {
  return (
    <>
      <header className="bg-slate-800 p-5">
        <div className="flex flex-row justify-between items-center">
          <h1 className="text-2xl md:text-4xl text-white">Header</h1>
          <nav className="flex flex-row space-x-5">
            <Link to={"/"} className="text-white">
              Home
            </Link>
            <Link to={"/about"} className="text-white">
              About
            </Link>
            <Link to={"/contact"} className="text-white">
              Contact
            </Link>
            <Link to={"/schedule"} className="text-white">
              Schedule
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
