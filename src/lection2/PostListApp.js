import React, { Fragment } from "react";

import { PostList } from "./PostList";

export const PostListApp = () => {
  let limit = 10;
  return (
    <Fragment>
      <PostList {...{ limit }} />
    </Fragment>
  );
};
