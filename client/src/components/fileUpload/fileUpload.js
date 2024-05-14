import React, { useState } from 'react';
import './fileUpload.css';

const FileUpload = ({ onFileUpload }) => {
    const [image, setImage] = useState(null);
    const [disableInput, setDisableInput] = useState(false);

    const handleFileChange = (e) => {
        if (image) {
            return;
        }

        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onload = () => {
            setImage(reader.result);
            setDisableInput(true);
            onFileUpload(file);
        };
        reader.readAsDataURL(file);
    };

    return (
        <div className='temporary-container'>
            <label className="custom-file-upload">
                <input
                    type="file"
                    onChange={handleFileChange}
                    accept="image/*"
                    disabled={disableInput}
                />
                {image ? (
                    <img src={image} alt="Uploaded" className="uploaded-image" />
                ) : (
                    <>
                        <span><i class="fa-solid fa-plus"></i></span>
                        <br />
                        <span>Click to upload image.</span>
                    </>
                )}
            </label>
        </div>
    );
};

export default FileUpload;