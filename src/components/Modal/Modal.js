import React from "react";
import "./Modal.scss";

const Modal = (props) => {
  return (
    <div className="modal">
      <div className="overlay">
        <div className="modal-content">
          <p>Are you sure you want to delete contact?</p>
          <button
            onClick={() => {
              props.deleteContact();
              props.toggle();
            }}
            className="modal-buttons"
          >
            Delete
          </button>
          <button onClick={props.toggle} className="modal-buttons">
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
