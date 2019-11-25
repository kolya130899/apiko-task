import React, { Fragment } from "react";
import { useShopHook } from "../hooks/useShopHook";

export const ShopPage = () => {
  const { modal, handleShow } = useShopHook();

  return (
    <Fragment>
      <div>Welcome to Shop</div>
      <button onClick={handleShow}>Buy</button>
      {modal}
    </Fragment>
  );
};
