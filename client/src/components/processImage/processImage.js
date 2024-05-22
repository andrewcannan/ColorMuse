import React, { useState, useEffect } from "react";
import "./processImage.css";

const ProcessImage = ({ uploadedFile }) => {
    const [colors, setColors] = useState(Array(5).fill(null))

    const handleSubmit = async () => {
        if (!uploadedFile) {
            alert('Please select a file to be processed.')
            return;
        }

        const formData = new FormData();
        formData.append('image', uploadedFile)

        try {
            const response = await fetch('/process_image', {
                method: 'POST',
                body: formData,
            });
        }

        catch {

        }
    }

    return (
        <div className="container-fluid process-container">
            <div className="row m-3" id="button-row">
                <div className="col">
                    <button type="button" onClick={handleSubmit} className="btn btn-primary btn-lg btn-block">Generate</button>
                </div>
                <div className="col">
                    <button type="button" className="btn btn-outline-primary btn-lg btn-block">Save</button>
                </div>
            </div>
            <div className="row m-3" id="color-row">
                <div className="col">
                    {colors.map((color) => (
                        <div className="row border-gray px-0 color-display">
                            <div className="col-3" style={{ backgroundColor: color || "lightgray" }}></div>
                            <div className="col-9 color-text">Colour</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ProcessImage;