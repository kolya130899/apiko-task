import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { HomePage } from "./HomePage";
import { ShopPage } from "./ShopPage";
import { ReviewsPage } from "./ReviewsPage";
import { NavBar } from "./NavBar";

import { useTodosHook } from "../../task/test-task/hooks/useTodosHook";

import { ROUTES } from "../routes";

import "../router.css";

export const RouterTaskApp = () => {
  const { todos, onAdd } = useTodosHook();
  return (
    <BrowserRouter>
      <NavBar {...{ todos }} />
      <Switch>
        <Route exact path={ROUTES.HOME} component={HomePage} />
        <Route path={ROUTES.SHOP} component={ShopPage} />
        <Route
          path={ROUTES.REVIEWS}
          component={() => <ReviewsPage onAdd={onAdd} {...{ todos }} />}
        />
      </Switch>
    </BrowserRouter>
  );
};
