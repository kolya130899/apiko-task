import React, { useState } from "react";

export const ToDoInput = ({ onAdd, initialValue }) => {
  const [value, setInputValue] = useState(initialValue);

  const onSubmit = event => {
    event.preventDefault();
    onAdd(value);
    setInputValue("");
  };

  const onChange = event => {
    setInputValue(event.target.value);
  };

  return (
    <form onSubmit={onSubmit}>
      <input {...{ value }} onChange={onChange} />
    </form>
  );
};

ToDoInput.defaultProps = {
  initialValue: ""
};
