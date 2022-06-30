import React from "react";
import { Link } from "react-router-dom";
import Typed from "react-typed";

function Home() {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <h1 className="text-3xl md:text-4xl mb-4 font-bold text-purple-900">
        <Typed
          strings={[
            "أسرة الكلية وعنهم سيادة النائب العسل مصطفى تتمنى الشفاء العاجل للطالبة ميرنا، أدام الله عليها تمام الصحة والعافية",
          ]}
          typeSpeed={50}
        />
      </h1>
      <p className="text-slate-600 md:text-xl">
        نصيحة لوجه الله، متقدمش في الكلية دراسات عليا
      </p>
      <Link
        to="/about"
        className="btn text-white font-bold  bg-purple-900  hover:bg-purple-700 "
      >
        تعرّف على الدفعة
      </Link>
    </div>
  );
}

export default Home;
