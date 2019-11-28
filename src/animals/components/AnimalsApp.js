import React from "react";

import { AnimalsText } from "./AnimalsText";
import { AnimalsForm } from "./AnimalsForm";
import { AnimalListHeader } from "./AnimalListHeader";
import { AnimalListItem } from "./AnimalListItem";

import { useAnimalsAppHook } from "../hook/useAnimalsAppHook";

import "../styles/styles.css";

export const AnimalsApp = () => {
  const { animals, onAdd, onEdit, onRemove } = useAnimalsAppHook();

  return (
    <div className="app">
      <AnimalsText className="app__title">Animals List</AnimalsText>
      <AnimalsForm onAdd={onAdd} className="app__form" />
      <div className="app__list">
        <AnimalListHeader />
        {animals.map(animal => (
          <AnimalListItem
            key={animal.id}
            {...{ animal }}
            onEdit={onEdit}
            onRemove={onRemove}
            className="list__item"
          />
        ))}
      </div>
    </div>
  );
};
