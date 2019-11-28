import React from "react";

import { AnimalsInput } from "./AnimalsInput";
import { useAnimalsForm } from "../hook/useAnimalsForm";

import T from "prop-types";

export const AnimalsForm = ({ onAdd, ...props }) => {
  const { animalItem, onChange, onSubmit } = useAnimalsForm({ onAdd });

  return (
    <form onSubmit={onSubmit} {...props}>
      <AnimalsInput
        type="number"
        onChange={event => onChange(event)}
        value={animalItem.age || ""}
        name="age"
        required
        className="form__item"
        placeholder="Age"
      />
      <AnimalsInput
        type="text"
        onChange={onChange}
        value={animalItem.breed || ""}
        name="breed"
        required
        className="form__item"
        placeholder="Breed"
      />
      <AnimalsInput
        type="text"
        onChange={onChange}
        value={animalItem.name || ""}
        name="name"
        required
        className="form__item"
        placeholder="Name"
      />
      <button type="submit" className="form__item">
        ADD
      </button>
    </form>
  );
};

AnimalsForm.propTypes = {
  onAdd: T.func.isRequired
};
