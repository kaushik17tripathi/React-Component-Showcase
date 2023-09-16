import { useEffect } from "react";
import ReactDOM from "react-dom";

function Modal({ onClose, actionBar, children }) {

  useEffect(() => {
    //so that user cannot scroll when the modal is
    document.body.classList.add("overflow-hidden");

    return () => document.body.classList.remove("overflow-hidden");
  }, []);

  return ReactDOM.createPortal(
    <div>
      <div
        onClick={onClose}
        className="fixed inset-0 bg-gray-300 opacity-80"
      ></div>
      <div className="fixed inset-40 p-10 bg-white">
        <div className="flex flex-col justify-between h-full">
          {children}
          <div className="flex justify-end">{actionBar}</div>
        </div>
      </div>
    </div>,
    document.querySelector(".modal-container")
  );
}

export default Modal;

//createPortal is used to write some html other than the entire html this helped as now there is no parent having non static position because the parent is body first argument is the jsx we want to create and second is the reference to the created html

//fixed is used so that modal open where we are at the moment