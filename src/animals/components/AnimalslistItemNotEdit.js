import React from "react";

import { Icon } from "../../task/test-task/test-task-components/Icon";

import T from "prop-types";

export const AnimalsListItemNotEdit = ({
  animal,
  onClick,
  onRemove,
  ...props
}) => {
  return (
    <div {...props}>
      <div onClick={onClick} className="item">
        {animal.age}
      </div>
      <div onClick={onClick} className="item">
        {animal.breed}
      </div>
      <div onClick={onClick} className="item">
        {animal.name}
      </div>
      <div className="item">
        <Icon
          name="remove"
          onClick={() => onRemove(animal.id)}
          className="item__icon"
        />
      </div>
    </div>
  );
};

AnimalsListItemNotEdit.propTypes = {
  animal: T.object.isRequired,
  onClick: T.func.isRequired,
  onRemove: T.func.isRequired
};
