import React from "react";
import FileUpload from "../../components/fileUpload/fileUpload";
import './generate.css';

const Generate = () => {
    return (
        <div className='container-fluid content'>
            <div className='row m-3' id="top-row">
                <div className='col-12 col-md-6'>
                    <FileUpload />
                </div>
                <div className='col-12 col-md-6'>
                    
                </div>
            </div>
        </div>
    );
};

export default Generate;