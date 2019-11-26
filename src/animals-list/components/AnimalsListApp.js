import React, { useState } from "react";
import { Text } from "./Text";
import { AnimalsForm } from "./AnimalsForm";
import { AnimalsList } from "./AnimalsList";

import "../styles/styles.css";

import uuid from "uuid/v4";

export const AnimalsListApp = () => {
  const [animals, setAnimal] = useState([]);

  const onAdd = animal => {
    setAnimal([
      ...animals,
      {
        id: uuid(),
        age: animal.age,
        breed: animal.breed,
        name: animal.name
      }
    ]);
  };
  const onRemove = animalId => {
    setAnimal(animals.filter(item => animalId !== item.id));
  };

  return (
    <div className="app">
      <Text className="title">Animal List</Text>
      <AnimalsForm onAdd={onAdd} />
      <AnimalsList {...{ animals }} onRemove={onRemove} />
    </div>
  );
};
