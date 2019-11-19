import React, { Fragment } from "react";
import ReactDOM from "react-dom";

import { PostList } from "./lection2/PostList";

const App = () => {
  let limit = 10;
  return (
    <Fragment>
      <PostList {...{ limit }} />
    </Fragment>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
