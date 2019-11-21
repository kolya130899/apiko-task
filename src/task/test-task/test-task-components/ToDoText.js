import React, { useState } from "react";

import { Text } from "./Text";
import { ToDoInput } from "./ToDoInput";

export const ToDoText = ({ todo, onEdit, additionalStyles }) => {
  const [isEditable, setIsEditable] = useState(false);

  const onCLick = () => (todo.completed ? null : setIsEditable(true));

  const onSaveChanges = text => {
    setIsEditable(false);
    onEdit({ ...todo, text });
  };

  return isEditable ? (
    <ToDoInput onAdd={onSaveChanges} initialValue={todo.text} />
  ) : (
    <Text size="20px" {...additionalStyles} onCLick={onCLick}>
      {todo.text}
    </Text>
  );
};
