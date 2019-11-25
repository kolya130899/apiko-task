import React, { Fragment } from "react";
import { useToDoInputHook } from "../../task/test-task/hooks/useToDoInputHook";
import { SingleReviewPage } from "./SingleReviewPage";
import {
  Switch,
  Route,
  useRouteMatch,
  Link,
  useLocation
} from "react-router-dom";
import { ROUTES } from "../routes";

export const ReviewsPage = ({ onAdd, initialValue, todos }) => {
  const { value, onSubmit, onChange } = useToDoInputHook({
    onAdd,
    initialValue
  });
  const { path } = useRouteMatch(ROUTES.REVIEWS);
  const { pathname } = useLocation();

  const isSingleReview = todos.map(
    todo => pathname === `${ROUTES.REVIEWS}/:${todo.id}`
  );

  return (
    <Fragment>
      {isSingleReview.includes(true) ? null : (
        <div>
          <div>Reviews page</div>
          <form onSubmit={onSubmit}>
            <input type="text" {...{ value }} onChange={onChange} />
          </form>
          <ul>
            {todos.map(todo => (
              <li key={todo.id}>
                <Link to={`${path}/:${todo.id}`}>{todo.text}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      <Switch>
        {todos.map(todo => (
          <Route
            path={`${path}/:${todo.id}`}
            key={todo.id}
            render={() => <SingleReviewPage {...{ todo }} />}
          />
        ))}
      </Switch>
    </Fragment>
  );
};

ReviewsPage.defaultProps = {
  initialValue: ""
};
