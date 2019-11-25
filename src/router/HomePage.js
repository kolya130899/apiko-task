import React from "react";
import { useLocation } from "react-router-dom";

export const HomePage = () => {
  const location = useLocation();

  console.log(location);

  return <div>Welcome</div>;
};
