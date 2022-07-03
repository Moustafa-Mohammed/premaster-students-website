import React from "react";

function Button({ type, children, onSubmit, styles }) {
  return (
    <button
      onClick={onSubmit}
      type={type || "button"}
      className="btn bg-purple-900 text-white mt-8 mx-auto block"
    >
      {children}
    </button>
  );
}

export default Button;
