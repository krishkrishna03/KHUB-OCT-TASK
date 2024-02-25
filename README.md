# KHUB-OCT-TASK


***BACKEND***

Certainly! Here's a document outlining the key points for the provided simple Flask backend application that interacts with a Minio server. This document provides an overview of the application's structure and functionality.

** Simple Flask Backend for Minio Integration

** Application Structure

These are the libraries importes in backend

from flask import Flask, request
from minio import Minio
from minio.error import S3Error
from flask_cors import CORS 
import os


1. **Flask Application Initialization**:
   - The application is created using Flask, a Python web framework.

2. **CORS Configuration**:
   - Cross-Origin Resource Sharing (CORS) is enabled using the `flask-cors` extension. This allows the frontend to make requests to the backend from a different origin.

3. **Minio Client Initialization**:
   - The Minio client is initialized with the following parameters:
     - Minio server URL (`localhost:9000`): Replace this with the URL of your Minio server.
     - Access key: Replace with your Minio access key.
     - Secret key: Replace with your Minio secret key.
     - Secure: Set to `True` if your Minio server uses HTTPS for secure communication.

4. **Upload Folder Configuration**:
   - The backend is configured to handle file uploads, and the upload folder is defined as `'uploads'`.

5. **Bucket Initialization**:
   - The application checks if the specified Minio bucket (`simpleapplication`) exists. If not, it creates the bucket.

#### Routes and Endpoints

6. **File Upload Route**:
   - Endpoint: `/upload`
   - HTTP Method: POST
   - Functionality: Handles file uploads.
   - Key Steps:
     - Receives a file via a POST request.
     - Saves the uploaded file to the defined upload folder.
     - Uses the Minio client to upload the file to the specified Minio bucket.
     - Returns a success message if the file is uploaded, or an error message if no file is provided or an error occurs.

7. **File Listing Route**:
   - Endpoint: `/files`
   - HTTP Method: GET
   - Functionality: Lists files stored in the Minio bucket.
   - Key Steps:
     - Uses the Minio client to retrieve a list of objects in the specified Minio bucket.
     - Returns a JSON response containing the list of object names.

#### Error Handling

8. **Error Handling**:
   - The application handles errors by returning appropriate HTTP status codes and error messages.
   - Errors are captured and handled within try-except blocks, providing detailed error messages in case of exceptions.

#### Running the Application

9. **Application Execution**:
   - The Flask application is executed with debugging enabled, allowing you to test and develop the application.

#### Usage and Integration

10. **Integration with Frontend**:
    - This backend application is designed to work in conjunction with a frontend application (not included in this code). It allows users to upload files and retrieve a list of uploaded files.

11. **Bucket Naming**:
    - Replace `"simpleapplication"` with the name of your desired Minio bucket.

12. **Minio Server Configuration**:
    - Ensure that your Minio server is correctly configured, and the Minio client's access key and secret key have appropriate permissions to interact with the server and buckets.

### Summary

This simple Flask backend application is designed to facilitate file uploads and file listing using a Minio server as the storage backend. It provides a foundation for creating applications that require file management and integration with a Minio object storage system.



![Screenshot (253)](https://github.com/RCTS-K-Hub/Oct_Team_06/assets/94297919/4dcc503b-6507-4f32-b00c-ca825fbc988d)







**FRONTEND**

Certainly! Here's a document outlining the key points for the provided React frontend application that interacts with the Flask backend and Minio for file upload and retrieval. This document provides an overview of the application's structure and functionality.

### React Frontend for Minio File Upload and Retrieval

#### Application Structure

1. **React Application Initialization**:
   - The application is created using React, a JavaScript library for building user interfaces.

2. **Styling**:
   - Styling for the components is achieved using CSS files, which are imported into the React components.

3. **Axios Configuration**:
   - Axios is used for making HTTP requests to the Flask backend.
   - An Axios instance (`axiosInstance`) is created with the base URL set to the Flask backend (`http://localhost:5000`).

#### File Upload Component

4. **FileUpload Component**:
   - This component handles file uploads.
   - It uses React state to manage the selected file and display upload messages.

5. **File Selection**:
   - Users can select a file by clicking the "Choose File" button, which opens a file input (hidden).
   - The selected file is stored in the component's state.

6. **File Upload**:
   - The "Upload" button triggers the file upload process.
   - The selected file is appended to a `FormData` object, which is sent in a POST request to the `/upload` endpoint of the Flask backend.

7. **Upload Status**:
   - Upload success or failure messages are displayed to the user based on the response from the server.

#### File List Component

8. **FileList Component**:
   - This component retrieves and displays a list of files stored in the Minio bucket through the Flask backend.

9. **Use Effect**:
   - The `useEffect` hook is used to fetch the list of files when the component mounts.

10. **File Listing**:
    - The component makes a GET request to the `/files` endpoint of the Flask backend.
    - The response is stored in the component's state.

11. **Image Selection**:
    - Users can select an image from the list, which triggers the display of the selected image in the ImageViewer component.

#### ImageViewer Component

12. **ImageViewer Component**:
    - This component displays the selected image.

13. **Image Source**:
    - The selected image source URL is passed to this component as a prop.

14. **Styling**:
    - The component applies styles to ensure the image is displayed with a maximum width and auto-adjusted height.

#### Root Application Component

15. **App Component**:
    - The root component of the application.
    - It includes the heading, FileUpload component, and FileList component.

#### Application Execution

16. **Running the Application**:
    - The React application can be run using the `npm start` or `yarn start` command. This starts the development server and opens the application in a web browser.
   
    - 
![123](https://github.com/RCTS-K-Hub/Oct_Team_06/assets/94297919/3c077bcb-2ffd-466c-a8ab-9872def3b3b7)

### Summary

This React frontend application is designed to interact with a Flask backend and Minio storage to facilitate file uploads and retrieval. It provides a user-friendly interface for users to upload files and view a list of uploaded images. The application can be extended or integrated with other features as needed for your specific use case.
