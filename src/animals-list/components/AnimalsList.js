import React from "react";

import { AnimalsListItem } from "./AnimalsListItem";

export const AnimalsList = ({ animals, onRemove }) => {
  return (
    <div className="list">
      <div className="listHeader">
        <div>Age</div>
        <div>Breed</div>
        <div>Name</div>
        <div>Delete</div>
      </div>
      {animals.map(animal => (
        <AnimalsListItem {...{ animal }} key={animal.id} onRemove={onRemove} />
      ))}
    </div>
  );
};
