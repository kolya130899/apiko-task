import React from "react";

import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import { Header } from "./Header";
import { HomePage } from "./HomePage";
import { AboutPage } from "./AboutPage";
import { ProductsPage } from "./ProductsPage";
import { ROUTES } from "./routes";
import { Login } from "./Login";

const isLoggedIn = true;

export const RouterApp = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route
        exact
        path={ROUTES.HOME}
        render={() =>
          isLoggedIn ? <HomePage /> : <Redirect to={ROUTES.NOT_FOUND} />
        }
      />
      {/*1.pay attention on EXACT
         2. render() method renders an element, component renders component     
      */}
      <Route path={ROUTES.PRODUCTS} component={ProductsPage} />
      <Route path={ROUTES.ABOUT} component={AboutPage} />
      <Route path={ROUTES.NOT_FOUND} render={() => <div>Not found</div>} />
      <Route path={ROUTES.LOGIN} component={Login} />
    </Switch>
  </BrowserRouter>
);
