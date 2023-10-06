import React from 'react';

class Modal extends React.Component {
  handleCloseModal = e => {
    const { onClose } = this.props;
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  render() {
    const { imageUrl, imageTag } = this.props;
    return (
      <div className="overlay visible" onClick={this.handleCloseModal}>
        <div className="modal visible">
          <img src={imageUrl} alt={imageTag} />
        </div>
      </div>
    );
  }
}
export default Modal;
