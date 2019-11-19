import React from "react";

import T from "prop-types";

export const PostListItem = ({ id, title, body }) => {
  return (
    <li>
      <h2>{id}</h2>
      <h3>{title}</h3>
      <p>{body}</p>
    </li>
  );
};

PostListItem.propTypes = {
  id: T.number.isRequired,
  title: T.string.isRequired,
  body: T.string.isRequired
};
