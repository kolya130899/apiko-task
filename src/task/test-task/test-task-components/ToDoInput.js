import React from "react";
import { useToDoInputHook } from "../hooks/useToDoInputHook";

export const ToDoInput = ({ onAdd, initialValue }) => {
  const { value, onSubmit, onChange } = useToDoInputHook({
    onAdd,
    initialValue
  });

  return (
    <form onSubmit={onSubmit}>
      <input {...{ value }} onChange={onChange} />
    </form>
  );
};

ToDoInput.defaultProps = {
  initialValue: ""
};
