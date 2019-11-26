import React from "react";
import { Icon } from "../../task/test-task/test-task-components/Icon";

export const AnimalsListItem = ({ animal, onRemove }) => {
  const { age, breed, name } = animal;

  return (
    <div className="listItem">
      <div>{age}</div>
      <div>{breed}</div>
      <div>{name}</div>
      <Icon name="remove" onClick={() => onRemove(animal.id)} />
    </div>
  );
};
