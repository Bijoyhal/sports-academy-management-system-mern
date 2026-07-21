import React from "react";
import { useState } from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navClass = ({ isActive }) =>
    `text-[14px] pb-1 hover:text-white ${isActive ? "border-b-2 border-[#FFFFFF] text-white" : ""
    }`;

  return (
    <nav className=" text-white/50 px-[0] relative z-10">
      <div className=" mx-auto px-[30px] lg:px-[100px] py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="/" >
          <h1 className="text-[20px] cursor-pointer pl-[50px]  lg:pl-0" >CHAMPACAD</h1>
        </a>
        {/* Desktop Menu */}

        <ul className="hidden md:flex gap-5">
          <li className="text-[14px]  hover:text-white" >
            <NavLink to="/" className={navClass}>
              HOME
            </NavLink>
          </li>

          <li className="text-[14px]  hover:text-white">
            <NavLink to="/About" className={navClass}>

              ABOUT

            </NavLink>
          </li>

          <li className="text-[14px]  hover:text-white">
            <NavLink to="/Register" className={navClass}>
              REGISTER
            </NavLink>
          </li>

          <li className="text-[14px]  hover:text-white">
            <NavLink to="/Contact" className={navClass}>
              CONTACT
            </NavLink>
          </li>
        </ul>

        {/* Mobile Button */}

        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <span className="text-2xl">✕</span>
          ) : (
            <span className="text-2xl">☰</span>
          )}
        </button>
      </div>

      {/* Mobile Menu */}

      {isOpen && (
        <ul className="md:hidden flex flex-col items-center gap-4 pb-4 absolute top-full left-0 bg-black/80 w-full z-40 ">
          <li>
            <a href="/" className="text-[14px] hover:text-blue-400 ">
              HOME
            </a>
          </li>

          <li>
            <a href="/About" className="text-[14px] hover:text-blue-400">
              ABOUT
            </a>
          </li>

          <li>
            <a href="/Register" className="text-[14px] hover:text-blue-400">
              REGISTER
            </a>
          </li>

          <li>
            <a href="/Contact" className="text-[14px] hover:text-blue-400">
              CONTACT
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
