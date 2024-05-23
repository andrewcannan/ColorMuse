import React, { useState, useEffect } from "react";
import "./processImage.css";

const ProcessImage = ({ uploadedFile }) => {
    const [colors, setColors] = useState(Array(5).fill(null));
    const [needFetchNames, setNeedFetchNames] = useState(false);

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

            if (!response.ok) {
                throw new Error('Failed to upload File.')
            }

            const data = await response.json();

            const colors = data.colors
            setColors(colors)
            setNeedFetchNames(true)

        }

        catch (error) {
            console.error('Error uploading file:', error)
            alert('Failed to upload File.')
        }
    }

    const fetchColorNames = async () => {
        try {
            const hexValues = colors.map(color => color.replace('#', ''));

            const apiUrl = `https://api.color.pizza/v1/?values=${hexValues.join(',')}&list=wikipedia&noduplicates=true`;

            const response = await fetch(apiUrl);
            if (!response.ok) {
                throw new Error('Failed to fetch color names.');
            }

            const data = await response.json();

            const updatedColors = data.colors.map((color, index) => ({
                hex: colors[index],
                name: color.name
            }));
            setColors(updatedColors);
            setNeedFetchNames(false)
        }

        catch (error) {
            console.error('Error fetching color names:', error);
            alert('Error fetching color names')
        }
    };

    useEffect(() => {
        if (needFetchNames) {
            fetchColorNames();
        }
    }, [needFetchNames]);

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
                    {colors.map((color, index) => (
                        <div className="row border-gray px-0 color-display" key={index}>
                            <div className="col-3" style={{ backgroundColor: color?.hex || "lightgray" }}></div>
                            <div className="col-9 color-text">{color?.name || 'No Color'}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ProcessImage;