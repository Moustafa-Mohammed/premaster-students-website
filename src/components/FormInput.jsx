import React from "react";

function FormInput({
  type,
  id,
  children,
  aria,
  value,
  onChange,
  name,
  required,
}) {
  return (
    <div>
      <label htmlFor={id} className="text-xl text-purple-500 mt-8 block">
        {children}
      </label>
      <input
        type={type}
        className="form-input"
        id={id}
        aria-describedby={aria}
        value={value}
        onChange={onChange}
        name={name}
        required={required}
      />
    </div>
  );
}

export default FormInput;
