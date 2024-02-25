from flask import Flask, request
from minio import Minio
from minio.error import S3Error
from flask_cors import CORS 
import os

# Initialize the Flask app
app = Flask(__name__)


# Enable CORS for your app
CORS(app)

# Initialize the Minio client
minio_client = Minio(
    "localhost:9000",  # Replace with the URL of your Minio server
    access_key="5v0UaPG7amlXzUxdqzs9",  # Replace with your access key
    secret_key="9nYwxUYM1ySZM5Fk5Dc9dVzjkH2JIegXI7SSTKmH",  # Replace with your secret key
    secure=False  # Set to True if your Minio server uses HTTPS
)

# Configure the upload folder for files
app.config['UPLOAD_FOLDER'] = 'uploads'

# Create the upload folder if it doesn't exist
os.makedirs(app.config['UPLOAD_FOLDER'], exist_ok=True)

# Replace "mybucket" with the name of your bucket
bucket_name = "simpleapplication"

if not minio_client.bucket_exists(bucket_name):
    minio_client.make_bucket(bucket_name)

# Route for file upload
@app.route('/upload', methods=['POST'])
def upload_file():
    try:
        file = request.files['file']
        if file:
            file.save(os.path.join(app.config['UPLOAD_FOLDER'], file.filename))
            minio_object_name = file.filename
            minio_client.fput_object(bucket_name, minio_object_name, os.path.join(app.config['UPLOAD_FOLDER'], file.filename))
            return 'File uploaded successfully'
        else:
            return 'No file provided', 400
    except Exception as e:
        return str(e), 500

# Route for listing files
@app.route('/files', methods=['GET'])
def list_files():
    try:
        file_list = minio_client.list_objects(bucket_name, prefix="")
        return [{'object_name': obj.object_name} for obj in file_list]
    except S3Error as e:
        return str(e), 500

if __name__ == '__main__':
    app.run(debug=True)
