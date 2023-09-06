import React from 'react';

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        {/* Your form content goes here */}
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Modal;
