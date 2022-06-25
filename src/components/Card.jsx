import React from "react";

function Card({ student }) {
  const { name, GPA, description, imgURL } = student;
  return (
    <div>
      <img src={imgURL} alt={imgURL} />
      <h4>{name}</h4>
      <small>{GPA}</small>
      <p>{description}</p>
    </div>
  );
}

export default Card;
