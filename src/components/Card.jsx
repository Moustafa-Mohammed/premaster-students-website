import React from "react";

function Card({ item }) {
  const { name, GPA, description, imgURL, title, soundURL } = item;
  let audio = new Audio(soundURL);

  const start = () => {
    audio.play();
  };
  return (
    <figure
      className={`${
        GPA ? "bg-purple-200" : "bg-gray-200"
      } rounded-xl p-2 md:p-4 shadow-lg hover:scale-105 transition duration-300`}
    >
      <img
        className="w-24 h-24 rounded-full mx-auto shadow-xl bg-white"
        src={imgURL}
        alt=""
      />
      <div className="p-2 md:p-4 text-center space-y-4">
        <figcaption className="font-medium">
          <div className="text-purple-900 text-xl md:text-2xl font-bold">
            {name}
          </div>
          <div className="text-red-500 text-sm md:text-lg">{GPA || title}</div>
        </figcaption>

        <blockquote>
          <p className="text-xl font-medium text-slate-800 after:">
            {description}
          </p>
        </blockquote>
        <button className="btn bg-white hover:bg-gray-100" onClick={start}>
          اضغط على {name}
        </button>
      </div>
    </figure>
  );
}

export default Card;
