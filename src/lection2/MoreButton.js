import React from "react";
import T from "prop-types";

export const MoreButton = ({ accumulateLimit }) => {
  return <button onClick={() => accumulateLimit()}>More</button>;
};

MoreButton.propTypes = {
  accumulateLimit: T.func.isRequired
};
