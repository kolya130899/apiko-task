import { useState } from "react";

export const useAnimalsFormHook = ({
  initialAge,
  initialBreed,
  initialName,
  onAdd
}) => {
  const [animal, setAnimal] = useState({
    age: initialAge,
    breed: initialBreed,
    name: initialName
  });

  const onChange = event => {
    setAnimal({
      ...animal,
      [event.target.name]: event.target.value
    });
  };
  const onSubmit = event => {
    event.preventDefault();
    onAdd(animal);
    setAnimal({
      age: initialAge,
      breed: initialBreed,
      name: initialName
    });
  };

  return { animal, onChange, onSubmit };
};
