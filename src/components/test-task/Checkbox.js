import React, { useState, useEffect } from "react";

export const Checkbox = ({ todo, onSwitch }) => {
  const [checked, setChecked] = useState(false);

  const onChange = event => {
    onSwitch(event.target.value);
    setChecked(!checked);
  };

  useEffect(() => {
    setChecked(todo.completed);
  }, []);

  return (
    <input type="checkbox" value={todo.id} {...{ checked }} {...{ onChange }} />
  );
};
