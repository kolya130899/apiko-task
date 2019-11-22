import React from "react";

export const FilterButton = ({ onClick, children }) => {
  return (
    <button onClick={onClick} className="filterBtn">
      {children}
    </button>
  );
};
