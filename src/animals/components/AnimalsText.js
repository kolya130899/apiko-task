import React from "react";

import T from "prop-types";

export const AnimalsText = ({ children, ...props }) => {
  return <div {...props}>{children}</div>;
};

AnimalsText.propTypes = {
  children: T.string.isRequired
};
