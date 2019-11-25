import React, { Fragment } from "react";

import { useLocation } from "react-router-dom";

export const AboutPage = () => {
  const { search } = useLocation();
  const name = "name";
  const value = new URLSearchParams(search).get(name);

  return (
    <Fragment>
      <div>You are on About page</div>
      <div>
        Query string name is {name} value is {value}
      </div>
    </Fragment>
  );
};
