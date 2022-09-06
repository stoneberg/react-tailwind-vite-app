import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="bg-amber-400 p-5">
        <h1 className="text-2xl md:text-4xl mb-2">Header</h1>
        <nav>
          <ul className="flex md:flex-row justify-evenly">
            <li>
              <Link className="text-2xl" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="text-2xl" to="about">
                About
              </Link>
            </li>
            <li>
              <Link className="text-2xl" to="contact">
                Contact
              </Link>
            </li>
            <li>
              <Link className="text-2xl" to="schedule">
                Schedule
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
