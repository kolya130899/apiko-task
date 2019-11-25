import React from "react";

import { Link, useLocation } from "react-router-dom";

import { ROUTES } from "./routes";

const modifiedAbout = `${ROUTES.ABOUT}?name=testAboutName `;

export const Header = () => {
  const { pathname } = useLocation();

  return pathname === ROUTES.LOGIN ? null : (
    <ul>
      <li>
        <Link to={ROUTES.HOME}>Home</Link>
      </li>
      <li>
        <Link to={ROUTES.PRODUCTS}>Products</Link>
      </li>
      <li>
        <Link to={modifiedAbout}>About</Link>
      </li>
    </ul>
  );
};
