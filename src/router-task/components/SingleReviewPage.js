import React from "react";
import { useHistory } from "react-router-dom";

export const SingleReviewPage = ({ todo }) => {
  let history = useHistory();
  return (
    <div>
      <div>{todo.text}</div>
      <button onClick={() => history.goBack()}>Back</button>
    </div>
  );
};
