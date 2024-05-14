import React from 'react';
import './home.css';
import heroImage from '../../assets/images/hero-image.png';


const Home = () => {
    return (
        <div className='container-fluid content'>
            <div className='row' id='top-row-home'>
                <div className='col-12 col-md-6 order-md-last hero-image'>
                    <img src={heroImage} alt="Image of a range of colors" />
                </div>
                <div className='col-12 col-md-6 mt-3 mt-md-0'>
                    <h1>Unleash Your Design Inspiration with Color Muse</h1>
                    <h2 className='fs-3 fw-normal'>Effortlessly Generate Color Palettes from Any Image</h2>
                    <a className='btn btn-primary mt-3 btn-lg' href='/generate'>Get Started</a>
                </div>

            </div>

            <div className='row' id='bottom-row-home'>
                <div col-8 offset-2>
                    <div className='card-group'>
                        <div className="card m-3 bg-primary text-white">
                            <div className="card-body">
                                <h5 className="card-title">Effortless Inspiration</h5>
                                <p className="card-text">Simply upload an image, and Color Muse will instantly extract stunning color palettes.</p>
                            </div>
                        </div>
                        <div className="card m-3 bg-primary text-white">
                            <div className="card-body">
                                <h5 className="card-title">Unlock New Creativity</h5>
                                <p className="card-text">Discover unexpected color combinations to spark fresh ideas for your design projects.</p>
                            </div>
                        </div>
                        <div className="card m-3 bg-primary text-white">
                            <div className="card-body">
                                <h5 className="card-title">Seamless Workflow</h5>
                                <p className="card-text">Easily view and copy color codes (hex codes) for direct use in your design software.</p>
                            </div>
                        </div>
                        <div className="card m-3 bg-primary text-white">
                            <div className="card-body">
                                <h5 className="card-title">Responsive Design</h5>
                                <p className="card-text">Access Color Muse from any device – desktop, mobile, or tablet.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;