import React from "react";
import "./Modal.css";

function Modal({ displayImage, modal, presentImage, imageLength, closeModal }) {
  return (
    <>
      <section className="modal">
        <i className="fa fa-remove" onClick={closeModal}></i>
        <img src={displayImage.imageUrl} alt={displayImage.imageUrl} />
        <div
          className="arrowBtn fa fa-arrow-left"
          onClick={() => {
            let index = modal - 1;
            if (index < 0) {
              index = imageLength - 1;
            }
            presentImage(index);
          }}
        ></div>
        <div
          className="arrowBtn fa fa-arrow-right"
          onClick={() => {
            let index = modal + 1;
            if (index > imageLength - 1) {
              index = 0;
            }
            presentImage(index);
          }}
        ></div>
      </section>
    </>
  );
}

export default Modal;
