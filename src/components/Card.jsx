import React from "react";

function Card({ item }) {
  const { name, GPA, description, imgURL, title } = item;
  return (
    <figure className="bg-purple-100 rounded-xl p-2 md:p-4 shadow-lg hover:scale-105 transition duration-300">
      <img
        className="w-24 h-24 rounded-full mx-auto shadow-xl bg-white"
        src={imgURL}
        alt=""
      />
      <div className="p-2 md:p-4 text-center space-y-4">
        <figcaption className="font-medium">
          <div className="text-purple-900 text-xl font-bold">{name}</div>
          <div className="text-red-500">{GPA || title}</div>
        </figcaption>

        <blockquote>
          <p className="text-xl font-medium text-slate-800 after:">
            {description}
          </p>
        </blockquote>
      </div>
    </figure>
  );
}

export default Card;
