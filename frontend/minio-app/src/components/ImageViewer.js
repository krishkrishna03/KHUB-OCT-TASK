import React from 'react';

const ImageViewer = ({ imageUrl }) => {
  return (
    <div>
      <h2>Image Viewer</h2>
      <img
        src={imageUrl}
        alt="Selected Image"
        style={{ maxWidth: '100%', height: 'auto' }}
      />
    </div>
  );
};

export default ImageViewer;
