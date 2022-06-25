import React from "react";
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-purple-300">
      <h1 className="text-3xl mb-4 font-bold">أهلًا بك في موقعنا</h1>
      <p className="text-slate-700">
        نصيحة لوجه الله، متقدمش في الكلية دراسات عليا
      </p>
      <NavLink
        to="/about"
        className="px-5 py-2 shadow-lg bg-purple-900 text-white rounded-lg hover:bg-purple-800 transition hover:-translate-y-0.5 transform mt-2"
      >
        تعرّف علينا
      </NavLink>
    </div>
  );
}

export default Home;
