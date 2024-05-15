import React, { useState, useEffect } from "react";
import "./processImage.css";

const ProcessImage = () => {
    const [ colors, setColors ] = useState(Array(5).fill(null))

    return (
        <div className="container-fluid process-container">
            <div className="row m-3" id="button-row">
                <div className="col">
                    <button className="btn btn-primary btn-lg btn-block" type="submit">Generate</button>
                </div>
                <div className="col">
                    <button type="button" className="btn btn-outline-primary btn-lg btn-block">Save</button>
                </div>
            </div>
            <hr></hr>
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