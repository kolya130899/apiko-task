import React, { Fragment } from "react";
import { Link, Route, Switch, useRouteMatch } from "react-router-dom";
import { ROUTES } from "./routes";

export const ProductsPage = () => {
  const { path } = useRouteMatch(ROUTES.PRODUCTS);

  const newPath = `${path}/new`;
  const oldPath = `${path}/old`;

  return (
    <Fragment>
      <div>Products page</div>
      <ul>
        <li>
          <Link to={newPath}>NEW</Link>
        </li>
        <li>
          <Link to={oldPath}>OLD</Link>
        </li>
      </ul>
      <Switch>
        <Route path={newPath} render={() => <div>NEW</div>} />
        <Route path={oldPath} render={() => <div>OLD</div>} />
      </Switch>
    </Fragment>
  );
};
