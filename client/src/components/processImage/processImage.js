import React from "react";
import './processImage.css';

const ProcessImage = () => {
    return (
        <div className="container-fluid process-container">
            <div className="row m-3" id="button-row">
                <div className="col">
                    <button class="btn btn-primary btn-lg btn-block" type="submit">Generate</button>
                </div>
                <div className="col">
                    <button type="button" class="btn btn-outline-primary btn-lg btn-block">Save</button>
                </div>
            </div>
            <hr></hr>
            <div className="row m-3" id="color-row">
                <div className="col">
                    <div className="row border-gray px-0" id="color">
                        <div className="col-3 gray"></div><div className="col-9" id="color-text">Colour</div>
                    </div>
                    <div className="row border-gray px-0" id="color">
                        <div className="col-3 gray"></div><div className="col-9" id="color-text">Colour</div>
                    </div>
                    <div className="row border-gray px-0" id="color">
                        <div className="col-3 gray"></div><div className="col-9" id="color-text">Colour</div>
                    </div>
                    <div className="row border-gray px-0" id="color">
                        <div className="col-3 gray"></div><div className="col-9" id="color-text">Colour</div>
                    </div>
                    <div className="row border-gray px-0" id="color">
                        <div className="col-3 gray"></div><div className="col-9" id="color-text">Colour</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProcessImage;