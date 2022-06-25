import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const toggleNav = () => setNav(!nav);
  return (
    <nav className="bg-purple-900 text-white py-2">
      <div className="container mx-auto px-2 flex flex-col md:flex-row md:justify-between md:items-center">
        <h1 className="text-3xl">الفرقة الأولى</h1>
        <ul
          className={`flex flex-col overflow-hidden items-center  ease-in-out duration-300  ${
            nav ? "h-screen" : "h-0"
          } md:flex-row md:h-auto font-bold`}
        >
          <NavLink to="/" className="p-4 md:p-2 cursor-pointer">
            الرئيسية
          </NavLink>
          <NavLink to="/about" className="p-4 md:p-2 cursor-pointer ">
            تعرف علينا
          </NavLink>
          <NavLink to="/subjects" className="p-4 md:p-2 cursor-pointer">
            المواد الدراسية
          </NavLink>
          <NavLink
            to="/contact"
            className="py-2 px-4 cursor-pointer bg-white text-purple-900  md:p-2 rounded-md shadow"
          >
            تواصل معنا
          </NavLink>
        </ul>
        <div className="fixed top-2 left-2 md:hidden" onClick={toggleNav}>
          <AiOutlineMenu
            size={20}
            className={` ${!nav ? "block" : "hidden"}`}
          />
          <AiOutlineClose
            size={20}
            className={` ${nav ? "block" : "hidden"}`}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
