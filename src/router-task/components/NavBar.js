import React from "react";

import { Link, useLocation } from "react-router-dom";

import { ROUTES } from "../routes";

export const NavBar = ({ todos }) => {
  const { pathname } = useLocation();

  const isSingleReview = todos.map(
    todo => pathname === `${ROUTES.REVIEWS}/:${todo.id}`
  );

  console.log(isSingleReview);

  return isSingleReview.includes(true) ? null : (
    <ul className="navbar">
      <li>
        <Link to={ROUTES.HOME}>Home</Link>
      </li>
      <li>
        <Link to={ROUTES.SHOP}>Shop</Link>
      </li>
      <li>
        <Link to={ROUTES.REVIEWS}>Reviews</Link>
      </li>
    </ul>
  );
};
