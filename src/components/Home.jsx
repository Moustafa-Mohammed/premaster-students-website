import React from "react";
import { Link } from "react-router-dom";
import Typed from "react-typed";

function Home() {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <h1 className="text-3xl md:text-4xl mb-4 font-bold text-purple-900">
        <Typed
          strings={["أهلًا بك في موقعنا", "اضغط على الزرّ للتعرف على الدفعة"]}
          typeSpeed={100}
          loop
        />
      </h1>
      <p className="text-slate-600 md:text-xl">
        نصيحة لوجه الله، متقدمش في الكلية دراسات عليا
      </p>
      <Link
        to="/about"
        className="px-5 py-2 shadow-lg text-white font-bold  bg-purple-900 rounded-lg hover:bg-purple-700 transition hover:-translate-y-0.5 transform mt-2 text-lg"
      >
        تعرّف على الدفعة
      </Link>
    </div>
  );
}

export default Home;
