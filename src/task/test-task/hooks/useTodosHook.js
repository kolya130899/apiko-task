import { useReducer, useEffect } from "react";
import { todosReducer, initialState, TODOS_ACTIONS } from "../todosReduser";

export const useTodosHook = () => {
  const [todos, dispatch] = useReducer(todosReducer, initialState());

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

  const onEdit = newTodo =>
    dispatch({
      newTodo,
      type: TODOS_ACTIONS.EDIT
    });

  useEffect(() => {
    const todosStrigified = JSON.stringify(todos);
    localStorage.setItem("todos", todosStrigified);
  }, [todos]); //change will perform when todos is changed

  return {
    todos,
    onAdd,
    onEdit,
    onSwitch,
    onRemove
  };
};
