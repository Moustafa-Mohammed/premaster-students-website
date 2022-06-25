import React from "react";

function Card({ student }) {
  const { name, GPA, description, imgURL } = student;
  return (
    <figure class="bg-purple-100 rounded-xl p-2 md:p-4 shadow-lg hover:scale-105 transition duration-300">
      <img
        class="w-24 h-24 rounded-full mx-auto shadow-xl bg-white"
        src={imgURL}
        alt=""
      />
      <div class="p-2 md:p-4 text-center space-y-4">
        <figcaption class="font-medium">
          <div class="text-sky-500 dark:text-sky-400">{name}</div>
          <div class="text-slate-700 dark:text-slate-500">التقدير: {GPA}</div>
        </figcaption>

        <blockquote>
          <p class="text-lg font-medium text-slate-800">{description}</p>
        </blockquote>
      </div>
    </figure>
  );
}

export default Card;
