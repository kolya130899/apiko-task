import uuid from "uuid/v4";

export const TODOS_ACTIONS = {
  ADD: "add",
  COMPLETE: "complete",
  REMOVE: "remove",
  EDIT: "edit"
  // FILTER: "filter"
};

export const initialState = () => {
  const todosFromStorage = localStorage.getItem("todos");
  const todosParsed = JSON.parse(todosFromStorage);

  return todosParsed || [];
};

export const todosReducer = (todos, action) => {
  switch (action.type) {
    case TODOS_ACTIONS.ADD:
      return [
        ...todos,
        {
          id: uuid(),
          text: action.text,
          completed: false
        }
      ];

    case TODOS_ACTIONS.COMPLETE:
      return todos.map(item =>
        action.id === item.id ? { ...item, completed: !item.completed } : item
      );

    case TODOS_ACTIONS.REMOVE:
      return todos.filter(item => action.id !== item.id);

    case TODOS_ACTIONS.EDIT:
      return todos.map(item =>
        action.newTodo.id === item.id ? action.newTodo : item
      );

    // case TODOS_ACTIONS.FILTER:
    //   return action.completed ? appState.filter(todo => !todo.completed) : todos; //remove completed todos from local storage

    default:
      throw new Error();
  }
};
