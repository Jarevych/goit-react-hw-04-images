import React from 'react';

function Modal({onClose, imageUrl, imageTag}) {
  const handleCloseModal = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  return (
    <div className="overlay visible" onClick={handleCloseModal}>
      <div className="modal visible">
        <img src={imageUrl} alt={imageTag} />
      </div>
    </div>
  );
}
export default Modal;
