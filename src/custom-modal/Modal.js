import "./modal.css";
import rules from "./image-rules-bonus.svg";

import { createPortal } from "react-dom";
import React from "react";

const Modal = ({ isOpen, onClose }) => {
  return createPortal(
    <div className={isOpen ? "modal active" : "modal"} onClick={onClose}>
      <div
        className={isOpen ? "modal-content active" : "modal-content"}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-header">
          <h2>RULES</h2>
          <div className="close" onClick={onClose}>
            &times;
          </div>
        </div>

        <img src={rules} alt="rules" />
      </div>
    </div>,
    document.body
  );
};

export default Modal;
