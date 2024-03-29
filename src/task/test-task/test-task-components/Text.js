import React from "react";

import T from "prop-types";

export const Text = ({ size, children, onCLick, ...props }) => {
  return (
    <div onClick={onCLick} style={{ fontSize: size, ...props }}>
      {children}
    </div>
  );
};

Text.propTypes = {
  size: T.string,
  children: T.oneOfType([T.string, T.node, T.arrayOf(T.node)]).isRequired
};
Text.defaultProps = {
  size: "14px",
  onCLick: () => null
};
