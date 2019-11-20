import React, { useState, useEffect } from "react";
import uuid from "uuid/v4";

import "./style.css";

import { Text } from "./Text";
import { ToDoInput } from "./ToDoInput";
import { ToDoListItem } from "./ToDoListItem";

export const TestTaskApp = () => {
  const todosFromStorage = localStorage.getItem("todos");
  const todosParsed = JSON.parse(todosFromStorage);

  const [todos, setTodos] = useState(todosParsed || []);

  const onAdd = text => {
    setTodos([
      ...todos,
      {
        id: uuid(),
        text,
        completed: false
      }
    ]);
  };

  const onSwitch = id => {
    setTodos(
      todos.map(item =>
        id === item.id ? { ...item, completed: !item.completed } : item
      )
    );
  };
  const onRemove = id => setTodos(todos.filter(item => id !== item.id));

  useEffect(() => {
    const todosStrigified = JSON.stringify(todos);
    localStorage.setItem("todos", todosStrigified);
  }, [todos]); //change will perform when todos is changed

  return (
    <div className="app">
      <Text size="18px">ToDo List</Text>
      <ToDoInput {...{ onAdd }} />

      {todos.map(todo => (
        <div key={todo.id} className="toDoItem">
          <ToDoListItem {...{ todo, onSwitch, onRemove }} />
        </div>
      ))}
    </div>
  );
};
