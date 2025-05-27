import React, { useState } from "react";
import axios from "axios";
import s from "./fileuploadcomponent.module.css";

const FileUploadComponent = ({ onFileData, scanType }) => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [fileName, setFileName] = useState("File not selected");

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setSelectedFile(file);
        setFileName(file ? file.name : "File not selected");
    };

    const handleFileUpload = async () => {
        if (!selectedFile) {
            console.error("No file selected");
            return;
        }

        const formData = new FormData();
        formData.append("scanFile", selectedFile);
        formData.append("scanType", scanType);

        try {
            const response = await axios.post("/api/upload", formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });
            onFileData(response.data);
        } catch (error) {
            console.error("Error uploading file:", error);
        }
    };

    return (
        <div className={s.upload__container}>
            <div className={s.input__container}>
                <input
                    className={s.upload__input}
                    type="file"
                    id="fileInput"
                    onChange={handleFileChange}
                />
                <label htmlFor="fileInput" className={s.customFileLabel}>
                    Choose a file
                </label>
                <span className={s.fileName}>{fileName}</span>
            </div>

            <button className={s.upload__button} onClick={handleFileUpload}>
                Upload File
            </button>
        </div>
    );
};

export default FileUploadComponent;
