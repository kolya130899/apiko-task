import React, { useRef, useEffect } from "react";
import { useToDoInputHook } from "../hooks/useToDoInputHook";

export const ToDoInput = ({ onAdd, initialValue }) => {
  const { value, onSubmit, onChange } = useToDoInputHook({
    onAdd,
    initialValue
  });

  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <form onSubmit={onSubmit}>
      <input {...{ value }} onChange={onChange} ref={inputRef} />
    </form>
  );
};

ToDoInput.defaultProps = {
  initialValue: ""
};
