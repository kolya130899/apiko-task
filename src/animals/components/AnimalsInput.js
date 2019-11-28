import React from "react";

import T from "prop-types";

export const AnimalsInput = ({ type, onChange, value, ...props }) => {
  return <input {...{ type, ...props }} onChange={onChange} {...{ value }} />;
};

AnimalsInput.propTypes = {
  type: T.string.isRequired,
  onChange: T.func.isRequired,
  value: T.oneOfType([T.string, T.number]).isRequired
};
