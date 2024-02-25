import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ImageViewer from './ImageViewer'; // Import the ImageViewer component
import './FileList.css'; // Import the CSS file

const axiosInstance = axios.create({
  baseURL: 'http://localhost:5000', // Use the Flask backend URL
});

const FileList = () => {
  const [files, setFiles] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const fetchFiles = async () => {
      try {
        const response = await axiosInstance.get('/files');
        setFiles(response.data);
      } catch (error) {
        console.error('Failed to fetch files:', error);
      }
    };

    fetchFiles();
  }, []);

  // Function to handle image selection
  const handleImageSelect = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  return (
    <div className="file-list-container">
      <h2>File List</h2>
      <ul className="image-list">
        {files.map((file) => (
          <li key={file.object_name} className="image-list-item">
            <button
              className="image-select-button"
              onClick={() =>
                handleImageSelect(
                  `http://localhost:9000/simpleapplication/${file.object_name}`
                )
              }
            >
              {file.object_name}
            </button>
          </li>
        ))}
      </ul>
      {selectedImage && <ImageViewer imageUrl={selectedImage} />}
    </div>
  );
};

export default FileList;

