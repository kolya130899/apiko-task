import React from "react";

import "./style.css";

import { Text } from "./Text";
import { ToDoInput } from "./ToDoInput";
import { ToDoListItem } from "./ToDoListItem";
import { useTodosHook } from "./useTodosHook";

export const TestTaskApp = () => {
  const { todos, onAdd, onSwitch, onRemove, onEdit } = useTodosHook();
  return (
    <div className="app">
      <Text size="26px">ToDo List</Text>
      <ToDoInput onAdd={onAdd} />
      {todos.map(todo => (
        <div key={todo.id} className="toDoItem">
          <ToDoListItem
            {...{ todo }}
            onSwitch={onSwitch}
            onRemove={onRemove}
            onEdit={onEdit}
          />
        </div>
      ))}
    </div>
  );
};
