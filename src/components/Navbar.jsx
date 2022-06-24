import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const toggleNav = () => setNav(!nav);
  return (
    <nav className="bg-indigo text-lightGray py-2">
      <div className="container mx-auto px-2 flex flex-col md:flex-row md:justify-between md:items-center">
        <h1 className="text-3xl">Logo</h1>
        <ul
          className={`flex flex-col overflow-hidden items-center  ease-in-out duration-300  ${
            nav ? "h-screen" : "h-0"
          } md:flex-row md:h-auto`}
        >
          <li className="p-4 md:p-2">Home</li>
          <li className="p-4 md:p-2">About</li>
          <li className="p-4 md:p-2">Projects</li>
          <li className="py-2 px-4 bg-white text-indigo md:p-2 rounded-md shadow">
            Contact
          </li>
        </ul>
        <div className="md:hidden" onClick={toggleNav}>
          <AiOutlineMenu
            size={20}
            className={`fixed top-2 right-2 ${!nav ? "block" : "hidden"}`}
          />
          <AiOutlineClose
            size={20}
            className={`fixed top-2 right-2 ${nav ? "block" : "hidden"}`}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
