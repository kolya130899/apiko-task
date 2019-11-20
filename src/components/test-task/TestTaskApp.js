import React, { useEffect, useReducer } from "react";

import "./style.css";

import { Text } from "./Text";
import { ToDoInput } from "./ToDoInput";
import { ToDoListItem } from "./ToDoListItem";
import { todosReducer, initialState, TODOS_ACTIONS } from "./todosReduser";

export const TestTaskApp = () => {
  // const todosFromStorage = localStorage.getItem("todos");
  // const todosParsed = JSON.parse(todosFromStorage);

  const [todos, dispatch] = useReducer(todosReducer, initialState());

  /**
   * WITH REDUCER
   */
  const onAdd = text =>
    dispatch({
      text,
      type: TODOS_ACTIONS.ADD
    });
  const onSwitch = id =>
    dispatch({
      id,
      type: TODOS_ACTIONS.COMPLETE
    });
  const onRemove = id =>
    dispatch({
      id,
      type: TODOS_ACTIONS.REMOVE
    });

  /**
   *  WITHOUT REDUCER
   */
  // const onAdd = text => {
  //   setTodos([
  //     ...todos,
  //     {
  //       id: uuid(),
  //       text,
  //       completed: false
  //     }
  //   ]);
  // };

  // const onSwitch = id => {
  //   setTodos(
  //     todos.map(item =>
  //       id === item.id ? { ...item, completed: !item.completed } : item
  //     )
  //   );
  // };

  // const onRemove = id => setTodos(todos.filter(item => id !== item.id));

  useEffect(() => {
    const todosStrigified = JSON.stringify(todos);
    localStorage.setItem("todos", todosStrigified);
  }, [todos]); //change will perform when todos is changed

  return (
    <div className="app">
      <Text size="18px">ToDo List</Text>
      <ToDoInput onAdd={onAdd} />
      {todos.map(todo => (
        <div key={todo.id} className="toDoItem">
          <ToDoListItem {...{ todo }} onSwitch={onSwitch} onRemove={onRemove} />
        </div>
      ))}
    </div>
  );
};
