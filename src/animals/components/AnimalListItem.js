import React, { useState } from "react";

import { AnimalsListItemNotEdit } from "./AnimalslistItemNotEdit";
import { AnimalsListItemEditForm } from "./AnimalsListItemEditForm";

import T from "prop-types";

export const AnimalListItem = ({ animal, onEdit, onRemove, ...props }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [editedAnimal, setEditedAnimal] = useState({
    id: animal.id,
    age: animal.age,
    breed: animal.breed,
    name: animal.name
  });

  const onClick = () => {
    setIsEdit(true);
  };
  const onChange = event => {
    setEditedAnimal({
      ...editedAnimal,
      [event.target.name]: event.target.value
    });
  };
  const onSubmit = event => {
    event.preventDefault();
    onEdit(editedAnimal);
    setIsEdit(false);
  };

  return isEdit ? (
    <AnimalsListItemEditForm {...{ editedAnimal, onChange, onSubmit }} />
  ) : (
    <AnimalsListItemNotEdit
      {...{ animal }}
      onClick={onClick}
      onRemove={onRemove}
      {...props}
    />
  );
};

AnimalListItem.propTypes = {
  animal: T.object.isRequired,
  onEdit: T.func.isRequired,
  onRemove: T.func.isRequired
};
