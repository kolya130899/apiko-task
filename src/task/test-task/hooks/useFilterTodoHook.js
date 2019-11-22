import { useState } from "react";

export const useFilterTodoHook = ({ todos }) => {
  const [complState, setComplState] = useState(false);

  const showFiltered = () => {
    setComplState(!complState);
  };

  const filterTodos = () =>
    complState ? todos.filter(todo => !todo.completed) : todos;

  return {
    complState,
    filterTodos,
    showFiltered
  };
};
