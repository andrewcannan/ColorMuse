import React, { useEffect } from 'react';
import './navbar.css'

const NavBar = () => {
    useEffect(() => {
        const handleClickOutside = (event) => {
            let clickover = event.target;
            let opened = document.querySelector(".navbar-collapse").classList.contains("show");
            if (opened && !clickover.classList.contains("navbar-toggler")) {
                document.querySelector("button.navbar-toggler").click();
            }
        };

        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid ms-3">
                <a className="navbar-brand fs-1" href="/">ColorMuse</a>
                <button className="navbar-toggler custom-navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarToggler">
                    <ul className="navbar-nav me-3 mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" href="/generate">Generate</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;