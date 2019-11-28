import { useState, useEffect } from "react";

import { initialState } from "../initialState";

import uuid from "uuid/v4";

export const useAnimalsAppHook = () => {
  const [animals, setAnimals] = useState(initialState());

  const onAdd = animal => {
    setAnimals([
      ...animals,
      {
        id: uuid(),
        age: animal.age,
        name: animal.name,
        breed: animal.breed
      }
    ]);
  };

  const onEdit = editedAnimal => {
    setAnimals(
      animals.map(item => (item.id === editedAnimal.id ? editedAnimal : item))
    );
  };

  const onRemove = id => {
    setAnimals(animals.filter(item => id !== item.id));
  };

  useEffect(() => {
    const animalsStrigified = JSON.stringify(animals);
    localStorage.setItem("animals", animalsStrigified);
  }, [animals]); //change will perform when animals is changed(equal to componentDidUpdate)

  return {
    animals,
    onAdd,
    onEdit,
    onRemove
  };
};
