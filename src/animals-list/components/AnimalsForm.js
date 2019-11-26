import React from "react";

import { AnimalsInput } from "./AnimalsInput";
import { useAnimalsFormHook } from "../hooks/useAnimalsFormHook";

import T from "prop-types";

export const AnimalsForm = ({
  initialAge,
  initialBreed,
  initialName,
  onAdd
}) => {
  const { animal, onChange, onSubmit } = useAnimalsFormHook({
    initialAge,
    initialBreed,
    initialName,
    onAdd
  });

  return (
    <form onSubmit={onSubmit} className="inputForm">
      <AnimalsInput
        type="number"
        name="age"
        onChange={onChange}
        value={animal.age}
        text="Age"
        placeholder="Age"
      />
      <AnimalsInput
        type="text"
        name="breed"
        onChange={onChange}
        value={animal.breed}
        text="Breed"
        placeholder="Breed"
      />
      <AnimalsInput
        type="text"
        name="name"
        onChange={onChange}
        value={animal.name}
        text="Name"
        placeholder="Name"
      />
      <button type="submit">Add</button>
    </form>
  );
};

AnimalsForm.defaultProps = {
  initialAge: 0,
  initialBreed: "",
  initialName: ""
};

AnimalsForm.propTypes = {
  initialAge: T.number,
  initialBreed: T.string,
  initialName: T.string
};
