import React from "react";

export const AnimalsInput = ({ type, name, onChange, value, text }) => {
  return (
    <div className="inputBlock">
      <span>{text}:</span>
      <input {...{ type, name }} {...{ value }} onChange={onChange} required />
    </div>
  );
};
