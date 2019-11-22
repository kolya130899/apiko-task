import React from "react";

import "../style.css";

import { Text } from "./Text";
import { ToDoInput } from "./ToDoInput";
import { ToDoListItem } from "./ToDoListItem";
import { useTodosHook } from "../hooks/useTodosHook";
import { FilterButton } from "./FilterButton";
import { useFilterTodoHook } from "../hooks/useFilterTodoHook";

export const TestTaskApp = () => {
  const { todos, onAdd, onSwitch, onRemove, onEdit } = useTodosHook();

  const { complState, filterTodos, showFiltered } = useFilterTodoHook({
    ...{ todos }
  });

  return (
    <div className="app">
      <Text size="26px">ToDo List</Text>
      <ToDoInput onAdd={onAdd} />
      <FilterButton onClick={showFiltered}>
        Show {complState ? "all" : "not completed"}
      </FilterButton>
      {filterTodos().map(todo => (
        <ToDoListItem
          key={todo.id}
          {...{ todo }}
          onSwitch={onSwitch}
          onRemove={onRemove}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
};
