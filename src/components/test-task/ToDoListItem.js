import React, { Fragment } from "react";

import { Text } from "./Text";
import { Checkbox } from "./Checkbox";
import { Icon } from "./Icon";
import { withCheckedStyles } from "./withCheckedStyles";

export const ToDoListItem = withCheckedStyles(
  ({ todo, onSwitch, onRemove, additionalStyles }) => {
    return (
      <Fragment>
        <Checkbox {...{ todo, onSwitch }} />
        <Text size="16px" {...additionalStyles}>
          {todo.text}
        </Text>
        <Icon name="remove" onClick={() => onRemove(todo.id)} />
      </Fragment>
    );
  }
);
