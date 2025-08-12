import React from "react";
import { CiMenuFries } from "react-icons/ci";

const Navbar = () => {

    const navanks = <>
        <a>Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#education">Education</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
    </>

  return (
    <div className="navbar shadow-sm px-3 md:px-16 fixed top-0 z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} className="btn btn-ghost lg:hidden">
            <CiMenuFries size={25}></CiMenuFries>
          </div>
          <ul
            tabIndex={0}
            className="menu text-green-500 menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {navanks}
          </ul>
        </div>
        <a className="text-2xl text-green-500 font-bold">Atikur</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu text-green-500 space-x-4 cursor-pointer menu-horizontal px-1">
          {navanks}
        </ul>
      </div>
      <div className="navbar-end">
        <a className="px-4 py-2 border border-green-500 text-green-500 hover:bg-green-500 hover:text-white rounded-lg cursor-pointer">Resume</a>
      </div>
    </div>
  );
};

export default Navbar;
