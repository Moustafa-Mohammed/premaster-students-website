import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const toggleNav = () => setNav(!nav);
  return (
    <nav className=" py-2 sticky top-0 bg-gray-100 w-full z-10">
      <div className="container mx-auto px-2 flex flex-col md:flex-row md:justify-between md:items-center ">
        <h1 className="text-3xl text-purple-900">الفرقة الأولى</h1>
        <ul
          className={`flex flex-col overflow-hidden items-center  ease-in-out duration-300  ${
            nav ? "h-screen" : "h-0"
          } md:flex-row md:h-auto font-bold text-purple-900 md:text-lg`}
        >
          <NavLink
            to="/"
            className="p-4 md:p-2 cursor-pointer focus:text-red-500"
            onClick={() => setNav(!nav)}
          >
            الرئيسية
          </NavLink>
          <NavLink
            to="/about"
            className="p-4 md:p-2 cursor-pointer focus:text-red-500"
            onClick={() => setNav(!nav)}
          >
            تعرف علينا
          </NavLink>
          <NavLink
            to="/subjects"
            className="p-4 md:p-2 cursor-pointer focus:text-red-500"
            onClick={() => setNav(!nav)}
          >
            الدكاترة
          </NavLink>
          <NavLink
            to="/GPA"
            className="p-4 md:p-2 cursor-pointer focus:text-red-500"
            onClick={() => setNav(!nav)}
          >
            احسب تقديرك
          </NavLink>
          <NavLink
            to="/faqs"
            className="p-4 md:p-2 cursor-pointer focus:text-red-500"
            onClick={() => setNav(!nav)}
          >
            الأسئلة الأكثر شيوعا
          </NavLink>
          <NavLink
            to="/contact"
            className="py-2 px-4 cursor-pointer  md:p-2 rounded-md hover:bg-purple-800 transition duration-200 bg-purple-900 text-white"
            onClick={() => setNav(!nav)}
          >
            تواصل معنا
          </NavLink>
        </ul>
        <div
          className="fixed top-2 left-2 md:hidden cursor-pointer"
          onClick={toggleNav}
        >
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
