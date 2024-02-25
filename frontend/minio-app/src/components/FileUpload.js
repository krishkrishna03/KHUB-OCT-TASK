import React, { useState } from 'react';
import axios from 'axios';
import './FileUpload.css'; // Import the CSS file

const axiosInstance = axios.create({
  baseURL: 'http://localhost:5000', // Use the Flask backend URL
});

const FileUpload = () => {
  const [file, setFile] = useState(null);
  const [uploadMessage, setUploadMessage] = useState('');

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setUploadMessage(''); // Clear any previous messages
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append('file', file);

    try {
      await axiosInstance.post('/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      setUploadMessage('File uploaded successfully.');
    } catch (error) {
      setUploadMessage('File upload failed.');
    }
  };

  return (
    <div className="file-upload-container">
      {/* Hidden file input with a label */}
      <input type="file" onChange={handleFileChange} className="file-input" id="file" />
      <label htmlFor="file" className="file-input-label">Choose File</label>
      {file && <p className="file-name">Selected File: {file.name}</p>}
      <button onClick={handleUpload} className="upload-button">Upload</button>
      <p className="message">{uploadMessage}</p>
    </div>
  );
};

export default FileUpload;
