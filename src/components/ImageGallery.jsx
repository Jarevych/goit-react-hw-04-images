import React from 'react';

const ImageGallery = ({ showImages, images, openFullSize }) => {
  return (
    <ul className="gallery">
      {showImages &&
        images.map(image => (
          <li className="gallery-item" key={image.id}>
            <img
              src={image.webformatURL}
              alt={image.tags}
              onClick={() => openFullSize(image.largeImageURL, image.tags)}
            />
          </li>
        ))}
    </ul>
  );
};

export default ImageGallery;
