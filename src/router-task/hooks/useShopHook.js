import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Portal } from "../components/Portal";
import { ROUTES } from "../routes";

export const useShopHook = () => {
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => {
    setShowModal(true);
  };
  const handleHide = () => {
    setShowModal(false);
  };

  const modal = showModal ? (
    <Portal id={"modal-root"}>
      <div className="modal">
        <div className="modal-body">
          <div>There is no products now</div>
          <Link to={ROUTES.HOME} onClick={handleHide} className="modalBtn">
            Ok
          </Link>
        </div>
      </div>
    </Portal>
  ) : null;

  return { modal, handleShow };
};
