import { useState } from "react";

export const useAnimalsForm = ({ onAdd, initialValue }) => {
  const [animalItem, setAnimalItem] = useState({
    age: initialValue,
    breed: initialValue,
    name: initialValue
  });
  const onChange = event => {
    setAnimalItem({
      ...animalItem,
      [event.target.name]: event.target.value
    });
  };
  const onSubmit = event => {
    event.preventDefault();
    onAdd(animalItem);
    setAnimalItem({
      age: initialValue,
      breed: initialValue,
      name: initialValue
    });
  };

  return { animalItem, onChange, onSubmit };
};

useAnimalsForm.defaultProps = {
  initialValue: ""
};
