import React, { useState } from "react";
import FileUpload from "../../components/fileUpload/fileUpload";
import ProcessImage from "../../components/processImage/processImage";
import './generate.css';

const Generate = () => {
    const [ uploadedFile, setUploadedFile ] = useState(null);

    const handleFileUpload = (file) => {
        setUploadedFile(file);
    }

    return (
        <div className='container-fluid content'>
            <div className='row m-3 mt-5' id="top-row-generate">
                <div className='col-12 col-md-6 d-flex border'>
                    <FileUpload onFileUpload={handleFileUpload} />
                </div>
                <div className='col-12 col-md-6 d-flex'>
                    <ProcessImage uploadedFile={uploadedFile} />
                </div>
            </div>
        </div>
    );
};

export default Generate;