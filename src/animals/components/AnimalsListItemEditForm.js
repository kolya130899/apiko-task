import React from "react";

import { AnimalsInput } from "./AnimalsInput";

import T from "prop-types";

export const AnimalsListItemEditForm = ({
  editedAnimal,
  onSubmit,
  onChange,
  initialValue
}) => {
  return (
    <form onSubmit={onSubmit}>
      <AnimalsInput
        type="text"
        value={editedAnimal.age || initialValue}
        onChange={onChange}
        name="age"
      />
      <AnimalsInput
        type="text"
        value={editedAnimal.breed || initialValue}
        onChange={onChange}
        name="breed"
      />
      <AnimalsInput
        type="text"
        value={editedAnimal.name || initialValue}
        onChange={onChange}
        name="name"
      />
      <button type="submit">Save</button>
    </form>
  );
};

AnimalsListItemEditForm.defaultProps = {
  initialValue: ""
};
AnimalsListItemEditForm.propTypes = {
  editedAnimal: T.object,
  onSubmit: T.func.isRequired,
  onChange: T.func.isRequired
};
