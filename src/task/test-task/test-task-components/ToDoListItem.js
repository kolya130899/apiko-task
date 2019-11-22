import React from "react";

import { Checkbox } from "./Checkbox";
import { Icon } from "./Icon";
import { withCheckedStyles } from "../withCheckedStyles";
import { ToDoText } from "./ToDoText";

export const ToDoListItem = withCheckedStyles(
  ({ todo, onSwitch, onRemove, onEdit, additionalStyles }) => {
    return (
      <div className="toDoItem">
        <Checkbox {...{ todo, onSwitch }} />
        <ToDoText {...{ todo, additionalStyles, onEdit }} />
        <Icon name="remove" onClick={() => onRemove(todo.id)} />
      </div>
    );
  }
);
