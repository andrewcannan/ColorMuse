import React from "react";

const Footer = () => {
    return (
        <div className='container-fluid fixed-bottom bg-secondary'>
            <div className="row m-3">
                <div className="col xs-6 fs-5"><a className="text-white" href="https://github.com/andrewcannan" target="_blank" rel="noreferrer">GitHub <i className="fa-brands fa-github"></i></a></div>
                <div className="col xs-6 fs-5"><a className="text-white" href="https://www.linkedin.com/in/andrew-cannan/" target="_blank" rel="noreferrer">LinkedIn <i className="fa-brands fa-linkedin"></i></a></div>
            </div>
        </div>
    );
};

export default Footer;