import { useState } from "react";

export const useToDoInputHook = ({ onAdd, initialValue }) => {
  const [value, setInputValue] = useState(initialValue);

  const onSubmit = event => {
    event.preventDefault();
    onAdd(value);
    setInputValue("");
  };

  const onChange = event => {
    setInputValue(event.target.value);
  };

  return { value, onSubmit, onChange };
};
