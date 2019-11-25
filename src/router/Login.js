import React, { Fragment } from "react";
import { useHistory } from "react-router-dom";

import { ROUTES } from "./routes";

export const Login = () => {
  const history = useHistory();

  const onClick = () => history.push(ROUTES.HOME);

  return (
    <Fragment>
      <div>Login Page</div>
      <button onClick={onClick}>Log in</button>
    </Fragment>
  );
};
