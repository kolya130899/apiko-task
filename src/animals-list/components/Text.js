import React from "react";

import T from "prop-types";

export const Text = ({ children, className }) => {
  return <div {...{ className }}>{children}</div>;
};

Text.propTypes = {
  children: T.string.isRequired,
  className: T.string
};
